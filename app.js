var pmx = require('pmx');
var stats = require('./lib/stats');

pmx.initModule({

  widget: {

    pid: pmx.resolvePidPaths([
      '/var/run/mongodb.pid',
      '/var/run/mongodb/mongodb.pid'
    ]),

    logo: 'https://raw.githubusercontent.com/pm2-hive/pm2-mongodb/master/pres/mongodb-logo.png',

    theme: ['#262E35', '#222222', '#3ff', '#3ff'],

    el: {
      probes: true,
      actions: true
    },

    block: {
      actions: false,
      issues: false,
      meta: true,

      main_probes: ['Insert', 'Query', 'Update', 'Delete', 'Command', 'netOut', 'netIn']
    }

  }

}, function (err, conf) {
  stats.init(conf);
});
