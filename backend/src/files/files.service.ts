import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pictures } from './entities/pictures.entity';
import { Repository } from 'typeorm';
import { getDate } from 'src/helpers/get-date';
import { base64_encode } from 'src/helpers/base64-encode';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(Pictures)
    private pictureRepository: Repository<Pictures>,
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
    }
  }
}
