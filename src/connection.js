import 'reflect-metadata';
import { createConnection, getConnection } from 'typeorm';
import options from './environments';

export default async function() {
  await createConnection(options);
  console.log('ORM Connected!');

  return getConnection();
};
