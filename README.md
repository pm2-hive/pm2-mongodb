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

## Configuration

**NODE** : User should have access to `admin` database to query statistics (see [mongo doc](http://mongodb.github.io/node-mongodb-native/2.2/api/Admin.html))

*   `ip` (Defaults to `127.0.0.1`) IP of mongodb server
*   `port` (Defaults to `27017`) Port of mongodb server
*   `username` (Defaults to `none`) used for authentication
*   `password` (Defaults to `none`) used for authentication
*   `authDB` (Defaults to `none`) used for authentication
*   `refresh_rate` (Defaults to `5000` in ms): Control the refresh rate of the worker

#### How to set these values ?

 After having installed the module you have to type :
`pm2 set pm2-mongodb: `

e.g: 
- `pm2 set pm2-mongodb:refresh_rate 5000` (every 5 seconds)
- `pm2 set pm2-mongodb:ip 42.42.42.42` (ip of my mongodb server)
- `pm2 set pm2-mongodb:password "bestpasswd"` (the password will be used to connect to mongo)

## Uninstall

```bash
$ pm2 uninstall pm2-mongodb
```

# License

MIT
