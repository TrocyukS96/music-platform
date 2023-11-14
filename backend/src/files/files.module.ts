import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Audio_Entity } from './entities/audio.entity';
import { Pictures } from './entities/pictures.entity';
import { FilesService } from './files.service';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static/index';
@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: path.join(__dirname, 'static'),
    // }),
    TypeOrmModule.forFeature([Pictures, Audio_Entity]),
  ],
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
