.. _cli-overview:

Overview
--------

The Atlas App Services Command Line Interface (``{+cli-bin+}``) allows you
to programmatically manage your Apps.

With the {+cli+}, you can create or update Apps from a local directory
as well as export existing applications to a local directory.

.. _install-appservices-cli:

Installation
------------

.. include:: /includes/install-appservices-cli.rst

.. _cli-auth-with-api-token:

Authentication
--------------

To use the {+cli+}, you must authenticate. To authenticate, you must
generate an API Key.

Generate an API Key
~~~~~~~~~~~~~~~~~~~

.. procedure::

   .. step:: Navigate to MongoDB Cloud Access Manager

      The :mms-docs:`MongoDB Cloud Access Manager </tutorial/manage-users>`
      allows you to manage access to your project for users, teams, and API
      Keys. Use the Project Access Manager by clicking the
      :guilabel:`Project Access` tab on the :guilabel:`access manager
      dropdown` on your screen's top left-hand side.

      .. figure:: /images/click-access-manager.png
         :alt: Click Access Manager
         :lightbox:


   .. step:: Create an API Key

      Project Users can log in with a Project API Key. Create a project
      API Key by clicking the grey :guilabel:`Create API Key` button on
      the right-hand side of the Project Access Manager.

      .. figure:: /images/access-manager-create-api-key-button.png
         :alt: Click Access Manager
         :lightbox:

      Clicking this button navigates you to the "Create API Key" screen. Set a
      description for your key.

      For write access, the CLI requires an API key with "Project Owner"
      permissions. For read-only access, you can use "Project Read Only". Use the
      :guilabel:`Project Permissions` dropdown to select the appropriate permissions
      for your use case.

      Copy the public key to use later in order to log in. Click :guilabel:`next` to
      continue configuring your key details.

      .. figure:: /images/configure-api-key.png
         :alt: Click Access Manager
         :lightbox:


   .. step:: Configure Your API Access List

      Copy your Private Key to a safe location for later use. For security,
      the Private Key will not be visible again after initialization.
      Another security feature is the API Access List. Creating an API
      Access List entry ensures that API calls originate from permitted IPs.

      The IP Address of the user who will be using the API Key is required
      to use the key. Click the :guilabel:`Add Access List Entry` button.
      Type in the IP Address or click the :guilabel:`Use Current IP Address`
      buttton and click save.  Finally, click the done button on your screen's
      lower right-hand to finish setting up your API key.

      .. figure:: /images/add-access-list-entry.png
         :alt: Click Access Manager
         :lightbox:

Authenticate with an API Key
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. procedure::

   .. step:: Authenticate a CLI User

      Using your newly created public and private key, log in by running the
      command below.

      .. code-block:: shell

         {+cli-bin+} login --api-key="<my api key>" --private-api-key="<my private api key>"

      You should see the following result:

      .. code-block:: shell

         you have successfully logged in as <your public key>
