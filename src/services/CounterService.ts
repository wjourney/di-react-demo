import { injectable } from 'inversify';

export interface ICounterService {
  count: number;
  inc(): void;
  dec(): void;
}

@injectable()
export class CounterService implements ICounterService {
  count = 0;

  inc() {
    this.count += 1;
  }
  dec() {
    this.count -= 1;
  }
}
