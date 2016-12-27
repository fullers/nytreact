//config/routes
// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

//reference the components - you don't need the file extension because jsx automatically renders it
var Main = require('../components/Main.js');
var Saved = require('../components/Saved.js');
var Search = require('../components/Search.js');

//export the routes
module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			{/*if the user selects search or save, show the appropriate component */}
				<Route path="/search" component={Search} />
				<Route path="/saved" component={Saved} />
			{/*if the user selects any other path .. it takes them home */}
				<IndexRoute component={Search} />
		</Route>
	</Router>
);