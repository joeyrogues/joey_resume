'use strict';

angular.module('joey_resume.perso', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/perso', {
            templateUrl: 'perso/perso.html',
            controller: 'PersoCtrl'
        });
    }])

    .controller('PersoCtrl', ['$scope', function ($scope) {

    }]);