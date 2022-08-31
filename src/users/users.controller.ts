import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUsers() {
    return [{ id: 1 }, { id: 2 }];
  }
}
