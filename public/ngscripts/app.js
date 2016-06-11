'use strict';
/* Using uiRoute*/
var app = angular.module('risApp',['ui.router'])
.config (function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('app', {
      url:'/',
      views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'HomeController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
         }

      })
      .state('app.browseform', {
        url:'browseform',
        views: {
            'content@': {
                templateUrl : 'views/browseform.html',
                controller  : 'BrowseController'
              }
        }
      })
      .state('app.detailform', {
        url:'browseform/:id?name',
        views: {
            'content@': {
                templateUrl : 'views/detailform.html',
                controller  : 'DetailController'
              }
        }
      })
      .state('app.contact', {
            url:'contact',
            views: {
                'content@': {
                    templateUrl : 'views/contact.html',
                    controller  : 'ContactController'
                 }
            }
        });

      $urlRouterProvider.otherwise('/');

})
;
/*
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
*/
