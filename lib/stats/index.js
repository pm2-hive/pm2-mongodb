var Probe = require('pmx').probe();

var metrics = {};

function initMetrics() {

  metrics.insert = Probe.metric({
    name: 'Insert',
    value: 'N/A'
  });

  metrics.query = Probe.metric({
    name: 'Query',
    value: 'N/A'
  });

  metrics.update = Probe.metric({
    name: 'Update',
    value: 'N/A'
  });

  metrics.deleted = Probe.metric({
    name: 'Delete',
    value: 'N/A'
  });

  metrics.netIn = Probe.metric({
    name: 'netIn',
    value: 'N/A'
  });
  metrics.netOut = Probe.metric({
    name: 'netOut',
    value: 'N/A'
  });

  metrics.conn = Probe.metric({
    name: 'Connections',
    value: 'N/A'
  });

  metrics.mapped = Probe.metric({
    name: 'Mapped',
    value: 'N/A'
  });

  metrics.vsize = Probe.metric({
    name: 'Vsize',
    value: 'N/A'
  });

  metrics.command = Probe.metric({
    name: 'Command',
    value: 'N/A'
  });

}

function refreshMetrics(provider) {
  provider.refresh(metrics);
}

module.exports.init = function init(conf) {
  var refresh_rate = process.env.PM2_MONGODB_REFRESH_RATE || conf.refresh_rate || 5000; // ms
  initMetrics();

  var provider;
  if (process.env.PM2_MONGODB_USE_CLIENT || conf.useClient) {
    provider = require('./client');
  } else {
    provider = require('./mongostat');
  }

  provider.init(conf);
  setInterval(refreshMetrics.bind(this, provider), refresh_rate);
  refreshMetrics(provider);

};
