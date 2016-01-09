'use strict';

angular.module('vimeoApp')
  .factory('vimeoApiService', ['$http', 'configService', function ($http, configService) {

    var embedUrl = configService.embedUrl;
    var embedParams = configService.embedQueryParameters;
    var url = configService.vimeoUserApi;

    function parseUserInfoResult(data) {
      return data.data;
    }

    function parseVideoResult(data) {
      var videos = data.data.data;
      return _.each(videos, function (v) {
        var id = v.uri.substring(v.uri.lastIndexOf('/') + 1);
        v.id = id;
        v.embedUrl = embedUrl + id + embedParams;
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

