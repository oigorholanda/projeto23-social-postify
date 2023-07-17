import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAllSongs(): any {
    return this.songsService.findAllSongs();
  }

  @Post()
  createSong(@Body() body: any): string {
   return this.songsService.createSong(body);
  }
}
