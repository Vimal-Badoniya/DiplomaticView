import { Controller, Get, Param } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getAllArticles() {
    return this.articlesService.getAll();
  }

  @Get(':slug')
  getArticleBySlug(@Param('slug') slug: string) {
    return this.articlesService.getBySlug(slug);
  }
}
