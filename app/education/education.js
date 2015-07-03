'use strict';

angular.module('joey_resume.education', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/education', {
            templateUrl: 'education/education.html',
            controller: 'EducationCtrl'
        });
    }])

    .controller('EducationCtrl', ['$scope', function ($scope) {

    }]);