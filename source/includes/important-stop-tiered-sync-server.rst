.. important:: Stop the Edge Server When Not In Use

   After you start the Edge Server, it attempts to maintain a websocket 
   connection to Atlas to remain in sync, even if no client application is 
   connected. If you are running a demo or otherwise working on a PoC, 
   remember to stop the Edge Server using ``edgectl stop`` when you're done 
   using it. Otherwise, you'll continue using the host's compute and Device 
   Sync time.
