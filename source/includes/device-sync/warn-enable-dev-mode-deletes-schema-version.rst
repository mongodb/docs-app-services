.. warning:: Enabling Development Mode Deletes Existing Schema Versions

   You *cannot* use schema versioning while Development Mode is enabled.
   Enabling Development Mode deletes any existing schema versions, regardless of
   whether they are currently in use by an existing client. This will disrupt
   Sync for any client using a deleted version. Refer to
   :ref:`schema-versioning` for more information.
