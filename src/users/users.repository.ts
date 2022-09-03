import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  findUsers(term: string) {
    return [
      { id: 1, name: 'Dim' },
      { id: 2, name: 'Vik' },
    ].filter((u) => !term || u.name.indexOf(term) > -1);
  }
}
