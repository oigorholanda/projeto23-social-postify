import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [UsersModule, SongsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
