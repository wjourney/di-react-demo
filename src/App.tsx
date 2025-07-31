import React, { useState } from 'react';
import { useService } from './hooks/useService';
import { TYPES } from './types';
import type { IUserService } from './services/UserService';
import  type { ICounterService } from './services/CounterService';

function App() {
  const userService = useService<IUserService>(TYPES.IUserService);
  const counterService = useService<ICounterService>(TYPES.ICounterService);

  // 由于 CounterService 内部维护的是普通字段，无法自动触发 React 渲染
  // 这里用 useState 做一次简单桥接
  const [, setVersion] = useState(0);

  const forceUpdate = () => setVersion(v => v + 1);

  const inc = () => {
    counterService.inc();
    forceUpdate();
  };
  const dec = () => {
    counterService.dec();
    forceUpdate();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h2>你好，{userService.getUserName()}！</h2>
      <h3>计数器：{counterService.count}</h3>
      <button onClick={dec}>-1</button>
      <button onClick={inc}>+1</button>
    </div>
  );
}

export default App;
