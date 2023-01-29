import { Injectable } from '@nestjs/common';

// TODO create real class representing user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'maria',
      password: 'yourpassword1',
    },
    {
      userId: 2,
      username: 'john',
      password: 'yourpassword2',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
