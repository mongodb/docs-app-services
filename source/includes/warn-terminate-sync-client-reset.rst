.. warning:: Restore Sync after Terminating Sync

   When you terminate and re-enable Atlas Device Sync, clients can no longer Sync. 
   Your client must implement a client reset handler to restore Sync. This 
   handler can discard or attempt to recover unsynchronized changes.

   - Learn how to perform a :ref:`Client Reset using the Flutter SDK <flutter-client-reset>`.
   - Learn how to perform a :ref:`Client Reset using the Java SDK <java-client-resets>`.
   - Learn how to perform a :ref:`Client Reset using the .NET SDK <dotnet-client-resets>`.
   - Learn how to perform a :ref:`Client Reset using the Node SDK <node-client-resets>`.
   - Learn how to perform a :ref:`Client Reset using the React Native SDK <react-native-client-resets>`.
   - Learn how to perform a :ref:`Client Reset using the Swift SDK <ios-client-resets>`.
