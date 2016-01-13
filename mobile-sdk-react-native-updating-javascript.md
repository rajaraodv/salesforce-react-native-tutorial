---
layout: module
---
# 5. Updating JavaScript
In this unit, you'll learn how to change the sample app's JavaScript.

## Step 1: Open The JavaScript Project
The JavaScript part of the app is located in `ReactNativeSample/js` folder. The starting JS file that React Native uses to build the app is called: `index.ios.js`(ReactNativeSample/js/index.ios.js). 

1. Open `ReactNativeSample/js` folder in your favorite JavaScript editor.
2. Open `index.ios.js`.


## Step 2: Change SOQL Query And Refresh App

1. Near line 65, change the SOQL query to fetch a list of Opportunity objects instead of User objects.
	```
	var soql = 'SELECT Id, Name FROM Opportunity LIMIT 10';
	```
2. Switch to the Simulator (not Xcode)
3. Click anywhere on the Simulator to ensure it is active.
4. Type `Command+R` to reload.
5. You should see a list of Opportunities like below:

	<img src="images/opportunity-list.png" style="height:500px" />

> Seeing changes reflected instantly in a **Native** app similar to a webapp is one of the biggest benefits of React Native. 

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="mobile-sdk-react-native-adding-connected-app.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="mobile-sdk-react-native-adding-a-new-custom-component.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
