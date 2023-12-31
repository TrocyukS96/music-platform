import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Audio_Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fieldname: string;

  @Column()
  originalname: string;

  @Column()
  encoding: string;

  @Column()
  mimetype: string;

  @Column()
  size: number;

  @Column({ type: 'bytea', nullable: false })
  buffer: Buffer;
}
