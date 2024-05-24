While Edge Server is in Public Preview, it does not yet support the full range
of MongoDB and Atlas Device SDK features and functionality.

Collection Types
````````````````

Edge Server does not currently support time series collections.

When you create an Edge Server service, we automatically create schemas for
every collection in your linked database. Trying to use Edge Server with
a database that contains a time series collection throws an error.

To resolve this error, you must manually remove the schema for the time
series collection. For information about how to remove the schema, refer to
:ref:`remove-a-schema`.

Aggregation and CRUD Operations
```````````````````````````````

Edge Server currently supports only a subset of MongoDB aggregation and CRUD
operations. For a list of supported operations, refer to :ref:`edge-server-mongodb`.

Atlas Device SDK Features
`````````````````````````

Edge Server does not currently support :ref:`asymmetric-sync`.
