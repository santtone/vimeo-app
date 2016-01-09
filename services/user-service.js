'use strict';

angular.module('vimeoApp')
  .factory('userService', ['authenticationService', 'vimeoApiService', 'videoService', 'configService', '$q',
    function (authenticationService, vimeoApiService, videoService, configService, $q) {

      var token = configService.token;
      var vimeoUser = null;

      var api = {
        getVimeoUser: function () {
          return vimeoUser ? $q.when(vimeoUser) : api.login();
        },
        login: function () {
          return authenticationService.authenticate(token).then(function (data) {
            return vimeoApiService.findUserInfo().then(function (user) {
              vimeoUser = user;
              return vimeoUser;
            })
          });
        },
        getUserVideos: function () {
          return videoService.getVideos();
        }
      };
      return api;

    }]);

