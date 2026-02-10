import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from './database.provider';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!';
  }
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  async getDbTime() {
    // This is RAW SQL. No ORM magic.
    const res = await this.conn.query('SELECT NOW()');
    return res.rows[0];
  }
}
