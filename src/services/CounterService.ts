import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

export interface ICounterService {
  count: number;
  inc(): void;
  dec(): void;
}

@injectable()
export class CounterService implements ICounterService {
  count = 0;

  constructor() {
    /* 关键：让当前实例变成 observable / action */
    makeAutoObservable(this);
  }

   inc = () => {        // ← 改成箭头函数
    this.count += 1;
  };

  dec = () => {        // ← 改成箭头函数
    this.count -= 1;
  };
}
