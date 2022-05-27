.. procedure::

   .. step:: Log in to the Realm UI, and then click :guilabel:`Sync` in the left hand 
      panel.

   .. step:: Under :guilabel:`Sync Type`, choose :guilabel:`Flexible`.

   .. step:: Set the toggle to enable :guilabel:`Development Mode`.

   .. step:: Select the cluster you want to sync.

   .. step:: :guilabel:`Define a Database Name`: select :guilabel:`+Add a new
      database` and type a name for the database Realm will use to store your synced
      objects. You can name it anything you want. A common strategy would be to name
      the database after the app you're making.

   .. step:: :guilabel:`Select Queryable Fields`: type in ``owner_id``. This allows your 
      permissions expressions (which you'll set next) to use the any fields
      called ``owner_id``.
  