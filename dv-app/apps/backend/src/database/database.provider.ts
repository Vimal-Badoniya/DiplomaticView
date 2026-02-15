import { Pool } from 'pg';

export const PG_CONNECTION = 'PG_CONNECTION';

export const databaseProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    // connectionString: process.env.DATABASE_URL,
    connectionString: process.env.NEON_DB_URL,
    user: 'admin',
    host: 'localhost',
    database: 'diplomatic_view',
    password: 'password123',
    port: 5432,
  }),
};
