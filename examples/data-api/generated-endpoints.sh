# #! /bin/bash

if [[ -z "$CLUSTER_NAME" ]]; then
    echo "Please provide your CLUSTER_NAME as an environment variable" 1>&2
    exit 1
fi
if [[ -z "$ATLAS_PUBLIC_API_KEY" ]] || [[ -z "$ATLAS_PRIVATE_API_KEY" ]]; then
    echo "Please provide your ATLAS_PUBLIC_API_KEY and ATLAS_PRIVATE_API_KEY as environment variables" 1>&2
    exit 1
fi

APP_NAME="data-api-tests"

deleteAllDocuments() {
  local database=$1
  local collection=$2
  local result=$(
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/deleteMany \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{"dataSource":"mongodb-atlas","database":"'"$database"'","collection":"'"$collection"'","filter":{}}'
  )
  echo "Deleted $(jq -r ".deletedCount" <<< $result) documents from $database.$collection"
}

oneTimeSetUp() {
  # Create a new App Services App for this test run
  echo "Creating a new App Services App..."
  npx -y mongodb-realm-cli login --profile $APP_NAME --api-key $ATLAS_PUBLIC_API_KEY --private-api-key $ATLAS_PRIVATE_API_KEY
  npx mongodb-realm-cli app create --profile $APP_NAME --name $APP_NAME --cluster $CLUSTER_NAME --cluster-service-name "mongodb-atlas" --location "US-VA" --deployment-model "GLOBAL"
  cd $APP_NAME

  # Save the App ID as a global variable for use in the tests
  CLIENT_APP_ID=$(jq -r ".app_id" ./realm_config.json)

  # Configure the App
  echo "Configuring the App..."
  ## Configure Data API
  local DataApiConfig='{"disabled":false,"versions":["v1"],"return_type":"EJSON"}'
  echo $DataApiConfig > http_endpoints/data_api_config.json
  ## Configure Auth Providers
  local ApiKeyConfig='{"name":"api-key","type": "api-key","disabled":false}'
  local EmailPasswordConfig='{"name":"local-userpass","type":"local-userpass","config":{"autoConfirm":true,"resetPasswordUrl":"https://www.example.com/reset-password","resetPasswordSubject":"Fake Reset Your Password (If you got this email it was a mistake!)"},"disabled":false}'
  local AuthProvidersConfig='{"api-key":'$ApiKeyConfig',"local-userpass":'$EmailPasswordConfig'}'
  echo $AuthProvidersConfig > auth/providers.json
  # Configure rules
  local DefaultRulesConfig='{"roles":[{"name":"readAndWriteAll","apply_when":{},"document_filters":{"write":true,"read":true},"read":true,"write":true,"insert":true,"delete":true,"search":true}],"filters":[]}'
  echo $DefaultRulesConfig > data_sources/mongodb-atlas/default_rule.json
  ## Deploy the updates
  npx mongodb-realm-cli push --profile $APP_NAME --yes
  echo "Successfully configured the App"
  cd ..

  # Create users for the tests. Store credentials as global variables for use in the tests.
  echo "Creating test users..."
  local now=$(date +%s)
  ## Create an email/password user
  EMAIL="data-api-test-$now"
  PASSWORD="Passw0rd!"
  local emailPasswordResult=$(
    npx mongodb-realm-cli users create --profile $APP_NAME --app $CLIENT_APP_ID --type email --email $EMAIL --password $PASSWORD
  )
  echo "Successfully created email/password user: $EMAIL"
  ## Create an API Key user
  local apiKeyResult=$(
    npx mongodb-realm-cli users create --profile $APP_NAME --app $CLIENT_APP_ID --type api-key --name $EMAIL -f json
  )
  API_KEY=$(jq -r ".doc.key" <<< $apiKeyResult)
  echo "Successfully created API key user: $EMAIL"

  # Delete any existing data in the test collections, e.g. from other failed test runs
  echo "Preparing test collections..."
  deleteAllDocuments "learn-data-api" "hello"
  deleteAllDocuments "learn-data-api" "tasks"
  echo "Successfully prepared test collections"
}

