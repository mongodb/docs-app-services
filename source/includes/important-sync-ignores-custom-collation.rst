.. important:: Flexible Sync Ignores Custom Collation

   Flexible Sync ignores custom :ref:`collation` you may have configured on
   a MongoDB collection in Atlas. Instead, Synced collections always use
   ``{locale: "simple"}`` when evaluating Sync subscriptions or permissions.
