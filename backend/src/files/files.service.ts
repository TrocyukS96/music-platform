import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pictures } from './entities/pictures.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(Pictures)
    private trackRepository: Repository<Pictures>,
  ) {}
  // async savePicture(picture:Express.Multer.File) {
  //   try {

  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
}
