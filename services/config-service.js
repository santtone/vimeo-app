'use strict';

angular.module('vimeoApp')
  .factory('configService', [function () {
    return {
      token: 'ee100b46d32c27be3b879e277ffecaa8',//OAuth token generated by vimeo
      videoPassword: '123456',//for password protected vimeo videos
      vimeoBaseApi: 'https://api.vimeo.com',
      vimeoUserApi: 'https://api.vimeo.com/me',
      embedUrl: 'https://player.vimeo.com/video/',
      embedQueryParameters: '?loop=1'
    };
  }]);

