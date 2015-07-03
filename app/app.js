'use strict';

angular.module('joey_resume', [
    'ngRoute',
    'ngAnimate',
    'joey_resume.welcome',
    'joey_resume.education'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/welcome'});
    }]);
