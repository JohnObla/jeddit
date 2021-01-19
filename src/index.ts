import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import microConfig from './mikro-orm.config';
import express from 'express';

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();

  app.get('/', (_, res) => {
    res.send('hello');
  });

  app.listen(3000, () => {
    console.log(`Server started on localhost${3000}`);
  });
  process.on('SIGINT', () => {
    console.log('Bye bye!');
    process.exit();
  });
};

main();

process.on('SIGINT', () => {
  console.log('Bye bye!!');
  process.exit();
});
