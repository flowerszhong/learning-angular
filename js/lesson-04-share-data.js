var app = angular.module('myApp', []).factory('Data', [function () {
	return {
		name : "I am from the earth!!!"
	};
}]);


function MyFirstCtrl ($scope, Data) {
	$scope.data = Data;
}

function MySecondCtrl ($scope, Data) {
	$scope.data = Data;
}