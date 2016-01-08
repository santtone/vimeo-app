'use strict';

angular.module('vimeoApp')
  .factory('videoService', ['vimeoApiService', 'videoDatabase', '$q',
    function (vimeoApiService, videoDatabase, $q) {

      function searchVideos() {
        return vimeoApiService.findUserVideos().then(function (vv) {
          return videoDatabase.reset(vv);
        })
      }

      return {
        getVideos: function () {
          return $q.when(
            function () {
              var cached = videoDatabase.findAll();
              return (!_.isEmpty(cached) && $q.when(cached) || searchVideos())
            }()
          )
        }
      };

    }]);

