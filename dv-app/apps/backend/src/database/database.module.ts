import { Module, Global } from '@nestjs/common';
import { databaseProvider } from './database.provider';

@Global() // This makes the database available everywhere without re-importing
@Module({
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class DatabaseModule {}
