'use strict';

angular.module('vimeoApp')
  .factory('authenticationService', ['$http', 'configService', function ($http, configService) {

    var url = configService.vimeoBaseApi;

    function saveAuthentication(authorization) {
      $http.defaults.headers.common.Authorization = authorization;
    }

    function bearerAuthorization(token) {
      return 'bearer ' + token;
    }

    function authenticationHeaders(token) {
      return {
        headers: {
          'Authorization': bearerAuthorization(token)
        }
      };
    }

    return {
      authenticate: function (authToken) {
        return $http.get(url, authenticationHeaders(authToken)).then(function (data) {
          saveAuthentication(bearerAuthorization(authToken));
          return data;
        }, function (error) {
          console.log(error);
          window.alert(error.status + ' ' + error.statusText);
        });
      }
    };

  }]);

