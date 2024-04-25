The details available when viewing an Edge Server instance using the 
local UI include:

- Status
- Version
- Number of Clients Connected
- Connectivity to Cloud
- Subscription

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Heading
     - Description

   * - Status
     - The current status of the Edge Server instance. Possible values include:
       ``"ACTIVE"``, ``"FAILED"``. 
       
       ``"ACTIVE"`` means that the instance is running, listening for
       connections, and attempting to sync.

       ``"FAILED"`` means that the instance has encountered an error
       condition that needs intervention. For more information, refer to
       :ref:`troubleshoot-edge-server-instance`.

   * - Version
     - The current version of the Edge Server code that the instance is 
       running. If the Edge Server instance falls more than one major version
       behind the latest available version, it is unable to connect to Atlas
       and must be wiped and updated. For more information, refer to 
       :ref:`upgrade-edge-server-version`.

   * - Number of Clients Connected
     - The number of clients that are currently connected to the Edge Server
       instance through Atlas Device SDK. This *does not* include connections
       through the Wire Protocol.


   * - Connectivity to Cloud
     - ``CONNECTED`` or ``DISCONNECTED``. When
       the instance is not connected to Atlas, it can still receive local
       connections and sync data with local clients. When it reconnects with
       Atlas, it attempts to sync data that changed while it was not connected.

   * - Subscription
     - The Edge Server instance Sync query. ``Table`` is the collection name
       used in the schema, which in most cases is the same as the collection
       name. ``Query`` is the RQL query that determines what data syncs to
       the Edge Server for that collection.
       
       For more information, refer to :ref:`specify-edge-server-query`.
