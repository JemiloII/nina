(function () {
    'use strict';

    angular.module('nina')
        .service('downloadService', function () {
            var download = this;
            download.bookmarkUrl = '';

            download.setBookmarkUrl = function (bookmarkUrl) {
                download.bookmarkUrl = bookmarkUrl;
            };

            download.getBookmarkUrl = function () {
                return download.bookmarkUrl;
            }
        });
})();