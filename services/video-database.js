'use strict';

angular.module('vimeoApp')
  .factory('videoDatabase', [function () {
    var saved = {};

    var store = function () {
      var api = {
        save: function (id, content) {
          saved[id] = content;
          return api.load(id);
        },
        load: function (id) {
          return saved[id];
        },
        loadAll: function () {
          return saved;
        }
      };
      return api;
    };
    return {
      findAll: function () {
        return store().loadAll();
      },
      reset: function (videos) {
        return _.map(videos, function (v) {
          return store().save(v.id, v);
        });
      }
    }
  }]);

