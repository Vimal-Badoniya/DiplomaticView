// packages/database/migrate.ts
import fs from "fs";
import path from "path";
import { pool } from "../index";

async function runMigration() {
  console.log("🚀 Starting migration...");

  try {
    // 1. Read the SQL file
    const sqlPath = path.join(
      process.cwd(),
      "migrations",
      "001_create_articles.sql",
    );
    console.log("📂 Reading SQL file from:", sqlPath);
    const sql = fs.readFileSync(sqlPath, "utf8");

    // 2. Execute the raw SQL
    // pool.query can handle multiple statements if they are separated by semicolons
    await pool.query(sql);

    console.log("✅ Migration completed successfully!");
  } catch (err) {
    console.error("❌ Migration failed:");
    console.error(err);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigration();
