When first configuring the Edge Server instance, you're prompted to 
supply the Edge Server token. This is the token you got when you added 
the instance to your service.

If you no longer have the token, you can generate a new token from the
:ref:`edge-server-details` in your service.

The Edge Server instance exchanges this token for a secret. It uses the
secret to authenticate with Atlas when it syncs data.
