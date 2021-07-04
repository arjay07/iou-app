import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UsersController } from './user/users.controller';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, UsersController],
})
export class AppModule {}
