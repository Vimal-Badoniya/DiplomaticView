# Database Package

This package owns all PostgreSQL-related infrastructure.

## Responsibilities

- Database connection pool (`index.ts`)
- Schema migrations (`migrations/`)

## Rules

- Schema changes happen ONLY via new migration files
- Migration files are append-only
- Old migrations are never edited
- Application code must NOT create or modify tables

## How to apply migrations (local)

```bash
# psql $DATABASE_URL -f packages/database/migrations/001_create_articles.sql
psql $NEON_DB_URL -f packages/database/migrations/001_create_articles.sql
```
