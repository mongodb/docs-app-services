.. important:: Stop the Edge Server When Not In Use

   After you start the Edge Server, it connects to the App Services App
   every few minutes to check for updates, even when no client application is
   connected. If you are running a demo or otherwise working on a PoC, remember
   to stop the Edge Server using ``make down`` when you're done using it. 
   Otherwise, you'll continue using the host's compute and Device Sync time.
