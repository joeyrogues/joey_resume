'use strict';

angular.module('joey_resume.education', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/education', {
            templateUrl: 'education/educations.html',
            controller: 'EducationCtrl'
        });
    }])

    .controller('EducationCtrl', ['$scope', 'Education', function ($scope, Education) {
        $scope.educations = [
            new Education({
                school:    'ENSIIE',
                city:      'Evry',
                startDate: '2011-09-05',
                endDate:   '2015-02-25',
                diploma:   'Engineer degree',
                summary:   'abc'
            }),
            new Education({
                school:    'Institute of Technology',
                city:      'Fontainebleau',
                startDate: '2009-14-14',
                endDate:   '2011-06-24',
                diploma:   'Diploma of Technology in Computing',
                summary:   'def'
            }),
            new Education({
                school:    'Boulloche Highschool',
                city:      'Livry Gargan',
                startDate: '2008-06-20',
                endDate:   '2004-09-13',
                diploma:   'Baccalauréat',
                summary:   'ghi'
            })
        ];
    }])

    .factory('Education', [function() {
        var Education = function(params) {
            this.school = params.school;
            this.city = params.city;

            this.startDate = params.startDate;
            this.endDate = params.endDate;

            this.diploma = params.diploma;
            this.summary = params.summary;
        };

        return Education;
    }])

    .directive('education', [function() {
        return {
            restrict: 'A',
            templateUrl: 'education/education.html',
            scope: {
                education: '=education'
            }
        }
    }]);