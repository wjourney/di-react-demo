import { useContext } from 'react';
import type { interfaces } from 'inversify';
import { DIContext } from '../di-context';

export function useService<T>(identifier: interfaces.ServiceIdentifier<T>): T {
  const container = useContext(DIContext);
  return container.get<T>(identifier);
}
