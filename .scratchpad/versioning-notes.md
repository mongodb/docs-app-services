pick the most frequent time -- take your documents > JSON schema
JSON shcema > sdk models (each language)
manually define JSON schema

obile development is tough. We have a lot of users that they ship out a version
of their app, and if they wanted to go update their app and update their schema.
They have no guarantee that their users would update within multiple years that
poses a problem for them, because in traditional web development you could
deploy some changes to your server. Then kind of do a database migration, then
deploy some more changes to your server, and then, voila! but that's not the
case in mobile development


- both breaking and nonbreaking changes require schema update for both the client and the app
nonbreaking changes don't need further action other than the client update with the new model
breaking changes necessitate client reset following sync terminate/restart
and/or data cleansing in Atlas as well
and... adding non-required fields to a schema in Atlas means that not only is it a nonbreaking change, but existing apps don't need an update. You can keep version 1 of your client app in the field with the old schema while version 2 of the client app can be rolled out with the new schema.


This process can be exemplified here:
1. A client is operating a schema version 1
2. New client code is deployed using schema version 2
3. The client gets this new code
4. The client uploads all of their existing data at schema version 1
5. The client bootstraps (initial data download) again at schema version 2
6. The client now operates normally at schema version 2

.. TODO from Ben: The main distinction is that the developer must manually upgrade the client to the new schema version (by making the changes in the SDK)
