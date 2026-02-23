-- migration: 003_add_locations_to_articles
-- description: Adds an array of locations to categorize articles geographically

BEGIN;

-- Add the column as an array of text. 
-- We set the default to an empty array '{}' so it's never null.
ALTER TABLE articles 
ADD COLUMN locations TEXT[] DEFAULT '{}';

-- Optional: Create an index for faster searching by location
CREATE INDEX idx_articles_locations ON articles USING GIN (locations);

COMMIT;