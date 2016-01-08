'use strict';

angular.module('vimeoApp')
  .factory('vimeoApiService', ['$http', function ($http) {

    var embedUrl = 'https://player.vimeo.com/video/';
    var url = 'https://api.vimeo.com/me';

    function parseUserInfoResult(data) {
      return data.data;
    }

    function parseVideoResult(data) {
      var videos = data.data.data;
      return _.each(videos, function (v) {
        var id = v.uri.substring(v.uri.lastIndexOf('/') + 1);
        v.id = id;
        v.embedUrl = embedUrl + id;
      })
    }

    return {
      findUserInfo: function () {
        return $http.get(url).then(parseUserInfoResult);
      },
      findUserVideos: function () {
        return $http({
          url: url + '/videos',
          method: "GET",
          params: {
            filter_embeddable: true
          }
        }).then(parseVideoResult);
      }
    };

  }]);

