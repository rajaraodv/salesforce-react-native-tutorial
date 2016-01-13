---
layout: module
---
# 2. Create forceios App
In this unit, you'll use `forceios` tool and generate a template native iOS App.

## Step 1: Generate A React Native Sample App
In this step you'll use forceios tool to generate a sample React Native app that uses mobile SDK. In order to connect to Salesforce, we need to have a <a href="https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_defining_remote_access_applications.htm" target="_blank">Salesforce Connected App</a> with a new App ID and Callback URL. To simplify, forceios tool generates a template app that already uses a test app's "App ID" and "Callback URL" 

1. Open Terminal
2. Type `forceios create` and hit enter to start generating the sample app.
3. Type `react_native` for *Enter your application type (native, native_swift, react_native, hybrid_remote, or hybrid_local):* and hit Enter. This generates a sample app for type **React Native iOS**.
4. Type `ReactNativeSample` for *Enter your application name:* and hit Enter.
5. Hit Enter (leave the answer empty) for *Enter the output directory for your app (defaults to the current directory):*
6.  Type `com.example.reactnativesample` for *Enter the package name for your app (com.mycompany.my_app):*
7. Type `Example Inc` for *Enter your organization name (Acme, Inc.):*
8. Hit Enter(leave the answer blank) for *Enter your Connected App ID (defaults to the sample app's ID):*. The sample app will use the template app's own App ID. We can change this later
9. Hit Enter(leave the answer blank) for *Enter your Connected App Callback URI (defaults to the sample app's URI):*. This will use the template app's own Callback URI. We can change this later as well.
10. At this point, you should have a folder called `ReactNativeSample`

> Note that this make take few minutes to download and install everything

<img src="images/forceios-create.png" style="height:150px" />

## Step 2: Install SDK dependencies

In this step you'll use `Cocoapods` tool to install Salesforce Mobile SDK's dependencies.

1. In the terminal, CD into `ReactNativeSample` by running: `cd ReactNativeSample`
2. Install dependencies by running: `pod install`  
3. If you do `ls -al` in the terminal, you should see `ReactNativeSample.xcworkspace` among other files. 
4. Open the app by running: `open ReactNativeSample.xcworkspace`. This opens the app in Xcode.

	> Note: You should open `ReactNativeSample.xcworkspace` and NOT the `ReactNativeSample.xcproject` because the xcworkspace will now have the pod files. 
	
<img src="images/xcworkspace.png" style="height:250px" />

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="mobile-sdk-react-native-setup-developer-environment.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="mobile-sdk-react-native-running-forceios-app.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
