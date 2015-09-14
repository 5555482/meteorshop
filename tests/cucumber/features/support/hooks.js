(function () {

  'use strict';

  module.exports = function () {


    this.Before(function (callback) {
      console.log('running!');
      this.server.call('addUser', {email: "bob@gmail.com"}).then(callback);
    });

  };

})();