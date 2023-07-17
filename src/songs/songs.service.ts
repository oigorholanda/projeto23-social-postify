import { Injectable } from '@nestjs/common';
import { Song } from './entities/song.entity';

@Injectable()
export class SongsService {
  songs: Song[] = [];

  createSong({artist, title}: Song): string {
      const newSong = new Song(artist, title);
      this.songs.push(newSong);
      return newSong.getInfo();
  }

  findAllSongs(): Song[] {
    return this.songs;
  }
}
