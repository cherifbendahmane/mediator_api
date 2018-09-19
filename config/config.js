require('dotenv').config();//instatiate environment variables
var app_env_config = require('./app-env-prod');

if(process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'dev'){
    app_env_config = require('./app-env-dev');
    process.env.NODE_ENV = 'dev';
}
console.log('Environment: from config', process.env.NODE_ENV);

/** ------------------------------------------------------
 * ./app-env-config : Global environment configuration 
 * -------------------------------------------------------
 *
 * Configuration apply for Developement and production environment.
 * The 'NODE_ENV' variable must have either 'dev' or 'prod' value
 * for the Global environment configuration to work. 
 * Run 'export NODE_ENV=dev' for local environment. To work with production 
 * environment, run 'export NODE_ENV=prod' for production
 * -------------------------------------------------------
 */
 

var applicationEnv = app_env_config[process.env.NODE_ENV].config;
CONFIG = {} // Make this global to use all over the application
CONFIG.app          = applicationEnv.APP;
CONFIG.port         = applicationEnv.PORT;

CONFIG.db_dialect   = applicationEnv.DB_DIALECT;
CONFIG.db_host      = applicationEnv.DB_HOST;
CONFIG.db_port      = applicationEnv.DB_PORT;
CONFIG.db_name      = applicationEnv.DB_NAME;
CONFIG.db_user      = applicationEnv.DB_USER;
CONFIG.db_password  = applicationEnv.DB_PASSWORD;

CONFIG.jwt_encryption  = applicationEnv.JWT_ENCRYPTION;
CONFIG.jwt_expiration  = applicationEnv.JWT_EXPIRATION;