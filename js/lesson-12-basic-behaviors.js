var app = angular.module('behaviorApp', []);

app.directive("enter",function () {
    return function (scope,el) {
        el.bind("mouseenter",function () {
            console.log("enter now!!!")
        });
    }
})



app.directive("leave",function () {
    return function (scope,el) {
        el.bind("mouseleave",function () {
            console.log("leave now!!!")
        });
    }
})