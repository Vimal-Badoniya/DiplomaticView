import "dotenv/config";
import { pool } from "../index";

async function seedArticles() {
  console.log("🌱 Seeding articles...");

  await pool.query(
    `
    INSERT INTO articles (
      id,
      slug,
      title,
      subtitle,
      cover_img_url,
      categories,
      tags,
      content,
      author,
      status,
      published_at,
      reading_time_minutes
    )
    VALUES
    (
      'art_seed_1',
      'iran-us-oil-impact',
      'Iran–US Tensions and Oil Markets',
      'Why geopolitics still moves crude prices',
      'https://example.com/oil.jpg',
      ARRAY['Geopolitics', 'Energy'],
      ARRAY['Iran', 'USA', 'Oil'],
      '{"blocks":[{"type":"paragraph","text":"Oil prices react strongly to geopolitical tensions between Iran and the US."}]}',
      '{"name":"Policy Desk","role":"Senior Analyst"}',
      'published',
      now(),
      6
    ),
    (
      'art_seed_2',
      'ai-and-global-diplomacy',
      'AI and Global Diplomacy',
      'How artificial intelligence is reshaping foreign policy',
      'https://example.com/ai.jpg',
      ARRAY['Technology', 'Diplomacy'],
      ARRAY['AI', 'Foreign Policy'],
      '{"blocks":[{"type":"paragraph","text":"AI is becoming a new tool of statecraft and diplomacy."}]}',
      '{"name":"Tech Desk"}',
      'published',
      now(),
      5
    )
    ON CONFLICT (id) DO NOTHING;
    `,
  );

  console.log("✅ Articles seeded successfully");
}

seedArticles()
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await pool.end();
  });
