import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateTrackDto } from './dto/create-user.dto';
import { TrackService } from './track.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  async create(
    @Body() createTrackDto: CreateTrackDto,
    @UploadedFile() picture: Express.Multer.File,
  ) {
    return this.trackService.createTrack(createTrackDto, picture);
  }

  @Get()
  getAll() {
    return this.trackService.getTracks();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.trackService.getTrack(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trackService.deleteTrack(id);
  }
}
