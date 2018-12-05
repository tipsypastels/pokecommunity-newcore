import { createConnection } from 'typeorm';

(async function() {
  const options = {
    type: 'sqlite',
    database: '../database.sqlite',
    entities: [`${__dirname}/models/*.js`],
    logging: true,
  };

  try {
    await createConnection(options);
  } catch(e) {
    console.log(e.message);
  }
})();
