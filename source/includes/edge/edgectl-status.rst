When the Edge Server instance is running, you can see the status of the 
instance with:

.. code-block:: shell

   edgectl status

This gives you information about the state of the Edge Server containers, and
a detailed status for the Sync server with a breakdown of important 
information. It may look similar to:

.. code-block:: json
   :copyable: false

   {
      "mongoContainerStatus": {
         "message": "running"
      },
      "mongoDBStatus": {
         "message": "ready"
      },
      "syncServerContainerStatus": {
         "message": "running"
      },
      "syncServerStatus": {
         "message": "ACTIVE"
      },
      "syncServerDetailedStatus": {
         "version": "v0.22.3",
         "status": "ACTIVE",
         "cloud_connected": true,
         "num_local_clients": 0,
         "query": {
            "Item": "truepredicate"
         }
      }
   }

The ``syncServerDetailedStatus`` contains information about the state of the
Edge Server instance. This includes details about its connection to
Atlas, and the clients connected to it, as follows:

.. list-table::
   :header-rows: 1
   :widths: 20 10 70

   * - Field name
     - Type
     - Value

   * - ``version``
     - String
     - The current version of the Edge Server code that the instance is 
       running. If the Edge Server instance falls more than one major version
       behind the latest available version, it is unable to connect to Atlas
       and must be wiped and updated. For more information, refer to 
       :ref:`upgrade-edge-server-version`.

   * - ``status``
     - String
     - The current status of the Edge Server instance. Possible values include:
       ``"ACTIVE"``, ``"FAILED"``, and ``"BOOTSTRAPPING"``. 
       
       ``"ACTIVE"``: the instance is running, listening for connections, and 
       attempting to sync.

       ``"FAILED"``: the instance has encountered an error condition that 
       requires intervention. For more information, refer to
       :ref:`troubleshoot-edge-server-instance`.

       ``"BOOTSTRAPPING"``: the instance is performing an initial download of
       the relevant documents in the data set, and is not yet ready to use.

   * - ``cloud_connected``
     - Boolean
     - If ``true``, the Edge Server instance is currently connected to Atlas.
       If ``false``, the Edge Server instance is not connected to Atlas. When
       the instance is not connected to Atlas, it can still receive local
       connections and sync data with local clients. When it reconnects with
       Atlas, it attempts to sync data that changed while it was not connected.

   * - ``num_local_clients``
     - Int
     - The number of clients that are currently connected to the Edge Server
       instance through Atlas Device SDK. This *does not* include connections
       through the Wire Protocol.

   * - ``query``
     - Object
     - The Edge Server instance Sync query, presented as a JSON object. For
       more information, refer to :ref:`specify-edge-server-query`.
