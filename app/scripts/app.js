'use strict';

/**
 * @ngdoc overview
 * @name angularStarterApp
 * @description
 * # angularStarterApp
 *
 * Main module of the application.
 */
angular
  .module('angularStarterApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
