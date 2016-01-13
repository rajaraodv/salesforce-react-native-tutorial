---
layout: module
---
# 3. Running forceios App
In this unit, you'll run the forceios app you created earlier.


## Step 1: Run The CLI
Before we can run the app in Xcode, we need to first run React Native CLI. This tool internally watches for any changes made to the app and updates the native app. 

1. While still in the `ReactNativeSample` folder, run: `npm start`

	<img src="images/react-cli.png" style="height:350px" />
2. Keep the React Native CLI running and switch to Xcode.

## Step 2: Start The App in Xcode
1. Change the target to "ReactNativeSample" (near the top left corner) 
	
	<img src="images/xcode-react-native-start.png" style="height:500px" />

2. Click the "Build and Run" (the "Arrow" button near the top-left corner).
3. You should see the **Simulator** app open and ask for Salesforce Login

	<img src="images/simulator.png" style="height:500px" />
	
	> Sometimes **Simulator** app opens behind the Xcode, so you may need to manually switch to it and bring it forefront. 
4. Login using any Salesforce developer Org. credentials.
5. Click "Allow" in the next OAuth screen.

	<img src="images/xcode-oauth-screen.png" style="height:500px" />
6. You should now see the sample app that shows list of Salesforce users in that Org.

	<img src="images/sampleApp.png" style="height:500px" />
<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="mobile-sdk-react-native-create-forceios-app.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="mobile-sdk-react-native-adding-connected-app.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
