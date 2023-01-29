import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Cat } from './src/cats/entities/cat.entity';
import { AddNicknameColumnToCatTable1674983653484 } from './migrations/1674983653484-AddNicknameColumnToCatTable';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [Cat],
  migrations: [AddNicknameColumnToCatTable1674983653484],
});
