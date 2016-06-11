'use strict';

var app = angular.module('risApp',['ngRoute'])
.config(function($routeProvider) {
        $routeProvider
            .when('/browseform', {
                templateUrl : 'browseform.html',
                controller  : 'BrowseController'
            })
            .when('/detailform/:id', {
                templateUrl : 'detailform.html',
                controller  : 'DetailController'
            })
            .when('/contact', {
                templateUrl : 'contact.html',
                controller  : 'ContactController'
            })
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'HomeController'
            })
            .otherwise('/');
    })
