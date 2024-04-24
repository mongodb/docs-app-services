.. note:: Collections in Mixed fields supported in Apps created after April 24, 2024
    
    App Services Apps created *after* April 24, 2024 can store collections
    (arrays and dictionaries) in mixed data properties. You can 
    nest collections within other collections, which lets you store complex data
    structures such as JSON or MongoDB documents without having to define a 
    strict data model.

    To use this feature with Atlas Device SDKs, your app must also use the following minimum SDK
    versions: 
   
    - Flutter SDK v2.0.0 or later 
    - .NET SDK v12.0.0 or later
   
    Support for other SDKs will be added in future releases.

    You can contact support to learn more about enabling this feature in an existing
    app.  

.. TODO: Update this note with SDK versions once they release
.. To use this feature with an Atlas Device SDK, you must use the following
    SDK versions:
.. - C++ SDK v1.0.0 or later
.. - Flutter SDK v2.0.0 or later
.. - Kotlin SDK v1.0.0 or later
.. - .NET SDK v1.0.0 or later
.. - Node.js SDK v1.0.0 or later
.. - React Native SDK v1.0.0 or later
.. - Swift SDK v1.0.0 or later
.. - This feature is *not* supported in the Java SDK
