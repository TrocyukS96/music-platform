import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { Tracks } from './entities/tracks.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FilesService } from 'src/files/files.service';
import { getDate } from 'src/helpers/get-date';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Tracks)
    private trackRepository: Repository<Tracks>,
    private filesService: FilesService,
  ) {}
  async createTrack(
    createTrackDto: CreateTrackDto,
    picture: Express.Multer.File,
    audio: Express.Multer.File,
  ) {
    try {
      const pictureData = await this.filesService.savePicture(picture);
      const audioData = await this.filesService.saveAudio(audio);
      console.log(audioData, '--audioData');
      const sendData = {
        ...createTrackDto,
        picture: pictureData?.data,
        audio: JSON.stringify(audioData),
        createdAt: getDate(),
      };
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
