var shelljs = require('shelljs');

var command;

module.exports.refresh = function refresh(metrics) {
  shelljs.exec(command, {
    async: true,
    silent: true
  }, function (err, out) {
    if (err) {
      return console.error('Fail: could not retrieve mongostat metrics', err);
    }

    var data = out.replace(/[\s\n\r]+/g, ' ').split(' ');
    metrics.insert.set(data[1]);
    metrics.query.set(data[2]);
    metrics.update.set(data[3]);
    metrics.deleted.set(data[4]);
    metrics.command.set(data[6]);
    metrics.mapped.set(data[8]);
    metrics.vsize.set(data[9]);
    metrics.netIn.set(data[14]);
    metrics.netOut.set(data[15]);
    metrics.conn.set(data[16]);
  });

};


module.exports.init = function init(conf) {
  var dbName = process.env.MONGODB_DBNAME || conf.authDB;
  var host = process.env.MONGODB_HOST || conf.ip;
  var port = process.env.MONGODB_PORT || conf.port;
  var username = process.env.MONGODB_USERNAME || conf.username;
  var password = process.env.MONGODB_PASSWORD || conf.password;

  command = "mongostat --noheaders --port " + port + " -n 1";
  if (host && host.length > 0) {
    command += ' -h ' + host;
  }
  if (username && username.length > 0 && password && password.length > 0 && dbName && dbName.length > 0) {
    command += ' -u ' + username + ' -p ' + password + ' --authenticationDatabase ' + dbName;
  }
};
