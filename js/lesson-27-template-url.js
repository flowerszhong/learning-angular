var app = angular.module('app', []);

app.directive('zippy', ["$templateCache",function ($templateCache) {
    console.log($templateCache.get("zippy.html"));
    return {
        restrict: 'E',
        transclude : true,
        scope : {
            title : "@"
        },
        // templateUrl : "zippy.html",
        template : $templateCache.get("zippy.html"),
        link: function (scope, iElement, iAttrs) {
            scope.isContentVisible = false;

            scope.toggleContent = function () {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    };
}])