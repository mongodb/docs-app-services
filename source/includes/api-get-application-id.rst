To find an App ID, send a request to the :admin-api-endpoint:`List All
Apps <operation/adminListApplications>` API endpoint.

.. code-block:: sh

   curl --request GET \
     --header 'Authorization: Bearer <access_token>' \
     https://realm.mongodb.com/api/admin/v3.0/groups/{groupId}/apps

.. tip::

   Make sure to replace ``<access_token>`` and ``{groupId}`` with your own values.

The endpoint returns a list of Apps associated with the Atlas project.
Look for the App you're interested in and copy the ``_id`` value. This
is the value you use for ``{appId}`` in Admin API requests. This is
*not* the ``client_app_id``, which includes the app name.

.. example::

   .. code-block:: json
      :emphasize-lines: 3
      
      [
        {
            "_id": "5997529e46224c6e42gb6dd9",
            "group_id": "57879f6cc4b32dbe440bb8c5",
            "domain_id": "5886619e46124e4c42fb5dd8",
            "client_app_id": "myapp-abcde",
            "name": "myapp",
            "location": "US-VA",
            "deployment_model": "GLOBAL",
            "last_used": 1615153544,
            "last_modified": 0,
            "product": "standard",
            "environment": ""
        }
      ]
