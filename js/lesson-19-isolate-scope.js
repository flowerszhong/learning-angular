var app = angular.module('homeApp', []);

app.controller('CallHomeCtrl', ['$scope', function ($scope) {
	$scope.ctrlCall = function (message) {
		alert(message + " has delivered !!");
	}
}]);

app.directive('phone', [function(){
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		scope: {
			call : '&'
		},
		template: '<input type="text" ng-model="value">'+
			'{{ value }}  <br>'+
			'<div class="btn" ng-click="call({ message:value })"> has delivered !</div>'
	};
}]);