var app = angular.module('homeApp', []);

app.controller('CallHomeCtrl', ['$scope', function ($scope) {
	$scope.leaveVoiceMail = function (number,message) {
		alert("Number : " + number + " said : " + message);
	}
}]);

app.directive('phone', [function(){
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		scope: {
			number : "@",
			network : "=",
			makeCall : '&'
		},
		template: '<div class="panel">'+
					'Number : {{number}} <br>'+
					'Network: <select ng-model="network" ng-options="net for net in networks"></select> <br>'+
					'Message : <input type="text" ng-model="value"> <br>' + 
					'<div class="btn" ng-click="makeCall({number : number,message : value })">Call</div>'+
				'</div>',
		link : function (scope) {
			scope.networks = ["Verizon","AT&T","Sprint"];
			scope.network = scope.networks[0];
			scope.value = "Edit a Message"
		}
	};
}]);