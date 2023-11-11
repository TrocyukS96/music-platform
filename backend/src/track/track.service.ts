import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-user.dto';
import { Tracks } from './entities/tracks.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Tracks)
    private trackRepository: Repository<Tracks>,
  ) {}
  async createTrack(
    createTrackDto: CreateTrackDto,
    picture: Express.Multer.File,
  ) {
    try {
      console.log(picture, '---picture');
      const sendData = { ...createTrackDto, picture };
      const data = await this.trackRepository.save(sendData);
      return JSON.stringify(data);
    } catch (e) {
      console.log(e);
    }
  }
  async getTracks() {
    try {
      return await this.trackRepository.find();
    } catch (e) {
      console.log(e);
    }
  }
  async getTrack(id: number) {
    try {
      return await this.trackRepository.findOne({ where: { id } });
    } catch (e) {
      console.log(e);
    }
  }
  async deleteTrack(id: string) {
    try {
      await this.trackRepository.delete(id);
      return 'Трек удален';
    } catch (e) {
      console.log(e);
    }
  }
  // async getAll() {}
  // async getOne() {}
  // async delete() {}
}
