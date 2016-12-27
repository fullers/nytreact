//this is the main app component.. sets up the header and static content

//include react & react-router
var React = require('react');
var Search = require('./Search.js');

//create the main component - createClass is a function within React so you need React before createClass
var Main = React.createClass({
	//every component has to have a render function
	render: function() {
		return (
			<div className="main-container">
				<div className="jumbotron">
					<h1 className="text-center"> New York Times Article Scrubber </h1>
					<p className="lead text-center"> Search for and annotate articles of interest! </p> 
				</div>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = Main;
