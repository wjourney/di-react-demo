import React from 'react';
import { observer } from 'mobx-react-lite';
import { useService } from './hooks/useService';
import { TYPES } from './types';
import type { IUserService } from './services/UserService';
import type { ICounterService } from './services/CounterService';

/* 用 observer 包装组件：让 MobX 追踪依赖 */
const App: React.FC = observer(() => {
  const userService    = useService<IUserService>(TYPES.IUserService);
  const counterService = useService<ICounterService>(TYPES.ICounterService);

  console.log('render App'); // 方便调试，看是否重新渲染

  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h2>你好，{userService.getUserName()}！</h2>
      <h3>计数器：{counterService.count}</h3>

      <button onClick={counterService.dec}>-1</button>
      <button onClick={counterService.inc}>+1</button>
    </div>
  );
});

export default App;