oneTimeTearDown() {
  [[ "${_shunit_name_}" = 'EXIT' ]] && return 0 # need this to suppress tearDown on script EXIT because apparently "one time" does not mean "only once"...
  # Nuke the App from orbit. It's the only way to be sure. https://www.youtube.com/watch?v=aCbfMkh940Q
  ## Delete all of our test data
  deleteAllDocuments "learn-data-api" "hello"
  deleteAllDocuments "learn-data-api" "tasks"
  ## Delete the App
  npx mongodb-realm-cli app delete --profile $APP_NAME --app $CLIENT_APP_ID
  rm -rf $APP_NAME
}

testHelloWorld() {
  result=$(
    # :snippet-start: hello-world
    # :replace-start: {
    #    "terms": {
    #       "$CLIENT_APP_ID": "myapp-abcde",
    #       "$API_KEY": "TpqAKQgvhZE4r6AOzpVydJ9a3tB1BLMrgDzLlBLbihKNDzSJWTAHMVbsMoIOpnM6",
    #       " \"_id\": { \"$oid\": \"64224f3cd79f54ad342dd9b1\" },": ""
    #    }
    # }
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/insertOne \
      -X POST \
      -H "Content-Type: application/ejson" \
      -H "Accept: application/json" \
      -H "apiKey: $API_KEY" \
      -d '{
        "dataSource": "mongodb-atlas",
        "database": "learn-data-api",
        "collection": "hello",
        "document": { "_id": { "$oid": "64224f3cd79f54ad342dd9b1" },
          "text": "Hello, world!"
        }
      }'
    # :replace-end:
    # :snippet-end:
  )
  local insertedId=$(jq -r ".insertedId" <<< "$result")
  assertEquals "64224f3cd79f54ad342dd9b1" "$insertedId"
}

testInsertOne() {
  result=$(
    # :snippet-start: insertOne
    # :replace-start: {
    #    "terms": {
    #       " \"_id\": { \"$oid\": \"64224f3cd79f54ad342dd9b2\" },": ""
    #    }
    # }
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/insertOne \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{
        "dataSource": "mongodb-atlas",
        "database": "learn-data-api",
        "collection": "tasks",
        "document": { "_id": { "$oid": "64224f3cd79f54ad342dd9b2" },
          "status": "open",
          "text": "Do the dishes"
        }
      }'
    # :replace-end:
    # :snippet-end:
  )
  local insertedId=$(jq -r ".insertedId" <<< "$result")
  assertEquals "64224f3cd79f54ad342dd9b2" $insertedId
}

testInsertMany() {
  result=$(
    # :snippet-start: insertMany
    # :replace-start: {
    #    "terms": {
    #       " \"_id\": { \"$oid\": \"64224f4d089104f1766116a5\" },": "",
    #       " \"_id\": { \"$oid\": \"64224f57f56e634f459586f0\" },": ""
    #    }
    # }
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/insertMany \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{
        "dataSource": "mongodb-atlas",
        "database": "learn-data-api",
        "collection": "tasks",
        "documents": [
          { "_id": { "$oid": "64224f4d089104f1766116a5" },
            "status": "open",
            "text": "Mop the floor"
          },
          { "_id": { "$oid": "64224f57f56e634f459586f0" },
            "status": "open",
            "text": "Clean the windows"
          }
        ]
      }'
    # :replace-end:
    # :snippet-end:
  )
  local insertedIds=$(jq -rc ".insertedIds" <<< "$result")
  assertEquals '["64224f4d089104f1766116a5","64224f57f56e634f459586f0"]' $insertedIds
}

testUpdateOne() {
  result=$(
    # :snippet-start: updateOne
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/updateOne \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{
        "dataSource": "mongodb-atlas",
        "database": "learn-data-api",
        "collection": "tasks",
        "filter": {
          "_id": { "$oid": "64224f4d089104f1766116a5" }
        },
        "update": {
          "$set": {
            "status": "complete",
            "completedAt": { "$date": { "$numberLong": "1680105272788" } }
          }
        }
      }'
    # :snippet-end:
  )
  local matchedCount=$(jq -rc ".matchedCount" <<< "$result")
  local modifiedCount=$(jq -rc ".modifiedCount" <<< "$result")
  assertEquals 1 $matchedCount
  assertEquals 1 $modifiedCount
}

