-- packages/database/seeds/002_seed_articles.sql

BEGIN;

INSERT INTO articles (
    id, slug, title, subtitle, cover_img_url, 
    categories, tags, content, author, 
    status, published_at, reading_time_minutes
) VALUES 
(
    'art_2026_001', 
    'iran-us-oil-impact', 
    'The Geopolitics of Oil: Iran-US Tensions in 2026', 
    'How shifting diplomatic relations are redefining energy security in Asia.', 
    'https://images.unsplash.com/photo-1611270629569-8b357cb88da9', 
    ARRAY['Geopolitics', 'Energy'], 
    ARRAY['Iran', 'USA', 'Oil', 'India'], 
    '{"blocks":[{"type":"paragraph","text":"As of February 2026, the Strait of Hormuz remains a critical flashpoint..."}]}', 
    '{"name":"Vimal Badoniya", "role":"Lead Analyst"}', 
    'published', 
    NOW(), 
    6
),
(
    'art_2026_002', 
    'digital-diplomacy-rise', 
    'The Rise of Digital Diplomacy', 
    'Virtual summits are becoming the new standard for international relations.', 
    'https://images.unsplash.com/photo-1521791136364-798a7bc0d262', 
    ARRAY['Technology', 'Diplomacy'], 
    ARRAY['Digital', 'Governance', 'Global'], 
    '{"blocks":[{"type":"paragraph","text":"The transition to virtual diplomatic channels has accelerated faster than predicted..."}]}', 
    '{"name":"Sarah Chen", "role":"Tech Policy Reporter"}', 
    'published', 
    NOW() - INTERVAL '1 day', 
    4
),
(
    'art_2026_003', 
    'arctic-trade-routes', 
    'Arctic Routes: The New Frontier', 
    'Climate change is opening trade lanes that bypass traditional chokepoints.', 
    'https://images.unsplash.com/photo-1473081556163-2a17de81fc97', 
    ARRAY['Environment', 'Trade'], 
    ARRAY['Arctic', 'Shipping', 'Climate'], 
    '{"blocks":[{"type":"paragraph","text":"New shipping lanes in the north are cutting travel time between Europe and Asia by 30%..."}]}', 
    '{"name":"Marcus Thorne", "role":"Environmental Historian"}', 
    'published', 
    NOW() - INTERVAL '3 days', 
    8
)
ON CONFLICT (id) DO NOTHING;

COMMIT;