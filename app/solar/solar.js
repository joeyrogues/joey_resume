'use strict';

angular.module('joey_resume.solar', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/solar', {
            templateUrl: 'solar/solar.html',
            controller: 'SolarCtrl'
        });
    }])

    .controller('SolarCtrl', [function() {

    }]);