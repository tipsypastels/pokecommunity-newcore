const environments = Object.freeze({
  // SETTINGS FOR ALL ENVIRONMENTS. ENVIRONMENT-SPECIFIC OPTIONS OVERRIDE THIS
  all: {
    entities: [`${__dirname}/models/*.js`],
    synchronize: true,
  },

  // SETTINGS FOR THE PRODUCTION ENVIRONMENT (Live PC)
  production: {
    // TODO @Jake: fill this in when putting the file on the server.
  },

  // SETTINGS FOR LOCAL DEVELOPMENT
  development: {
    type: 'sqlite',
    database: 'database.sqlite',
    logging: true,
  },
});

const env     = process.env.POKECOM_NEWCORE_ENV || 'development';
const options = Object.assign(environments.all, environments[env]);

export default options;