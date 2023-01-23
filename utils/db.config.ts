import { DataSource, DataSourceOptions } from 'typeorm';

export const DataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: 'host.docker.internal',
  port: 49153,
  username: 'postgres',
  password: 'postgrespw',
  database: 'fs-app',
  entities: ['dist/**/*.entity{ .ts,.js}'],
  synchronize: true,
};

const dataSource = new DataSource(DataSourceOption);
export default dataSource;
