// Create module and name it

var hostApp = angular.module('hostApp' , ['ngRoute']);

hostApp.config(function($routeProvider) { 
	$routeProvider
	.when('/', { templateUrl : 'home/home.html', controller: 'mainController'
	})
	
	.when('/about', { templateUrl : 'about/about.html', controller: 'aboutController'
	});

});

