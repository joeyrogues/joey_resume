'use strict';

angular.module('joey_resume', [
    'ngRoute',
    'ngAnimate',

    'joey_resume.welcome',
    'joey_resume.perso',
    'joey_resume.education',
    'joey_resume.experience',

    'joey_resume.production',
    'joey_resume.solar'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/welcome'});
    }])

    .filter('breakOnDots', [function() {
        return function(input) {
            return input.replace(/\. /g, '.<br/>');
        };
    }])

    .filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        }
    }]);