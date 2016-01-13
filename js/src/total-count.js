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