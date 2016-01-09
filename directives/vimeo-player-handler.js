'use strict';

angular.module('vimeoApp')
  .directive('vimeoPlayerHandler', [function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var frame = _.first(element);
        var password = attrs['password'];
        frame.onload = function () {
          var player = frame.contentDocument.getElementById('player');
          if (!player.getElementsByClassName('overlay-wrapper')[0].hasAttribute('hidden')) {
            var passwordField = _.first(player.querySelectorAll('[name=password]'));
            var submitButton = _.first(player.querySelectorAll('[type=submit]'));
            passwordField.value = password;
            submitButton.click();
          }
        }
      }
    };
  }]);
