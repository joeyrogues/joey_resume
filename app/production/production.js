'use strict';

angular.module('joey_resume.production', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/productions', {
            templateUrl: 'production/productions.html',
            controller: 'ProductionCtrl'
        })
    }])

    .controller('ProductionCtrl', [function() {

    }]);