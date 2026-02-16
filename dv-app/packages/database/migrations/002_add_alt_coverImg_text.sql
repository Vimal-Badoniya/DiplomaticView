-- migration: 002_add_alt_img_text
-- description: Adds alternative text column for accessibility and SEO

BEGIN;

-- 1. Add the column with a default empty string
ALTER TABLE articles 
ADD COLUMN cover_img_alt TEXT DEFAULT '';

-- 2. Optional: Populate existing rows using the title as a fallback
UPDATE articles 
SET cover_img_alt = title 
WHERE cover_img_alt = '';

COMMIT;