.. warning:: System Endpoints Are Not Secure
          
   In general, you should not enable ``run_as_system`` for the Data API,
   especially in a production environment, unless instructed to by
   MongoDB support.
   
   If you enable ``run_as_system`` without additional controls, like an
   IP access list, your linked data sources are effectively public.
   Anyone that knows your App ID can create, read, modify, and delete
   data in any collection.
   
   If your application requires API endpoints to run as
   system, consider using ``run_as_user_id_script_source``
   with ``{ "runAsSystemUser": true }`` instead to configure granular
   system access for each endpoint.
