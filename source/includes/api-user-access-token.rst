Bearer authentication is useful for:

- sending requests from a web browser.

- sending multiple requests without storing user credentials or prompting the user on each request.

- sending requests from an app that also uses a :ref:`Realm SDK
  <realm-sdks>` to authenticate users.

.. tip::

   If you want to verify that a user access token is valid, you can use
   your App's :admin-api-endpoint:`/users/verify_token
   <#tag/users/operation/adminVerifyUserAccessToken>` Admin API
   endpoint.

Get a User Access Token from a Realm SDK
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the Realm SDKs, you can access a logged in user's access token from
their ``User`` object. The SDKs can refresh expired access tokens.

.. tabs-realm-languages::
   
   .. tab::
      :tabid: javascript
      
      .. code-block:: javascript
         :emphasize-lines: 11
         
         // Gets a valid user access token to authenticate requests
         async function getValidAccessToken() {
           // Guarantee that there's a logged in user with a valid access token
           if (!app.currentUser) {
             throw new Error(`Must be logged in to get a valid user access token`);
           } else {
             // An already logged in user's access token might be stale. To
             // guarantee that the token is valid, refresh it if necessary.
             await app.currentUser.refreshAccessToken();
           }
           return app.currentUser.accessToken;
         }
   
   .. tab::
      :tabid: java
      
      .. code-block:: java
         :emphasize-lines: 11
         
         // Gets a valid user access token to authenticate requests
         public String getValidAccessToken() {
           // Guarantee that there's a logged in user with a valid access token
           if (app.currentUser() == null) {
             throw new Error(`Must be logged in to get a valid user access token`);
           } else {
             // An already logged in user's access token might be stale. To
             // guarantee that the token is valid, refresh it if necessary.
             app.currentUser().refreshAccessToken();
           }
           return app.currentUser().getAccessToken();
         }
   
   .. tab::
      :tabid: swift
      
      .. code-block:: swift
         :emphasize-lines: 14
         
         enum AccessTokenError: Error {
           case notLoggedIn(String)
         }
         
         // Gets a valid user access token to authenticate requests
         func getValidAccessToken() throws -> String {
           // Guarantee that there's a logged in user with a valid access token
           guard let user = app.currentUser else {
             throw AccessTokenError.notLoggedIn("Must be logged in to get a valid user access token")
           }
           // An already logged in user's access token might be stale. To
           // guarantee that the token is valid, refresh it if necessary.
           user.refreshCustomData()
           return user.accessToken!
         }
   
   .. tab::
      :tabid: c-sharp
      
      .. code-block:: csharp
         :emphasize-lines: 15
         
         // Gets a valid user access token to authenticate requests
         public async Task<string> GetValidAccessToken()
         {
             // Guarantee that there's a logged in user with a valid access token
             if (app.CurrentUser == null)
             {
                 throw new Exception("Must be logged in to get a valid user access token");
             }
             else
             {
                 // An already logged in user's access token might be stale. To
                 // guarantee that the token is valid, refresh it if necessary.
                 await app.CurrentUser.RefreshCustomDataAsync();
             }
             return app.CurrentUser.AccessToken;
         }
   
   .. tab::
      :tabid: dart
      
      .. code-block:: dart
         
         Future<String> getValidAccessToken(User user) async {
           // An already logged in user's access token might be stale. To
           // guarantee that the token is valid, refresh it if necessary.
           await user.refreshCustomData();
           return user.accessToken;
         }

Get a User Access Token Over HTTP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can get an access token by sending an authentication request
directly to App Services over HTTP. The authentication endpoint
accepts an HTTPS POST request with a JSON body that contains user
credentials. If the credentials are valid, the response contains a user
access token.

The authentication endpoint URL depends on your app's deployment model.
Select a deployment model below for more information.

.. tabs::

   .. tab:: Global Deployment
      :tabid: global

      .. code-block:: text
         
         https://realm.mongodb.com/api/client/v2.0/app/<App ID>/auth/providers/<provider-name>/login
      
      - ``<AppID>`` is your client app ID. For example, ``myapp-abcde``.
      - ``<ProviderType>`` is the authentication provider type. For example, ``local-userpass``.

   .. tab:: Local Deployment
      :tabid: local

      .. code-block:: text
         
         https://<Region>.<Cloud>.realm.mongodb.com/api/client/v2.0/app/<AppID>/auth/providers/<ProviderType>/login
      
      - ``<Region>`` is the region where your app is hosted. For example, ``us-east-1``.
      - ``<Cloud>`` is the cloud where your app is hosted. For example, ``aws``.
      - ``<AppID>`` is your client app ID. For example, ``myapp-abcde``.
      - ``<ProviderType>`` is the authentication provider type. For example, ``local-userpass``.

