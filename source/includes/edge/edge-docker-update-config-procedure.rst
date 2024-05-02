.. procedure::

   .. step:: Update the Edge Server Configuration

      Use the ``edgectl config`` command with the appropriate flags to update
      the instance:

      .. code-block:: console

         edgectl config --YOUR-FLAG-HERE

      .. include:: includes/edge/edgectl-config-flags.rst

   .. step:: Restart the Edge Server Instance

      After you update the configuration, stop the instance:

      .. code-block:: console

         edgectl stop

      And start it again to apply the updates:

      .. code-block:: console

         edgectl start
