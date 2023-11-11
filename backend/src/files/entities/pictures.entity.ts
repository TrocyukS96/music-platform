import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pictures {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  createdAt: Date;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  size: number;

  @Column()
  data: Blob;
}
