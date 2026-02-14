import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { databaseProvider } from '../database/database.provider';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, databaseProvider],
})
export class ArticlesModule {}
