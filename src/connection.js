import 'reflect-metadata';
import { createConnection, getConnection } from 'typeorm';

export default async function() {
  const options = {
    type: 'sqlite',
    database: '../database.sqlite',
    entities: [`${__dirname}/models/*.js`],
    logging: true,

    /* turn this off in production */
    synchronize: true,
  };

  try {
    await createConnection(options);
    console.log('ORM Connected!');
    return getConnection();
  } catch(e) {
    console.log(e.message);
  }
};
