import { Pool } from 'pg';

export const PG_CONNECTION = 'PG_CONNECTION';

export const databaseProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'diplomatic_view',
    password: 'password123',
    port: 5432,
  }),
};
