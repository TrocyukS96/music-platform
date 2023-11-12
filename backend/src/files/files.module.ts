import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pictures } from './entities/pictures.entity';
import { FilesService } from './files.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pictures])],
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
