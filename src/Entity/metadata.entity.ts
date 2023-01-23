import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity({ name: 'data' })
export class MetaData {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column()
  size: string;

  @Column()
  mimeType: string;
}
