var app = angular.module('myApp', []);

app.controller('AppCtrl', ['$scope', function ($scope) {
	
}]);

app.directive('panel', [function(){
	return {
		restrict: 'E',
		transclude : true,
		template: '<div class="panel" ng-transclude>I \'m a panel</div>'
	};
}]);