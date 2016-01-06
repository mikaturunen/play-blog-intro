"use strict";

/**
 * @ngdoc function
 * @name blogappApp.controller:SignupCtrl
 * @description
 * # SingupCtrl
 * Controller of the blogappApp
 */
angular.module("blogappApp")
	.controller("SignupCtrl", function ($scope, $http, $log) {
		$scope.signup = function() {
			$http.post("app/signup", )
		};
  	});
