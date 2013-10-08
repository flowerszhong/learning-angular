var app = angular.module('app', []);

app.controller("TestCtrl",function ($scope) {
    console.log($scope);
});

app.directive("testTag",function () {
    return {
        link : function (scope) {
            console.log(scope);
        }
    }
})