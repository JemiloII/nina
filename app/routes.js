(function () {
    'use strict';

    angular.module('nina')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/partials/home.html'
                })
                .when('/upload', {
                    templateUrl: 'app/partials/upload.html'
                })
                .when('/download', {
                    templateUrl: 'app/components/download/download.html'
                })
                .when('/prints', {
                    templateUrl: 'app/components/prints/prints.html'
                })
                .when('/quotes', {
                    templateUrl: 'app/components/quotes/quotes.html'
                })
                .when('/misc', {
                    templateUrl: 'app/components/misc/misc.html'
                })
                .when('/about', {
                    templateUrl: 'app/partials/about.html'
                })
                .otherwise({ redirectTo: '/' });
        });
}());