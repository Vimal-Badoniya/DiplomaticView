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
      'art_seed_1_3',
      'iran-us-oil-impact-on-india',
      'Iran–US Tensions and Oil Markets of the world',
      'Why geopolitics still moves crude prices up/down',
      'https://example.com/oil.jpg',
      ARRAY['Geopolitics', 'Energy'],
      ARRAY['Iran', 'USA', 'Oil'],
      '{"blocks":[{"type":"paragraph","text":"Oil prices react strongly to geopolitical tensions between Iran and the US."}]}',
      '{"name":"Policy Desk","role":"Senior Analyst"}',
      'published',
      now(),
      6
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
