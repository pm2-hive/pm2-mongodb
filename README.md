## Description

PM2 module to automatically monitor vital signs of your mongodb :

*   Queries, input, updates, deletes
*   Number of connections
*   Used memory space
*   Network speed (input and output)
*   Repl name and status

# pm2-mongodb

## Install

```bash
$ npm install pm2 -g

$ pm2 install pm2-mongodb
```

## Configure

*   `ip` (Defaults to `127.0.0.1`) IP of mongodb server
*   `port` (Defaults to `27017`) Port of mongodb server
*   `username` (Defaults to `none`) used for authentication
*   `password` (Defaults to `none`) used for authentication
*   `refresh_rate` (Defaults to `5000` in ms): Control the refresh rate of the worker

## Uninstall

```bash
$ pm2 uninstall pm2-mongodb
```

# License

MIT
