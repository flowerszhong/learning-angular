var app = angular.module('super-hero', []);


// E is for emements <br>
// C is for classes <br>
// A is for attributes <br>
// M is for comments

app.directive("superman",function () {
	return{
		restrict : "E",
		template : "<div>I am a superman!!!</div>"
	}
})