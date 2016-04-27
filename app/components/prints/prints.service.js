(function () {
    'use strict';

    angular.module('nina')
        .factory('printsService', function ($http) {
            return {
                get: function () {
                    return $http.get('/bookmarks/');
                }
            };
        })
})();