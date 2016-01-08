'use strict';

angular.module('vimeoApp')
  .controller('mainController', ['$scope', 'userService', '$sce', function ($scope, userService, $sce) {

    $scope.user = null;
    $scope.videos = [];

    function queryParameters() {
      return '?loop=1'
    }

    userService.getVimeoUser().then(function (u) {
      $scope.user = u;
      userService.getUserVideos().then(function (vv) {
        _.each(vv, function (v) {
          v.embedUrl = v.embedUrl + queryParameters();
        });
        $scope.videos = vv;
      });
    });

    $scope.trustSrc = function (src) {
      return $sce.trustAsResourceUrl(src);
    }

  }]);
