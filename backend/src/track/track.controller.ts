import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-user.dto';
import { TrackService } from './track.service';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  async create(@Body() createTrackDto: CreateTrackDto) {
    return this.trackService.createTrack(createTrackDto);
  }

  @Get()
  getAll() {
    return this.trackService.getTracks();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trackService.deleteTrack(id);
  }
  // delete() {}
}
