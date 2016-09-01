'use strict';

var instance;

var Singleton = function() {}

Object.defineProperties(Singleton.prototype, {
  "init": {
    get: function() {
      var privateRandomNumber = Math.random();
      
      return {
        getRandomNumber: function() {
          return privateRandomNumber;
        }
      }
    }
  }
});

Singleton.prototype.getInstance  = function (callback) {
  if (!instance) {
    instance = this.init;
  } 

  return instance;
};

module.exports = Singleton;
