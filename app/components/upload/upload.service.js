(function () {
    'use strict';

    angular.module('nina')
        .service('uploadService', function ($http, $location, toastr) {
            var upload = this;
            upload.uploadBookmarkImageToUrl = function(bookmarkImage, uploadUrl){
                var formData = new FormData();
                formData.append('file', bookmarkImage);

                $http.post(uploadUrl, formData, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })
                    .success(function (res) {
                        toastr.success(res.message);
                        $location.path('/prints');
                    })
                    .error(function () {
                        toastr.error('File failed to upload!');
                    });
            }
        });
})();