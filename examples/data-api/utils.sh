get_app_id() {
  local app_name="$1"
  local app_id=$(jq -r ".app_id" "$app_name/realm_config.json")
  echo "$app_id"
}

delete_all_documents() {
  local app_name=$1
  local database=$2
  local collection=$3
  local app_id=$(get_app_id "$app_name")
  local result=$(
    curl -s https://data.mongodb-api.com/app/$app_id/endpoint/data/v1/action/deleteMany \
      -X POST \
      -H "apiKey: $API_KEY" \
      -H 'Content-Type: application/ejson' \
      -H "Accept: application/json" \
      -d '{"dataSource":"mongodb-atlas","database":"'"$database"'","collection":"'"$collection"'","filter":{}}'
  )
  echo "Deleted $(jq -r ".deletedCount" <<< $result) documents from $database.$collection"
}

create_data_api_app () {
  if [ -z "$ATLAS_PUBLIC_API_KEY" ]; then
    echo "You must specify your Atlas Public API Key as the env variable ATLAS_PUBLIC_API_KEY"
    exit 1
  fi
  if [ -z "$ATLAS_PRIVATE_API_KEY" ]; then
    echo "You must specify your Atlas Private API Key as the env variable ATLAS_PRIVATE_API_KEY"
    exit 1
  fi
  local app_name="$1"
  local cluster_name="$2"

  # Create a new App Services App for this test run
  echo "Creating a new App Services App..."
  npx -y mongodb-realm-cli login --profile "$app_name" --api-key $ATLAS_PUBLIC_API_KEY --private-api-key $ATLAS_PRIVATE_API_KEY
  npx mongodb-realm-cli app create --profile "$app_name" --name $app_name --cluster $cluster_name --cluster-service-name "mongodb-atlas" --location "US-VA" --deployment-model "GLOBAL"
  local app_id=$(get_app_id "$app_name")

  # Configure the App
  echo "Configuring the App..."
  ## Configure Data API
  cp ./backend/http_endpoints/data_api_config.json "./$app_name/http_endpoints/data_api_config.json"
  ## Configure Auth Providers
  cp ./backend/auth/providers.json "./$app_name/auth/providers.json"
  ## Configure rules
  cp ./backend/data_sources/mongodb-atlas/default_rule.json "./$app_name/data_sources/mongodb-atlas/default_rule.json"

  # Deploy the updates
  cd "$app_name"
  npx mongodb-realm-cli push --profile "$app_name" --yes
  echo "Successfully configured the App"
  cd ..
}

create_email_password_user () {
  local app_name="$1"
  local username="$2"
  local password="$3"
  local app_id=$(get_app_id "$app_name")
  npx mongodb-realm-cli users create --profile "$app_name" --app "$app_id" --type email --email "$username" --password "$password"
}

create_api_key_user () {
  local app_name="$1"
  local username="$2"
  local app_id=$(get_app_id "$app_name")
  local result=$(
    npx mongodb-realm-cli users create --profile "$app_name" --app "$CLIENT_APP_ID" --type api-key --name "$username" -f json
  )
  local api_key=$(jq -r ".doc.key" <<< $result)
  echo "$api_key"
}

delete_data_api_app () {
  local app_name="$1"
  local app_id=$(get_app_id "$app_name")

  npx mongodb-realm-cli app delete --profile "$app_name" --app "$app_id"
  rm -rf "$app_name"
}
