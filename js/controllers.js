define([],
    function() {

var restApp = angular.module('restApp', []);

restApp.controller('MenuListCtrl', ['$scope', '$http', function($scope, $http) {
   $http.get('menu.json').success(function(data) {
    $scope.menus = data;
  });

  $scope.orderProp = 'id';
}]);

restApp.controller('MenuItemListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data.json').success(function(data) {
    $scope.menuItems = data;
  });
  $scope.orderProp = 'id';
}]);

restApp.controller('MenuItemCtrl', ['$scope', '$http', '$routeParams', function($scope, $http,  $routeParams) {

   var url = 'data.json';
   if($routeParams.menuId == 102) {
		url = 'data1.json';
   }
	$http.get(url).success(function(data) {
    $scope.menuItems = data;
  });
  $scope.orderProp = 'id';

}]);

restApp.controller('MenuItemInfoCtrl', ['$scope', '$http', '$routeParams', function($scope, $http,  $routeParams) {
	$scope.phoneId = $routeParams.menuItemId;
}]);

return restApp;
    }
);