'use strict';

angular.module('joey_cv.perso', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/perso', {
            templateUrl: 'perso/perso.html',
            controller: 'PersoCtrl'
        });
    }])

    .controller('PersoCtrl', ['$scope', function ($scope) {

    }]);