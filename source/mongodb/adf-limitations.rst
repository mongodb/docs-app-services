You can link a `federated database instance
<https://www.mongodb.com/atlas/data-federation?tck=docs_realm>`__ to your app
as a MongoDB data source. However, there are some caveats to keep in
mind when working with Atlas Data Federation:

- Federated data sources :atlas:`do not support write operations </data-federation/supported-unsupported/mql-support/>`.

- You can only access a federated data source from a :ref:`system function <system-functions>`.

- You cannot connect to a federated data source via the :ref:`wire protocol <wire-protocol>`.

- You cannot define :ref:`roles and permissions <define-roles-and-permissions>` for a federated data source.

- You cannot set a :ref:`read preference <read-preference>` for a federated data source.

- You cannot create a :ref:`database trigger <database-trigger>` on a federated data source.

- You cannot use a federated data source as your app's :ref:`synced <sync>` cluster.
