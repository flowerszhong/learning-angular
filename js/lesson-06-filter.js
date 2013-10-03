var app = angular.module('myApp', []).factory('Data', [function () {
	return {
		name : "I am from the earth!!!"
	};
}]);


app.filter("reverse",function () {
	return function (name) {
		return name.split('').reverse().join('');
	}
})

function MyFirstCtrl ($scope, Data) {
	$scope.data = Data;
}

function MySecondCtrl ($scope, Data) {
	$scope.data = Data;
	$scope.reverseName = function (name) {
		return name.split('').reverse().join('');
	}
}