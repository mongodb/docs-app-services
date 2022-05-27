The default expiration for refresh tokens is 60 days. :ref:`Anonymous user 
<anonymous-authentication>` refresh tokens effectively do not expire, 
although inactive users may be deleted after a period of inactivity. 
Custom JWT refresh tokens expire based on the expiration date provided 
in the :ref:`JWT payload <custom-jwt-authentication-jwt-payload>`.
