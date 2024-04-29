.. list-table::
   :header-rows: 1
   :widths: 25 10 65

   * - Field name
     - Type
     - Value

   * - ``--edge-root-dir``
     - String
     - The location on disk to store configuration files. Defaults to
       ``~/.mongodb-edge/``. If you supplied an alternate location during
       initial set up, you must pass this flag with the alternate command with
       every ``edgectl`` command you issue.

   * - ``--query``
     - String
     - The query that defines what data to sync between the Edge
       Server instance and Atlas. If you do not provide a query, the
       instance syncs all data that it has permissions to access. For 
       information about populating a query, refer to 
       :ref:`specify-edge-server-query`.

   * - ``--global-query``
     - String
     - A query that applies to all collections in the linked data source.
       For more information, refer to :ref:`specify-edge-server-query`.

   * - ``--query-file``
     - String
     - Pass a path to a JSON file that contains queries for the 
       collections in the linked data source. For more information, refer
       to :ref:`specify-edge-server-query`.

   * - ``--http-port``
     - Int
     - The port on which the instance listens for HTTP connections. The
       default value is ``80``. 

   * - ``--wire-protocol-port``
     - Int
     - The port on which the instance listens for MongoDB Wire Protocol
       connections, such as connections from a MongoDB Driver. The
       default value is ``27021``.

   * - ``--insecure-disable-auth``
     - Boolean
     - If ``true``, users can connect anonymously to the instance through
       Wire Protocol or Atlas Device SDK clients. Defaults to ``false``.

   * - ``--skip-user-prompt``
     - Boolean
     - If ``true``, Edge Server does not prompt for user creation. If
       ``false``, Edge Server connects to Atlas to check if an 
       :ref:`email/password user <email-password-authentication>` exists
       in the service. If a corresponding email/password user does not 
       exist, it interactively prompts for a username and password to
       create a user. Defaults to ``false``.

   * - ``--disable-local-ui``
     - Boolean
     - If ``true``, the Edge Server instance does not run a UI on the 
       registered ``http-port``. Defaults to ``false``.

   * - ``--profile``
     - String
     - The name of the profile to use when executing a given ``edgectl``
       command. If you do not provide a name, the profile name defaults to
       the ``app-id``, with an incrementing number appended, starting with
       ``-01``. When you do not provide a profile flag, ``edgectl`` uses the
       default profile when executing a command. For more information, refer
       to :ref:`multiple-edge-servers-on-host`.

   * - ``--registration-token``
     - String
     - A one-time use registration token for the Edge Server instance. You
       can pass the flag with this token to prompt the Edge Server instance
       to update its API key.

   * - ``--update-registration-token``
     - String
     - Prompt ``edgectl`` to interactively request a new one-time use 
       registration token. When you supply the new token, the Edge Server
       instance updates its API key.
