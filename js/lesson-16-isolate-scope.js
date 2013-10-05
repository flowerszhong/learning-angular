var app = angular.module('choreApp', []);

app.controller('ChoreCtrl', ['$scope', function ($scope) {
	$scope.logChore = function (chore) {
		alert(chore + " is done !!");
	}
}]);

app.directive('kid', [function(){
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		scope: {
			done : '&'
		},
		template: '<input type="text" ng-model="chore">'+
			'{{ chore }}  <br>'+
			'<div class="btn" ng-click="done({ chore:chore })">I \'m done !</div>'
	};
}]);