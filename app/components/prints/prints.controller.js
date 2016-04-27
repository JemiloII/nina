(function () {
    'use strict';
    
    angular.module('nina')
        .controller('printsController', function ($scope, $location, downloadService, printsService, toastr) {
            $scope.bookmarks = [];
            $scope.setBookmarkUrl = downloadService.setBookmarkUrl;
            var trimmedUrl = $location.absUrl().split('#')[0];

            printsService.get()
                .success(function (res) {
                    console.log('data: ', res.bookmarks);
                    $scope.bookmarks = res.bookmarks.map(function (bookmark) {
                        console.log('bookmark: ', trimmedUrl + 'bookmarks/' + bookmark.replace(/\s/g, '%20'));
                        return trimmedUrl + 'bookmarks/' + bookmark.replace(/\s/g, '%20');
                    });
                })
                .error(function () {
                    toastr.error('Could not connect to server!');
                });
        });
})();