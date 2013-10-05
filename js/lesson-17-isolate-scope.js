var app = angular.module('drinkApp', []);

app.controller('DrinkCtrl', ['$scope', function ($scope) {
	$scope.ctrlFlavor = "BlackBerry";
}]);

app.directive('drink', [function () {
	return {
		scope : {
			flavor : "@"
		},
		template : '<div>{{flavor}}</div>'
	};
}])

