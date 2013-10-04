var app = angular.module('superApp', []);

app.directive("superhero",function () {
    return {
        restrict : "E",

        controller : function ($scope) {
            $scope.abilites = [];

            this.addStength = function () {
                $scope.abilites.push("strength");
            }
        }
    }
})