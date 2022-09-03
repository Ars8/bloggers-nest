import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/users.controller';
import { UsersRepository } from './users/users.repository';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UsersService, UsersRepository],
})
export class AppModule {}
