'use strict';

var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;

//the MongoDB connection
var connectionInstance;

var mongoDBConnector = function() {}

Object.defineProperties(mongoDBConnector.prototype, {
  "init": {
    get: function() {
      var db = new Db('your-db', new Server("127.0.0.1", Connection.DEFAULT_PORT, { auto_reconnect: true }));

      db.open(function(error, databaseConnection) {
        if (error) throw new Error(error);
        
        connectionInstance = databaseConnection;
        
        return connectionInstance;
      });
    }
  }
});

mongoDBConnector.prototype.getInstance  = function (callback) {
  //if already we have a connection, don't connect to database again
  if (!connectionInstance) {
    connectionInstance = init();
    callback(connectionInstance);
  } else {
    callback(connectionInstance);
  }
};

module.exports = mongoDBConnector;

---------------------------------------------------------------------------------------------------------

var mongoDbConnector = require('./lib/connection.js');


exports.index = function(req, res, next) {
  mongoDbConnector.getInstance(function(databaseConnection) {
    databaseConnection.collection('collectionName', function(error, collection) {
      collection.find().toArray(function(error, results) {
        //blah blah
      });
    });
  });
};