import { registerAs } from '@nestjs/config';
import {
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_URL,
} from 'src/helpers/development-env';
import { DataSource, DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  url: DB_URL,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  logging: true,
  synchronize: true,
  dropSchema: true,
};

export default registerAs('typeorm', () => config);

export const connectionSource = new DataSource(config);
