.. warning:: Restore Sync after Terminating Sync

 When you terminate and re-enable Atlas Device Sync, clients can no longer Sync. 
 Your client must implement a client reset handler to restore Sync. This 
 handler can discard or attempt to recover unsynchronized changes.

 .. tabs-realm-sdks::

   .. tab::
      :tabid: android

      Learn how to perform a :ref:`Client Reset using the Realm Java SDK <java-client-resets>`.

   .. tab::
      :tabid: ios

      Learn how to perform a :ref:`Client Reset using the Realm Swift SDK <ios-client-resets>`.

   .. tab::
      :tabid: node
      
      Learn how to perform a :ref:`Client Reset using the Realm Node SDK <node-client-resets>`.

   .. tab::
      :tabid: react-native
      
      Learn how to perform a :ref:`Client Reset using the Realm React Native SDK <react-native-client-resets>`.

   .. tab::
      :tabid: dotnet

      Learn how to perform a :ref:`Client Reset using the Realm .NET SDK <dotnet-client-resets>`.

   .. tab::
      :tabid: flutter

      Learn how to perform a :ref:`Client Reset using the Realm Flutter SDK <flutter-client-reset>`.
