//sets up the routes for the rest of the app, utilizes react-router to do this

var React = require('react');
var ReactDOM = require('react-dom');

//properties associated with routes
var Router = require('react-router').Router;

var routes = require('./config/routes');

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));