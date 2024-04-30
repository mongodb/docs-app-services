.. procedure::

   .. step:: Authenticate a MongoDB Atlas User

      .. include:: /includes/api-authenticate-instructions.rst

   .. step:: Get the List of Edge Server Instances

      Call the 
      :admin-api-endpoint:`Admin API List Edge Servers <operation/adminGetAllEdgeServerInstances>`
      endpoint to get a list of all the Edge Servers instances.

      Your request must include an ``Authorization`` header with your 
      Admin API access token as a 
      :mdn:`Bearer token <Web/HTTP/Authentication>`.

      .. code-block:: shell

         curl -X GET \
           https://services.cloud.mongodb.com/api/admin/v3.0/groups/{groupId}/apps/{appId}/edge \
           -H 'Content-Type: application/json' \
           -H 'Authorization: Bearer <AccessToken>'

      A successful request returns a ``200`` code, and an 
      ``edge_servers`` key whose values is an array of objects containing
      summary details for each Edge Server instance associated with the 
      ``appId``.

      .. code-block:: json

         {
           "edge_servers": [
             {
               "id": "6622b8f5118368b943d228a9",
               "created": "2024-04-19T08:51:00Z",
               "name": "Edge-Store-42",
               "user_id": "6622b8f5118368b943d2288a",
               "status": "active",
               "hostname": "ec2-13-58-70-88.us-east-2.compute.amazonaws.com",
               "last_connection": "2024-04-19T09:51:00Z"
             }
           ]
         }

      For more detailed information, find the ``id`` of the instance 
      whose details you want to view.

   .. step:: Call the Edge Server Info Endpoint

      Call the 
      :admin-api-endpoint:`Admin API Get Edge Server information <operation/adminGetEdgeServerInstance>`
      endpoint to get detailed information about an Edge Server instance.

      Your request must include an ``Authorization`` header with your 
      Admin API access token as a 
      :mdn:`Bearer token <Web/HTTP/Authentication>`.

      .. code-block:: shell

         curl -X GET \
           https://services.cloud.mongodb.com/api/admin/v3.0/groups/{groupId}/apps/{appId}/edge/{edgeServerId} \
           -H 'Content-Type: application/json' \
           -H 'Authorization: Bearer <AccessToken>'

      A successful request returns a ``200`` code, as well as a JSON
      object with detailed information about the Edge Server instance:

      .. code-block:: shell

         {
           "id": "6622b8f5118368b943d228a9",
           "created": "2024-04-19T08:51:00Z",
           "name": "Edge-Store-42",
           "user_id": "6622b8f5118368b943d2288a",
           "status": "active",
           "hostname": "ec2-13-58-70-88.us-east-2.compute.amazonaws.com",
           "last_connection": "2024-04-19T09:51:00Z",
           "query": {
             "Item": "(store_id == \"641cb3d99e425c794ef69315\")"
           },
           "package_version": "v0.21.2",
           "latest_package_version": "v0.22.2",
           "metrics": [
             {
               "key": "edge_host_memory_percent",
               "name": "Memory Usage",
               "category": "host",
               "detail": "Percentage of memory used by the edge container",
               "value": 15,
               "unit": "%"
             },
             ...additional Edge Server metrics...
           ]
         }

      For more information about this response body, refer to the API
      specification.
