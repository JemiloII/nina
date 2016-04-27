(function () {
    'use strict';

    angular.module('nina')
        .controller('uploadController', function($scope, uploadService) {
            $scope.uploadFile = function () {
                var bookmarkImage = $scope.bookmarkImage;
                var uploadUrl = "/bookmarks";
                uploadService.uploadBookmarkImageToUrl(bookmarkImage, uploadUrl);
            };
        });
})();