var app = angular.module('Portfolio', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/error');

    //define routes
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'views/landing.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        })
        .state('work', {
            url: '/work',
            templateUrl: 'views/work.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html'
        })
        .state('error', {
            url: '/error',
            templateUrl: 'views/error.html'
        });

}]);
