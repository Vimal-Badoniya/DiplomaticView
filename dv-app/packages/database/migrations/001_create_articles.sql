BEGIN;

CREATE TYPE article_status AS ENUM ('draft', 'published');

CREATE TABLE articles (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,

  title TEXT NOT NULL,
  subtitle TEXT,

  cover_img_url TEXT,

  categories TEXT[] NOT NULL DEFAULT '{}',
  tags TEXT[] NOT NULL DEFAULT '{}',

  content JSONB NOT NULL,
  author JSONB NOT NULL,

  seo_meta JSONB,

  status article_status NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,

  reading_time_minutes INT,

  deleted_at TIMESTAMPTZ,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_articles_live
  ON articles (published_at DESC)
  WHERE status = 'published' AND deleted_at IS NULL;

CREATE INDEX idx_articles_categories
  ON articles USING GIN (categories);

CREATE INDEX idx_articles_tags
  ON articles USING GIN (tags);

COMMIT;