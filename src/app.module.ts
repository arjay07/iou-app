import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './user/users.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
})
export class AppModule {}
