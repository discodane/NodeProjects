var app = angular.module('app', []);

app.controller('myCtrl',['$scope','$http', function($scope, $http) {
	var appApi = "http://localhost:3000/";

	$http.get(appApi).success(function (data) {
		console.log(data);
		$scope.response = data;
	}).error(function(error){
		$scope.response=error;
	});
}]);	