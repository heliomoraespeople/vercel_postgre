import { IMenuItem } from './menuItems';

export default function deepFreeze(object: IMenuItem[]): readonly IMenuItem[] {
  const propNames = Reflect.ownKeys(object);

  for (const name of propNames) {
    const value = object[name];

    if ((value && typeof value === 'object') || typeof value === 'function') {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}
