import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from '../database/database.provider';
import { ArticlesRepository } from './articles.repository';
import { Pool } from 'pg';

@Injectable()
export class ArticlesService {
  private readonly repo: ArticlesRepository;

  constructor(@Inject(PG_CONNECTION) pool: Pool) {
    this.repo = new ArticlesRepository(pool);
  }

  getAll() {
    return this.repo.findAllPublished();
  }

  getBySlug(slug: string) {
    return this.repo.findBySlug(slug);
  }
}