testUpdateMany() {
  result=$(
    # :snippet-start: updateMany
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/updateMany \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{
        "dataSource": "mongodb-atlas",
        "database": "learn-data-api",
        "collection": "tasks",
        "filter": {
          "status": "open"
        },
        "update": {
          "$set": {
            "status": "complete",
            "completedAt": { "$date": { "$numberLong": "1680105287069" } }
          }
        }
      }'
    # :snippet-end:
  )
  local matchedCount=$(jq -rc ".matchedCount" <<< "$result")
  local modifiedCount=$(jq -rc ".modifiedCount" <<< "$result")
  assertEquals 2 $matchedCount
  assertEquals 2 $modifiedCount
}

testFindOne() {
  result=$(
    # :snippet-start: findOne
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/findOne \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{
        "dataSource": "mongodb-atlas",
        "database": "learn-data-api",
        "collection": "tasks",
        "filter": {
          "text": "Do the dishes"
        }
      }'
    # :snippet-end:
  )
  local document=$(jq -rc ".document" <<< "$result")
  assertEquals '{"_id":"64224f3cd79f54ad342dd9b2","status":"complete","text":"Do the dishes","completedAt":"2023-03-29T15:54:47.069Z"}' "$document"
}

testFindMany() {
  result=$(
    # :snippet-start: find
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/find \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{
        "dataSource": "mongodb-atlas",
        "database": "learn-data-api",
        "collection": "tasks",
        "filter": {
          "status": "complete"
        },
        "sort": { "completedAt": 1 },
        "limit": 10
      }'
    # :snippet-end:
  )
  local documents=$(jq -rc ".documents" <<< "$result")
  assertEquals '[{"_id":"64224f4d089104f1766116a5","status":"complete","text":"Mop the floor","completedAt":"2023-03-29T15:54:32.788Z"},{"_id":"64224f3cd79f54ad342dd9b2","status":"complete","text":"Do the dishes","completedAt":"2023-03-29T15:54:47.069Z"},{"_id":"64224f57f56e634f459586f0","status":"complete","text":"Clean the windows","completedAt":"2023-03-29T15:54:47.069Z"}]' "$documents"
}

testAggregate() {
  result=$(
    # :snippet-start: aggregate
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/aggregate \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{
        "dataSource": "mongodb-atlas",
        "database": "learn-data-api",
        "collection": "tasks",
        "pipeline": [
          {
            "$match": { "status": "complete" }
          },
          {
            "$group": {
              "_id": "$status",
              "count": { "$sum": 1 },
              "tasks": { "$push": "$text" }
            }
          },
          {
            "$sort": { "count": -1 }
          }
        ]
      }'
    # :snippet-end:
  )
  local documents=$(jq -rc ".documents" <<< "$result")
  assertEquals '[{"_id":"complete","count":3,"tasks":["Do the dishes","Mop the floor","Clean the windows"]}]' "$documents"
}

testReplaceOne() {
  result=$(
    # :snippet-start: replaceOne
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/replaceOne \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{
        "dataSource": "mongodb-atlas",
        "database": "learn-data-api",
        "collection": "tasks",
        "filter": {
          "text": "Clean the windows"
        },
        "replacement": {
          "status": "open",
          "text": "Re-clean the windows"
        }
      }'
    # :snippet-end:
  )
  local matchedCount=$(jq -rc ".matchedCount" <<< "$result")
  local modifiedCount=$(jq -rc ".modifiedCount" <<< "$result")
  assertEquals 1 $matchedCount
  assertEquals 1 $modifiedCount
}

testDeleteOne() {
  result=$(
    # :snippet-start: deleteOne
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/deleteOne \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{
        "dataSource": "mongodb-atlas",
        "database": "learn-data-api",
        "collection": "tasks",
        "filter": {
          "_id": { "$oid": "64224f3cd79f54ad342dd9b2" }
        }
      }'
    # :snippet-end:
  )
  local deletedCount=$(jq -rc ".deletedCount" <<< "$result")
  assertEquals 1 $deletedCount
}

testDeleteMany() {
  result=$(
    # :snippet-start: deleteMany
    curl -s https://data.mongodb-api.com/app/$CLIENT_APP_ID/endpoint/data/v1/action/deleteMany \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{
        "dataSource": "mongodb-atlas",
        "database": "learn-data-api",
        "collection": "tasks",
        "filter": {
          "status": "complete"
        }
      }'
    # :snippet-end:
  )
  local deletedCount=$(jq -rc ".deletedCount" <<< "$result")
  assertEquals 1 $deletedCount
}

. shunit2
