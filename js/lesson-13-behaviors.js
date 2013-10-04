var app = angular.module('behaviorApp', []);

app.directive("enter", function() {
    return function(scope, el, attrs) {
        el.bind("mouseenter", function() {
            console.log("enter now!!!");
            // el.addClass("panel");
            el.addClass(attrs.enter)
        });
    }
})



app.directive("leave", function() {
    return function(scope, el, attrs) {
        el.bind("mouseleave", function() {
            console.log("leave now!!!");
            // el.removeClass("panel");
            el.removeClass(attrs.enter)
        });
    }
})