.. tip::
   
   You can find your app's Client API base URL programmatically by
   calling the location endpoint. The response body includes the base URL
   as the ``hostname`` field.
   
   .. io-code-block::
      
      .. input::
         :language: shell

         curl 'https://realm.mongodb.com/api/client/v2.0/app/<AppID>/location'
      
      .. output::
         :language: json
         :emphasize-lines: 4

         {
           "deployment_model": "LOCAL",
           "location": "US-VA",
           "hostname": "https://us-east-1.aws.realm.mongodb.com",
           "ws_hostname": "wss://ws.us-east-1.aws.realm.mongodb.com"
         }

.. example::
   
   The following examples show how to authenticate a user for each authentication provider.

   .. tabs-realm-auth-providers::

      .. tab::
         :tabid: anon-user

         .. code-block:: shell
         
            curl -X POST 'https://realm.mongodb.com/api/client/v2.0/app/myapp-abcde/auth/providers/anon-user/login'

      .. tab::
         :tabid: local-userpass

         .. code-block:: shell
            :emphasize-lines: 4-5
         
            curl -X POST 'https://realm.mongodb.com/api/client/v2.0/app/myapp-abcde/auth/providers/local-userpass/login' \
              --header 'Content-Type: application/json' \
              --data-raw '{
                "username": "test@example.com",
                "password": "Pa55w0rd"
              }'

      .. tab::
         :tabid: api-key

         .. code-block:: shell
            :emphasize-lines: 4
         
            curl -X POST 'https://realm.mongodb.com/api/client/v2.0/app/myapp-abcde/auth/providers/api-key/login' \
              --header 'Content-Type: application/json' \
              --data-raw '{
                "key": "hScMWZyOKnjQMbfDPMJ1qHgtdGT2raQXdVDDvlC2SzKEBKlHKV8FK9SPCSTnODPg"
              }'

      .. tab::
         :tabid: custom-token

         .. code-block:: shell
            :emphasize-lines: 4
         
            curl -X POST 'https://realm.mongodb.com/api/client/v2.0/app/myapp-abcde/auth/providers/custom-token/login' \
              --header 'Content-Type: application/json' \
              --data-raw '{
              	 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZXN0ZGV2LWJwcWVsIiwiZXhwIjoxNTE2MjM5MDIyLCJzdWIiOiIyNDYwMSIsInVzZXJfZGF0YSI6eyJuYW1lIjoiSmVhbiBWYWxqZWFuIiwiYWxpYXNlcyI6WyJNb25zaWV1ciBNYWRlbGVpbmUiLCJVbHRpbWUgRmF1Y2hlbGV2ZW50IiwiVXJiYWluIEZhYnJlIl19fQ.mVWr4yFf8nD1EhuhrJbgKfY7BEpMab38RflXzUxuaEI"
              }'
   
   If the authentication request succeeds, the response body includes
   ``access_token`` and ``refresh_token`` values for the user. The
   ``access_token`` is a JSON Web Token (JWT) that you can use to
   authenticate requests.

   .. code-block:: json
      :emphasize-lines: 2
      
      {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNWVlYTg2NjdiY2I0YzgxMGI2NTFmYjU5IiwiZXhwIjoxNjY3OTQwNjE4LCJpYXQiOjE2Njc5Mzg4MTgsImlzcyI6IjYzNmFiYTAyMTcyOGI2YzFjMDNkYjgzZSIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjVlZWE4NjY3YmNiNGM4MTBiNjUxZmI1OSIsInN1YiI6IjYzNmFiYTAyMTcyOGI2YzFjMDNkYjdmOSIsInR5cCI6ImFjY2VzcyJ9.pyq3nfzFUT-6r-umqGrEVIP8XHOw0WGnTZ3-EbvgbF0",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RhdGEiOm51bGwsImJhYXNfZGV2aWNlX2lkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwiYmFhc19kb21haW5faWQiOiI1ZWVhODY2N2JjYjRjODEwYjY1MWZiNTkiLCJiYWFzX2lkIjoiNjM2YWJhMDIxNzI4YjZjMWMwM2RiODNlIiwiYmFhc19pZGVudGl0eSI6eyJpZCI6IjYzNmFiYTAyMTcyOGI2YzFjMDNkYjdmOC1ud2hzd2F6ZHljbXZycGVuZHdkZHRjZHQiLCJwcm92aWRlcl90eXBlIjoiYW5vbi11c2VyIiwicHJvdmlkZXJfaWQiOiI2MjRkZTdiYjhlYzZjOTM5NjI2ZjU0MjUifSwiZXhwIjozMjQ0NzM4ODE4LCJpYXQiOjE2Njc5Mzg4MTgsInN0aXRjaF9kYXRhIjpudWxsLCJzdGl0Y2hfZGV2SWQiOiIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJzdGl0Y2hfZG9tYWluSWQiOiI1ZWVhODY2N2JjYjRjODEwYjY1MWZiNTkiLCJzdGl0Y2hfaWQiOiI2MzZhYmEwMjE3MjhiNmMxYzAzZGI4M2UiLCJzdGl0Y2hfaWRlbnQiOnsiaWQiOiI2MzZhYmEwMjE3MjhiNmMxYzAzZGI3Zjgtbndoc3dhemR5Y212cnBlbmR3ZGR0Y2R0IiwicHJvdmlkZXJfdHlwZSI6ImFub24tdXNlciIsInByb3ZpZGVyX2lkIjoiNjI0ZGU3YmI4ZWM2YzkzOTYyNmY1NDI1In0sInN1YiI6IjYzNmFiYTAyMTcyOGI2YzFjMDNkYjdmOSIsInR5cCI6InJlZnJlc2gifQ.h9YskmSpSLK8DMwBpPGuk7g1s4OWZDifZ1fmOJgSygw",
        "user_id": "636aba021728b6c1c03db7f9"
      }

