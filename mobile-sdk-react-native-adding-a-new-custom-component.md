---
layout: module
---
# 6. Adding A New Custom Component
In this unit, you'll learn how to create a new React Component and add it to our app. Specifically, you'll create a simple component called `total-count.js` that shows how many items are being shown in the list.
<img src="images/total-count.png" style="height:500px" />

## Step 1: Create A New JS file
You'll create a new folder called `src` inside `ReactNativeSample/js` and then create new JS file for each custom component you want to use.

1. In the Terminal, CD into `ReactNativeSample/js`.
2. Run `mkdir src` to create a source folder. 
3. Run `touch total-count.js` to create our component. 
4. Open `ReactNativeSample/js` folder in your favorite JavaScript editor.
2. Open `index.ios.js`.


## Step 2: Create TotalCount Component

1. Open `ReactNativeSample/js/total-count.js` in an editor and add the following code


	```
		var React = require('react-native');
		var Text = require('Text');
		var View = require('View');
		var StyleSheet = React.StyleSheet;
		
		var TotalCount = React.createClass( {
			render: function(){
				return <View style={styles.total}>
					<Text style={styles.text}>
						Total: {this.props.count}
					</Text>
				</View>
		
			}
		});
		
		var styles = StyleSheet.create({
			total: {
				flex: 1,
				alignItems: 'center',
				flexDirection: 'column'
			},
			text:  {
				fontSize: 20,
				padding:20,
				color: '#2b40fe'
		
			}
		});
		
		module.exports = TotalCount;
	```
2. Save the file.
 > This component simply receives a number and returns a React Native component with text "Total: {number}".
 
##Step 3: Use TotalCount Component
 1. Open `index.ios.js`
 
  > Note: You can get the **final code** for index.ios.js from here: <a href="https://github.com/rajaraodv/salesforce-react-native-tutorial/blob/master/js/index.ios.js" target="_blank">index.ios.js</a>
  
 2. Import the `total-count.js` component near the top of the file: 
 
 ```
 	var TotalCount = require('./src/total-count.js')
 ```
 3. Update `getInitialState` function to keep track of `count`
 
 ```
     getInitialState: function() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
          dataSource: ds.cloneWithRows([]),
          count: 0 // <----------------- Add This
      };
    },
 ```
 4. Update the `componentDidMount` method inside `UserList` component to count the number of items and set it to the component state.

	```
	    componentDidMount: function() {
	        var that = this;
	        var soql = 'SELECT Id, Name FROM Account LIMIT 10';
	        forceClient.query(soql,
	                          function(response) {
	                              var users = response.records;
	                              var data = [];
	                              var count = 0; // <----------------- Add This
	                              for (var i in users) {
	                                  data.push(users[i]["Name"]);
	                                  count++; // <----------------- Add This
	                              }
	
	                              that.setState({
	                                  dataSource: that.getDataSource(data),
	                                  count: count // <----------------- Add This
	                              });
	
	                          });
	    },
	 ```

 
 5. Update the `render` method inside `UserList` component to render `TotalComponent`.  
 
 ```
    render: function() {
        return (
          <View> // <----------------- Add This
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow} />
              <TotalCount count={this.state.count}/> // <----------------- Add This
          </View> // <----------------- Add This

      );
    },
```
  > Note: You can get the **final code** for index.ios.js from here: <a href="https://github.com/rajaraodv/salesforce-react-native-tutorial/blob/master/js/index.ios.js" target="_blank">index.ios.js</a>
  
6. Switch to Simulator 
7. Type `Command+R` to reload (Click on the simulator to make it active if it doesn't reload).
8. You should see the new component reflected.

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="mobile-sdk-react-native-updating-javascript.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="mobile-sdk-react-native-workflow-summary.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
