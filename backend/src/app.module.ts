import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { TrackModule } from './track/track.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TrackModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
