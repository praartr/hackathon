1. Download an installer for your platform from nodejs.org

2. Confirm this by opening up a command prompt or terminal window and type “node -v” and “npm -v”.

3. "ahoy.js" contains code to send text messages using REST API.

4. Install the Twilio module using npm, in the same directory as “ahoy.js”using 
    
	 npm install twilio

5. Run 
	node ahoy.js
	
6. The SMS should be sent to the mobile number sepcified in the "to" section.