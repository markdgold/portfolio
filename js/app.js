var app = angular.module('Portfolio', ['ui.router', 'PortfolioCtrls']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'views/about.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'SlideCtrl'
        })
        .state('work', {
            url: '/work',
            templateUrl: 'views/work.html',
            controller: 'SlideCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'SlideCtrl'
        })
        .state('error', {
            url: '/error',
            templateUrl: 'views/error.html'
        });
}]);
