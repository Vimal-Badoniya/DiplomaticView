import { Pool } from 'pg';

export const PG_CONNECTION = 'PG_CONNECTION';

console.log('Database URL:', process.env.NEON_DB_URL); // Debugging line to check the environment variable

export const databaseProvider = {
  provide: PG_CONNECTION,
  useFactory: () => {
    const isCloud = process.env.NEON_DB_URL?.includes('neon.tech');

    return new Pool({
      connectionString: process.env.NEON_DB_URL,
      // If it's Neon, we MUST use SSL. If it's Docker, we don't.
      ssl: isCloud ? { rejectUnauthorized: false } : false,
    });
  },
  // useValue: new Pool({
  //   // connectionString: process.env.DATABASE_URL,
  //   connectionString: process.env.NEON_DB_URL,
  //   // user: 'admin',
  //   // host: 'localhost',
  //   // database: 'diplomatic_view',
  //   // password: 'password123',
  //   // port: 5432,
  // }),
};
