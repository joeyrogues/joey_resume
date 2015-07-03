'use strict';

angular.module('joey_resume.experience', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/experience', {
            templateUrl: 'experience/experience.html',
            controller: 'ExperienceCtrl'
        });
    }])

    .controller('ExperienceCtrl', ['$scope', 'Experience', function ($scope, Experience) {
        $scope.experiences = [
            new Experience({
                city:      'San Francisco',
                company:   'Inovia',
                startDate: '2014-09-03',
                endDate:   '2015-02-25',
                role:      'Software engineer intern',
                summary:   '\
                    This internship dealt with software quality of web application. Topics: unit tests, integration tests, design patterns, Continuous Integration, technical debt, Angularjs, PostgreSql, Java'
            }),
            new Experience({
                city:      'Paris',
                company:   'Inovia',
                startDate: '2013-06-03',
                endDate:   '2013-09-13',
                role:      'Software engineer intern',
                summary:   '\
                    I participated in the design of project management solutions.\
                    I conducted discussions about the needs and the technologies to use.\
                    I developed a plug in implementing the previous discussions using Ruby on Rails and JavaScript within a Redmine platform.\
                    I centralized management and quality indicators sometimes retrieved from continuous integration solutions web APIs or computed in accordance to the Inovia management methods.\
                    I put in place passive devices and dashboards designed to display critical information and assist the engineers.'
            }),
            new Experience({
                city:      'Paris',
                company:   'Blackbird',
                startDate: '2012-07-03',
                endDate:   '2012-08-31',
                role:      'Software engineer intern',
                summary:   '\
                    My job was to design, program and test Ruby on Rails, jQuery and CSS features.\
                    The testing was made using RSpec and the Test Driven Development convention.'
            }),
            new Experience({
                city:      'Paris',
                company:   'Accenture Technology Solutions',
                startDate: '2011-04-11',
                endDate:   '2011-06-24',
                role:      'Programmer intern',
                summary:   '\
                    I was responsible for the functional and technical specification, design, development and test for a Java application.\
                    I was using the V-Model software development process, my job was also to gather the needs.'
            })
        ]
    }])

    .factory('Experience', [function () {
        var Experience = function (params) {
            this.company = params.company;
            this.city = params.city;

            this.startDate = params.startDate;
            this.endDate = params.endDate;

            this.role = params.role;
            this.summary = params.summary;
        };

        return Experience;
    }]);