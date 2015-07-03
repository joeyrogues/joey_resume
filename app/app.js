'use strict';

angular.module('joey_resume', [
    'ngRoute',
    'ngAnimate',

    'joey_resume.welcome',
    'joey_resume.education',
    'joey_resume.experience'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/welcome'});
    }]);
