angular.module('starter', ['ngRoute', 'ui.router', 'controllers'])
    .config(['$urlRouterProvider', '$stateProvider', '$routeProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $routeProvider, $locationProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'html/home.html',
                controller: 'homeCtrl'
            })

        $urlRouterProvider.otherwise('/home');

    }]);