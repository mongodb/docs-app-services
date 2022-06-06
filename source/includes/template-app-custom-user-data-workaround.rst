**Custom User Data Configuration Bug Workaround:** The ``realm-cli apps
create`` command should output some JSON about the app you just created. Copy
the "url" value (something like ``https://realm.mongodb.com/groups/...``) and
visit that URL in your browser. Log in if you have to. From the app
dashboard, in the left-hand panel, click :guilabel:`App Users`. Click
:guilabel:`Custom User Data`. Ensure :guilabel:`Enable Custom User Data` is
``ON``. If it was not on, turn it on and enter "mongodb-atlas", "Item", and
"User" for :guilabel:`Cluster Name`, :guilabel:`Database Name`, and
:guilabel:`Collection Name`, respectively. For :guilabel:`User ID Field`,
enter ``_id``. Hit :guilabel:`Save`.