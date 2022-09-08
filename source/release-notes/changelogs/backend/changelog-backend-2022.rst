.. _backend_20220907:

07 September 2022 Release
~~~~~~~~~~~~~~~~~~~~~~~~~

- Added support for :method:`database.getCollectionNames()` in Atlas
  Functions.

.. _backend_20220629:

29 June 2022 Release
~~~~~~~~~~~~~~~~~~~~

- Introduced a refreshed UI for Rules.

.. _backend_20220615:

15 June 2022 Release
~~~~~~~~~~~~~~~~~~~~

- Introduced ability to configure :ref:`field-level permissions with the Data API <field-level-permissions>`.

.. _backend_20220607:

7 June 2022 Release
~~~~~~~~~~~~~~~~~~~

- Released Flexible Sync as GA.
- Released :ref:`Asymmetric Sync <optimize-asymmetric-sync>`, which optimizes Flexible Sync for write-heavy workloads.
- Released :ref:`Data API <data-api>` as GA.
- Introduced Data API for all Apps.
- Introduced field-level permissions for Flexible Sync.
- Introduced :ref:`local regions for Azure data sources <realm-regions>`.

.. _backend_20220519:

19 May 2022 Release
~~~~~~~~~~~~~~~~~~~

- Introduced option to encode HTTPS Endpoint responses as :ref:`EJSON or JSON <endpoint-return-types>`.
- Added support for serverless Atlas instances as data sources. Serverless instances do not yet
  support Triggers or Sync.

.. _backend_20220420:

20 April 2022 Release
~~~~~~~~~~~~~~~~~~~~~

- Introduced ability to accept null values as optional types in Realm Schema.
- Added ability to download logs from the UI.
- Added Flexible Sync support for queries using ``BETWEEN`` and the string operators ``BEGINSWITH``, ``ENDSWITH``, ``CONTAINS``.
- Added Flexible Sync support for queries on arrays of primitives.

.. _backend_20220325:

25 March 2022 Release
~~~~~~~~~~~~~~~~~~~~~
- Performance improvements for Functions, particularly aimed at decreasing the 
  runtime for those dependencies that make external requests. 

- MongoDB Atlas moved to Let's Encrypt as the new Certificate 
  Authority for TLS certificates for all App Services.

.. _backend_20220126:

26 January 2022 Release
~~~~~~~~~~~~~~~~~~~~~~~

- Visually refreshed the :ref:`Schema UI <enforce-a-schema>`.
- Introduced :ref:`Log Forwarding <forward-logs>`, which automatically stores your
  application's server-side logs in a MongoDB collection or sends them to
  an external service.

.. _backend_20220119:

19 January 2022 Release
~~~~~~~~~~~~~~~~~~~~~~~

- Introduced :ref:`Flexible Sync (preview) <flexible-sync>`, which allows clients to sync data without the need for partition keys.
