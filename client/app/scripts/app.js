'use strict';

/**
 * @ngdoc overview
 * @name blogappApp
 * @description
 * # blogappApp
 *
 * Main module of the application.
 */
angular
	.module("blogappApp", [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
			})
			.when(̨)
			.otherwise({ redirectTo: '/' });
	});
