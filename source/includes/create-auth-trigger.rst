- Log in to the Realm UI, and then click :guilabel:`Triggers` in the left 
  hand panel.

- Click the :guilabel:`Add a Trigger` button.

- Set the :guilabel:`Trigger Type` toggle to :guilabel:`Authentication`.

- Under Trigger Details, specify the following values:

  - :guilabel:`Name`: "onUserCreated"
  
  - :guilabel:`Enbaled`: Switch toggle to "On"
  
  - :guilabel:`Action Type`: Select "Create"

  - :guilabel:`Provider(s)`: Select "Email/Password", or whichever authentication 
    provider(s) you are using

  - :guilabel:`Select an Event Type`: Select "Function"

  - :guilabel:`Function`: Select "+New Function", and then:

    - :guilabel:`Function Name`: "onUserCreated"

    - :guilabel:`Function`: Replace the placeholder text with the following 
      function:


