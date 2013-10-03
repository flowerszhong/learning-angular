var app = angular.module('super-hero', []);


// E is for emements <br>
// C is for classes <br>
// A is for attributes <br>
// M is for comments

// app.directive("superman",function () {
// 	return{
// 		restrict : "E",
// 		template : "<div>I am a superman!!!</div>"
// 	}
// })

// app.directive("superman",function () {
// 	return{
// 		restrict : "C",
// 		link : function () {
// 			alert("I am a classes superman !!!")
// 		}
// 	}
// })

// app.directive("superman",function () {
// 	return{
// 		restrict : "A",
// 		link : function () {
// 			alert("I am a attributes superman !!!")
// 		}
// 	}
// })

app.directive("superman",function () {
	return{
		restrict : "M",
		link : function () {
			alert("I am a comments superman !!!")
		}
	}
})