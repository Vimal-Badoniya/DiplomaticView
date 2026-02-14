import { Pool } from 'pg';

export class ArticlesRepository {
  constructor(private readonly pool: Pool) {}

  async findAllPublished() {
    const { rows } = await this.pool.query(
      `
      SELECT
        id,
        slug,
        title,
        subtitle,
        cover_img_url,
        published_at,
        reading_time_minutes
      FROM articles
      WHERE status = 'published'
        AND deleted_at IS NULL
      ORDER BY published_at DESC
      `,
    );

    return rows;
  }

  async findBySlug(slug: string) {
    const { rows } = await this.pool.query(
      `
      SELECT
        id,
        slug,
        title,
        subtitle,
        cover_img_url,
        content,
        author,
        published_at,
        reading_time_minutes
      FROM articles
      WHERE slug = $1
        AND status = 'published'
        AND deleted_at IS NULL
      LIMIT 1
      `,
      [slug],
    );

    return rows[0] ?? null;
  }
}
