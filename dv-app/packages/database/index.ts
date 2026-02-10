import { Pool } from "pg";

export const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "password123",
  database: process.env.DB_NAME || "diplomatic_view",
  port: 5432,
});

// A wrapper to help you log queries while learning
export const query = (text: string, params?: any[]) => {
  console.log("SQL Executed:", text);
  return pool.query(text, params);
};
