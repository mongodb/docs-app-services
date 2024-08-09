.. procedure::

   .. step:: Install the Edge Server Code

      .. include:: /includes/edge/install-edgectl.rst

   .. step:: Initialize the Edge Server Instance

      Use ``edgectl`` to set up the Edge Server instance.

      .. code-block:: shell

         edgectl init --app-id="<INSERT-YOUR-APP-ID-HERE>" --platform=compose

      The minimum required parameters are the ``app-id`` and the ``platform``.

      - ``--app-id``: Provide your Edge Server App ID. For example, 
        ``--app-id="edge-server-vtoyh"``. For more information, refer to 
        :ref:`find-app-id`. 
      - ``--platform``: You can use Docker Compose to install and manage your
        Edge Server instance in a development environment, or Kubernetes to 
        manage the instance in a production environment. Valid values are 
        either ``compose`` or ``kubernetes``.

      You can provide the following optional flags to specify additional
      configuration details:

      .. include:: /includes/edge/edgectl-init-flags.rst

   .. step:: Supply the Edge Server Token

      .. include:: /includes/edge/init-registration-token.rst

   .. step:: (Optional) Create a New User

      If you'd like to connect to the Edge Server instance using a MongoDB
      Driver or tool, you must have a username/password credential, or bypass
      authentication. If you already have a username/password credential, or 
      don't plan to connect to the Edge Server instance using a MongoDB Driver
      or tool, you can skip this step.

      For more information, refer to :ref:`edge-server-wireprotocol-connect`.

      If you don't already have a username/password credential, you can create
      one by following the prompts during ``edgectl init``.

      Otherwise, you can manually :ref:`create-email-password-user` later
      using the App Services UI, the App Services CLI, or the App Services
      Admin API.

      Alternately, if you plan to implement an authorization flow later, you
      can bypass authorization with the following command and flag:

      .. code-block:: console

         edgectl config --insecure-disable-auth=true
