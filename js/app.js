define([],
    function() {
		var reApp = angular.module('reApp', [
		  'ngRoute',
		  'restApp'
		]);

		reApp.config(['$routeProvider',
		  function($routeProvider) {
			$routeProvider.
			  when('/menu', {
				templateUrl: 'plp.html',
				controller: 'MenuItemListCtrl'
			  }).
			  when('/menu/:menuId', {
				templateUrl: 'plp.html',
				controller: 'MenuItemCtrl'
			  }).
			   when('/menuItem/:menuItemId', {
				templateUrl: 'pdp.html',
				controller: 'MenuItemInfoCtrl'
			  }).
			  otherwise({
				redirectTo: '/menu'
			  });
		  }]);
		
		return reApp;
    
	}
);


