'use strict';

angular.module('vimeoApp')
  .controller('mainController', ['$scope', 'userService', 'configService', '$sce',
    function ($scope, userService, configService, $sce) {

    $scope.user = null;
    $scope.videos = [];
    $scope.videoPassword = configService.videoPassword;

    userService.getVimeoUser().then(function (u) {
      $scope.user = u;
      userService.getUserVideos().then(function (vv) {
        $scope.videos = vv;
      });
    });

    $scope.trustSrc = function (src) {
      return $sce.trustAsResourceUrl(src);
    }

  }]);
