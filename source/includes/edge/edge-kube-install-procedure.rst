.. procedure::

   .. step:: Add the MongoDB Helm Charts repository to Helm

      Add the `MongoDB Helm Charts for Kubernetes <https://mongodb.github.io/helm-charts>`__ 
      repository to Helm.

      .. code-block:: console

         helm repo add mongodb https://mongodb.github.io/helm-charts

   .. step:: Install the Community Operator

      .. code-block:: console

         helm upgrade --install community-operator mongodb/community-operator --set mongodb.name=mongodb-enterprise-server --set mongodb.repo=quay.io/mongodb

   .. step:: Fetch the Edge Server Operator resource and `kubectl apply` it

      .. code-block:: console

         curl "https://raw.githubusercontent.com/mongodb/edge-kubernetes-operator/main/release.yaml" | kubectl apply -f -

   .. step:: Install `edgectl`

      .. include:: /includes/edge/install-edgectl.rst

   .. step:: Initialize the Edge Server Instance

      Use ``edgectl`` to set up the Edge Server instance. This generates a
      configuration file which you can apply to your cluster with ``kubectl``.

      .. code-block:: shell

         edgectl init --app-id="<INSERT-YOUR-APP-ID-HERE>" --platform=kubernetes

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

      After you supply the registration token, ``edgectl`` outputs the path
      where it has written the Kubernetes resource file. Note this
      information for the next step.

   .. step:: Apply the Configuration to Your Cluster

      Use ``kubectl`` to apply the configuration to your cluster. The prior
      step provided the configuration path as part of the ``edgectl`` output.

      .. code-block:: console

         kubectl apply -f /Users/YOUR-USERNAME/.mongodb-edge/profiles/YOUR-PROFILE-NAME/kube-resource.yml

      Use ``kuebctl get pods`` to get the status of the deployment. A completed
      deployment resembles:

      .. code-block:: console

         $ kubectl get pods
         NAME                                                              READY   STATUS    RESTARTS      AGE
         mongodb-atlas-edge-operator-controller-manager-565b79476d-4t248   2/2     Running   0             11m
         mongodb-kubernetes-operator-f6f956684-rbtz4                       1/1     Running   0             62m
         stores-NY-42-0                                                    2/2     Running   0             58m
         stores-NY-42-backing-db-0                                         2/2     Running   0             58m

      It may take a few moments to configure and get everything running. You 
      may see transient errors during initial setup, which should resolve
      as all the containers get to a ``Running`` state.
