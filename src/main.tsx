import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import container from './inversify.config';
import { DIContext } from './di-context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DIContext.Provider value={container}>
      <App />
    </DIContext.Provider>
  </React.StrictMode>
);