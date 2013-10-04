var app = angular.module('twitterApp', []);

app.controller("TwitterCtrl",function ($scope) {
    $scope.loadMoreTweets = function () {
        console.log("load more tweets!!!");
    };
    $scope.deleteTweets = function () {
        console.log("deleting tweets!!!");
    };
})

app.directive("enter",function  () {
    return function (scope, el, attrs) {
        el.bind("mouseenter",function () {
            // scope.loadMoreTweets();
            scope.$apply(attrs.enter);
        })
    }
})