import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TrackEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  musician: string;

  @Column()
  description: string;

  @Column({ name: 'picture', type: 'bytea', nullable: true })
  picture: Buffer;

  @Column({ type: 'bytea', name: 'audio', nullable: true })
  audio: Uint8Array;

  @Column()
  listens: number;
}
