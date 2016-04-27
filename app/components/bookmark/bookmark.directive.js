(function () {
    'use strict';

    angular.module('nina')
        .directive('bookmark', function () {
            return {
                restrict: 'E',
                // replace: true,
                scope: {
                    src: '@'
                },
                templateUrl: 'app/components/bookmark/bookmark.html'
            };
        });
})();