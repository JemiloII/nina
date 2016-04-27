(function () {
    'use strict';

    angular.module('nina')
        .directive('upload', function ($parse) {
            return {
                restrict: 'A',
                controller: 'uploadController',
                link: function (scope, element, attrs) {
                    var model = $parse(attrs.upload);
                    var modelSetter = model.assign;

                    element.bind('change', function () {
                        scope.$apply(function () {
                            console.log(element[0].files);
                            modelSetter(scope, element[0].files[0]);
                        });
                    });
                }
            };
        });
})();