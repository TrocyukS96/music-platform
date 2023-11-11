import { Pictures } from 'src/files/entities/pictures.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tracks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  musician: string;

  @Column()
  description: string;

  @OneToOne(() => Pictures, (pictures) => pictures.id)
  pictureId: number;

  // @Column({ type: 'bytea', name: 'audio', nullable: true })
  // audio: Uint8Array;

  // @Column()
  // listens: number;
}
