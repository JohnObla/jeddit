import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { User } from './entities/User';
require('dotenv').config();

export default {
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  type: 'postgresql',
  entities: [Post, User],
  dbName: 'jeddit',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
