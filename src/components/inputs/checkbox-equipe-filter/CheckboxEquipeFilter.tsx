import { FC, useEffect, useState } from 'react';
import styles from './CheckboxEquipeFilter.module.css';

export type checkboxType = 1 | 2 | 3 | 4 | 5 | 6;

export interface ICheckBoxEquipeFilter {
  label: string;
  checked: boolean;
  htmlFor: string;
  onChange: () => void;
  otherType?: boolean;
  checkTypes?: checkboxType;
}

const CheckboxEquipeFilter: FC<ICheckBoxEquipeFilter> = ({
  label,
  checked,
  htmlFor,
  onChange,
  checkTypes,
  otherType = true
}) => {
  const [style, setStyle] = useState('');
  const [styleLabel, setStyleLabel] = useState('');

  useEffect(() => {
    if (otherType) {
      switch (checkTypes) {
        case 1:
          setStyle(styles.checkboxType1);
          setStyleLabel(styles.checkboxLabel1);
          break;
        case 2:
          setStyle(styles.checkboxType2);
          setStyleLabel(styles.checkboxLabel2);
          break;
        case 3:
          setStyle(styles.checkboxType3);
          setStyleLabel(styles.checkboxLabel3);
          break;
        case 4:
          setStyle(styles.checkboxType4);
          setStyleLabel(styles.checkboxLabel4);
          break;
        case 5:
          setStyle(styles.checkboxType5);
          setStyleLabel(styles.checkboxLabel5);
          break;
        case 6:
          setStyle(styles.checkboxType6);
          setStyleLabel(styles.checkboxLabel6);
          break;
        default:
          setStyle(styles.checkbox);
          setStyleLabel(styles.checkboxLabel);
      }
    }
  }, [otherType, checkTypes]);

  return (
    <label
      className={`
    ${style}
    `}
      htmlFor={htmlFor}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={htmlFor}
      />
      <p className={styleLabel}>{label}</p>
    </label>
  );
};

export default CheckboxEquipeFilter;
