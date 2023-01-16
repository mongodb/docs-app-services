Copy all configuration files from your original App, except for
``realm_config.json``, to the new App's configuration directory. You
should use the new App's ``realm_config.json`` and overwrite any other
configuration files.

.. example::

   .. code-block:: bash

      # Copy all configuration files except for realm_config.json
      cp -r myapp myapp-temp
      rm myapp-temp/realm_config.json
      cp -r myapp-temp/* myapp-copy
      rm -rf myapp-temp
