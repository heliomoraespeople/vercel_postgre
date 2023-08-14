import { IBaseCheckbox } from './BaseCheckbox';

const base: IBaseCheckbox = {
  isChecked: true,
  onChange: () => console.log('nada'),
  value: 'blala'
};

export const BaseCheckboxData = {
  base
};
