//check env:
var env = process.env.NODE_ENV || 'development';
console.log(env);
//console.log(process.env.NODE_ENV);
//fetch env.config
var config = require('./config.json');
//console.log(envConfig);

var envConfig = config[env];
//console.log(config[env]);
//console.log(envConfig);
//console.log(process.env);//gives the entire set of environment variables.
//console.log(envConfig[key]);//key is not defined.

//add env.config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);

