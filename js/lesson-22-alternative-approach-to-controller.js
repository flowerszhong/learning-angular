var app = angular.module('myApp', []);

app.controller('AppCtrl', ['$scope', function ($scope) {
	this.sayHi = function () {
		alert("Hi");
	}
	return $scope.AppCtrl = this;
}]);
