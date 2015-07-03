'use strict';

angular.module('joey_resume.welcome', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl: 'welcome/welcome.html',
            controller: 'WelcomeCtrl'
        });
    }])

    .controller('WelcomeCtrl', ['$scope', function ($scope) {

    }]);