Refresh a User Access Token Over HTTP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Access tokens expire 30 minutes after they are granted. When an access
token expires, you must get a new access token to continue sending
requests. You can either re-authenticate using the user's credentials or
use the user's refresh token to request a new access token.

.. include:: /includes/refresh-token-expiration.rst

The Client API session refresh endpoint accepts a ``POST`` request that
includes the refresh token in the ``Authorization`` header. The endpoint
uses the following URL:

.. tabs::

   .. tab:: Global Deployment
      :tabid: global

      .. code-block:: text
         
         https://realm.mongodb.com/api/client/v2.0/auth/session

   .. tab:: Local Deployment
      :tabid: local

      .. code-block:: text
         
         https://<Region>.<Cloud>.realm.mongodb.com/api/client/v2.0/auth/session
      
      - ``<Region>`` is the region where your app is hosted. For example, ``us-east-1``.
      - ``<Cloud>`` is the cloud where your app is hosted. For example, ``aws``.

.. example::

   The following example demonstrates how to use a refresh token to get
   a new, valid access token. Replace ``<RefreshToken>`` with the
   user's ``refresh_token``.
   
   .. io-code-block::
      
      .. input::
         :language: shell
         :emphasize-lines: 3
         
         curl -X POST 'https://realm.mongodb.com/api/client/v2.0/auth/session' \
           --header 'Content-Type: application/json' \
           --header 'Authorization: Bearer <RefreshToken>'
      
      .. output::
         :language: json
         :emphasize-lines: 2
         
         {
         	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNWVlYTg2NjdiY2I0YzgxMGI2NTFmYjU5IiwiZXhwIjoxNjY3OTQzOTc5LCJpYXQiOjE2Njc5NDIxNzksImlzcyI6IjYzNmFjNzAyMDE5ZDJkYmY0NzUxMDRjMiIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjVlZWE4NjY3YmNiNGM4MTBiNjUxZmI1OSIsInN1YiI6IjYzNmFjNzAyMDE5ZDJkYmY0NzUxMDQ5MyIsInR5cCI6ImFjY2VzcyJ9.pF3DR-096Ujt9-0KOWJTU25ZuryvwMfeCI7TiHJERNg"
         }
