You can link a `Data Lake
<https://www.mongodb.com/atlas/data-lake?tck=docs_realm>`__ to your app
as a MongoDB data source. However, there are some caveats to keep in
mind when working with a Data Lake:

- Data Lakes :adl:`do not support write operations </supported-unsupported/mql-support>`.

- You can only access a Data Lake from a :ref:`system function <system-functions>`.

- You cannot connect to a Data Lake via the wire protocol.

- You cannot define :ref:`roles and permissions <define-roles-and-permissions>` for a Data Lake.

- You cannot set a :ref:`read preference <read-preference>` for a linked Data Lake.

- You cannot create a :ref:`database trigger <database-trigger>` on a Data Lake.

- You cannot use a Data Lake as your app's :ref:`synced <sync>` cluster.
