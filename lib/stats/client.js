var MongoClient = require('mongodb').MongoClient;

var client;

module.exports.refresh = function refresh(metrics) {
  client.stats().then(function (data) {
    metrics.insert.set(data.opcounters.insert);
    metrics.query.set(data.opcounters.query);
    metrics.update.set(data.opcounters.update);
    metrics.deleted.set(data.opcounters.delete);
    metrics.command.set(data.opcounters.command);
    metrics.mapped.set(data.mem.mapped);
    metrics.vsize.set(data.mem.virtual);
    metrics.netIn.set(data.network.bytesIn);
    metrics.netOut.set(data.network.bytesOut);
    metrics.conn.set(data.connections.current);
  });
};

module.exports.init = function init(conf) {
  var dbName = process.env.MONGODB_DBNAME || conf.authDB;
  var host = process.env.MONGODB_HOST || conf.ip;
  var port = process.env.MONGODB_PORT || conf.port;
  var username = process.env.MONGODB_USERNAME || conf.username;
  var password = process.env.MONGODB_PASSWORD || conf.password;
  var login = '';

  if (username && password) {
    login = username + ':' + password + '@';
  }
  var url = 'mongodb://' + login + host + ':' + port + '/' + dbName;

  return MongoClient.connect(url).then(function (db) {
    client = db;
  }).catch(function (err) {
    throw err;
  });

};
