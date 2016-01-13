---
layout: module
---
# 3. Adding Connected App
To enable your mobile app to connect to the Salesforce service, you’ll need a connected app. A connected app authorizes your mobile app to communicate securely with Force.com and access Force.com APIs on behalf of users via the industry-standard OAuth 2.0 protocol.

You may remember that when we generated the app using forceios we used the Connected App that came with sample template. In this unit, you'll create a new Salesforce Connected App and change the "App ID" and "Callback URL" to use the new Connected App. 

## Step 1: Open The JavaScript Project

1. In your Developer Edition organization, from Setup, enter Apps in the Quick Find box, then select **Apps**.
2. Under **Create**, Click on **Apps** and scroll down to **Connected Apps**, then click **New** to bring up the **New Connected App** page.
3. Under Basic Information, complete the form as follows.
	- **Connected App Name**: ReactNativeSample
	- **API Name**: accept the suggested value
	- **Contact Email**: enter your email address
4. Under OAuth Settings, check **Enable OAuth Settings**.
5. Set Callback URL to **reactnativesample://auth/success**.
6. Under **Available OAuth Scopes**, select *Access and manage your data (api), Provide access to your data via the Web (web), and Perform requests on your behalf at any time (refresh_token, offline_access)*, then click **Add**.
7. Click **Save**.
	<img src="images/connected-app-entry.png" style="height:500px" />
8. Click **Continue** and wait for 5-10 minutes.

	<img src="images/connected-app-info.png" style="height:300px" />
 
 
> Allow from 2-10 minutes for your changes to take effect on the server before using the connected app.
 


## Step 2: Add App ID and Callback URL
App ID (Connected App's "Consumer Key") and the Callback URL is stored in the native app's `AppDelegate.m` file. We just need to change those values and restart everything.

1. Switch to Xcode
2. Stop the Xcode app if it's running (top-left corner).
3. Open `AppDelegate.m`
4. Change `RemoteAccessConsumerKey`'s value to match the **Consumer Key** copied from the connected app we created earlier.
5. Change `OAuthRedirectURI`'s value to match the **Callback URL** from the connected app we created earlier. 
6. Save.
	<img src="images/xcode-connected-app.png" style="height:400px" />
7. Switch to the iOS Simulator.

## Step 3: Restart Everything
8. From the Simulator's menu, click on ** Simulator** then click on **Reset Content and Settings**.
9. Switch to the terminal where we have "React Native CLI" and stop it by pressing **Control + C**, then restart it by running **npm start**
10. Switch to Xcode and run the app by pressing the Arrow button
11. You should now see Simulator opening up the app and show the Salesforce login screen.
12. Login with your developer org credentials.
13. Notice that next OAuth screen shows **ReactNativeSample**. This means our app now uses the new Connected App configuration.
	<img src="images/new-connected-app.png" style="height:500px" />
14.  Press "Approve" in the next OAuth screen. 

> Note that you need to reset the simulator because Sample app caches old Connected App's information. 

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="mobile-sdk-react-native-running-forceios-app.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="mobile-sdk-react-native-adding-connected-app.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
