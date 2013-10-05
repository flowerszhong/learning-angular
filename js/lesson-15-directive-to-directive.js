var app = angular.module('superApp', []);

app.directive("superhero",function () {
    return {
        restrict : "E",

        scope : {},

        controller : function ($scope) {
            $scope.abilites = [];

            this.addStrength = function () {
                $scope.abilites.push("strength");
            }

            this.addSpeed = function () {
                $scope.abilites.push("speed");
            }

            this.addFlight = function () {
                $scope.abilites.push("flash");
            }
        },

        link : function (scope, el) {
        	el.bind("mouseenter",function () {
        		console.log(scope.abilites);
        	})
        }
    }
});


app.directive('strength', function(){
	// Runs during compile
	return {
		require: 'superhero', // Array = multiple requires, ? = optional, ^ = check parent elements
		link: function($scope, iElm, iAttrs, superheroCtrl) {
			superheroCtrl.addStrength();
		}
	};
});

app.directive('flash', function(){
	// Runs during compile
	return {
		require: 'superhero', // Array = multiple requires, ? = optional, ^ = check parent elements
		link: function($scope, iElm, iAttrs, superheroCtrl) {
			superheroCtrl.addFlight();
		}
	};
});

app.directive('speed', function(){
	// Runs during compile
	return {
		require: 'superhero', // Array = multiple requires, ? = optional, ^ = check parent elements
		link: function($scope, iElm, iAttrs, superheroCtrl) {
			superheroCtrl.addSpeed();
		}
	};
});