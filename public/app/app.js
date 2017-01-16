// Create module and name it

var hostApp = angular.module('hostApp' , ['ngRoute']);

hostApp.config(function($routeProvider) { 
	$routeProvider
	.when('/', { templateUrl : 'home/home.html', controller: 'mainController'
	})
	
	.when('/about', { templateUrl : 'about/about.html', controller: 'aboutController'
	});

});

// Create controller and inject angular's $scope
hostApp.controller('mainController', function($scope) {
$scope.message = 'Welcome to our home web server, Laura ;)';

});

hostApp.controller('aboutController', function($scope) {
	$scope.message = 'This is the about Page.';
});