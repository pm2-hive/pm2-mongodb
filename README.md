## Description

PM2 module to automatically monitor vital signs of your mongodb :

* Queries, input, updates, deletes
* Number of connections
* Used memory space
* Network speed (input and output)

# Requirements

This module uses the `mongostat` CLI tool included in the MongoDB package. If you want to monitor a remote mongodb instance, please install MongoDB on the server starting the module.

# pm2-mongodb

## Install

```bash
$ npm install pm2 -g

$ pm2 install pm2-mongodb
```

## Uninstall

```bash
$ pm2 uninstall pm2-mongodb
```

# License

MIT
