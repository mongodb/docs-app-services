.. _backend_20221102:

2 November 2022 Release
~~~~~~~~~~~~~~~~~~~~~~~

- :ref:`Function context.app.id <context-app>` returns a string (formerly BSON ObjectId).
- Support :ref:`App Services deployments <deployment-regions>` in the AWS region
  London (aws-eu-west-2).
- Added :ref:`Admin API <admin-api>` endpoint to retrieve App Services metrics.

.. _backend_20221020:

20 October 2022 Release
~~~~~~~~~~~~~~~~~~~~~~~

- Added option to :ref:`auto-resume Database Triggers <automatically-resume-a-suspended-trigger>`
  that were suspended because resume token was lost.

.. _backend_20221005:

10 October 2022 Release
~~~~~~~~~~~~~~~~~~~~~~~

- Increased :ref:`request timeout <function-constraints>` from 120 seconds to 150 seconds.

.. _backend_20220923:

23 September 2022 Release
~~~~~~~~~~~~~~~~~~~~~~~~~

- Added :method:`mongodb.admin()` and :method:`admin.getDBNames()` in
  Atlas Functions.

.. _backend_20220909:

9 September 2022 Release
~~~~~~~~~~~~~~~~~~~~~~~~~

- Support App Services deployments in the following :ref:`GCP regions<deployment-regions>`:

  - Ohio (``us-central1``)
  - Virginia (``us-east4``)
  - Oregon (``us-west1``)
  - Belgium (``europe-west1``)
  - Mumbai (``asia-south1``)

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
- Introduced :ref:`local regions for Azure data sources <deployment-regions>`.

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
