import { injectable } from 'inversify';

export interface IUserService {
  getUserName(): string;
}

@injectable()
export class UserService implements IUserService {
  getUserName() {
    return '张三';
  }
}
