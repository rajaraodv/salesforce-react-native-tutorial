---
layout: module
---
# 7. Workflow Summary
There is a lot going on and we haven't even touched creating Native-iOS component yet. Let's a take a step back and review everything.

## Developer Environment
By this point, you'll have the following apps open:
1. Xcode
2. iOS Simulator
3. JavaScript project in an Editor
4. Terminal running React Native CLI (aka "Packager")

## 1. Workflow: Adding A New React JS Component

1. Create the component
2. Import it to index.io.js
3. Switch to the Simulator and press `Command+R` to reload

> If you are creating it in `src` folder for the first time, you'll have to stop the React Native CLI and restart it.

## 2. Workflow: Adding A New Connected App

1. Create a new Connected App in Salesforce
2. Update Consumer Key and Callback URL in XCode's AppDelegate.m
3. Restart everything (including resetting Simulator)

##3. Workflow: Adding A New node.js Module
Although you didn't node.js module to the app, if you do, here is the workflow:

1. Install the node.js module with --save-dev flag from the project folder like so: 
	```
	npm install sompackage --save-dev
	```
2. Stop React Native CLI by doing `Control+C` in the Terminal.
3. Start React Native CLI by running `npm start` in the Terminal.


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="mobile-sdk-react-native-adding-a-new-custom-component.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="next.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
