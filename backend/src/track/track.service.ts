import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-user.dto';
import { Track } from './entities/track.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private trackRepository: Repository<Track>,
  ) {}
  async createTrack(createTrackDto: CreateTrackDto) {
    try {
      const data = await this.trackRepository.save(createTrackDto);
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
