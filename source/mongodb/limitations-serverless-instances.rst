You can link a `serverless instance
<https://www.mongodb.com/cloud/atlas/serverless?tck=docs_realm>`__ to
your app as a MongoDB data source. However, serverless instances do not
currently support change streams, so the following features are limited:

- You cannot create a :ref:`database trigger <database-trigger>` on a serverless instance.

- You cannot use a serverless instance as your app's :ref:`synced <sync>` cluster.
