import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pictures } from './entities/pictures.entity';
import { Repository } from 'typeorm';
import { getDate } from 'src/helpers/get-date';
import { base64_encode } from 'src/helpers/base64-encode';
import { Audio_Entity } from './entities/audio.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(Pictures)
    private pictureRepository: Repository<Pictures>,
    @InjectRepository(Audio_Entity)
    private audioRepository: Repository<Audio_Entity>,
  ) {}
  async savePicture(picture: Express.Multer.File) {
    try {
      const newPicture = {
        name: picture?.originalname,
        type: picture?.mimetype,
        data: base64_encode(picture.buffer, picture?.mimetype?.split('/')[1]),
        size: picture?.size,
        createdAt: getDate(),
      };
      const data = await this.pictureRepository.save(newPicture);
      return data;
    } catch (e) {
      console.log(e);
      throw new NotFoundException('Internal error');
    }
  }
  async saveAudio(audio: Express.Multer.File) {
    try {
      const preparedData = {
        fieldname: audio.fieldname,
        originalname: audio.originalname,
        mimetype: audio.originalname,
        encoding: audio.encoding,
        size: audio.size,
        buffer: audio.buffer,
      };
      const data = await this.audioRepository.save(preparedData);
      console.log(data, '-responsed audio from db');
      return data;
    } catch (e) {
      console.log(e);
      throw new NotFoundException('Internal error');
    }
  }
}
