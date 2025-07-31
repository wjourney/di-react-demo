import { Container } from 'inversify';
import { TYPES } from './types';
import { UserService } from './services/UserService';
import { CounterService } from './services/CounterService';

const container = new Container();

// 绑定接口到实现
container.bind(TYPES.IUserService).to(UserService).inSingletonScope();
container.bind(TYPES.ICounterService).to(CounterService).inSingletonScope();

export default container;
