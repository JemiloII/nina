(function () {
    'use strict';
    
    angular.module('nina')
        .controller('downloadController', function ($scope, downloadService) {
            $scope.bookmark = downloadService.getBookmarkUrl();
        });
})();