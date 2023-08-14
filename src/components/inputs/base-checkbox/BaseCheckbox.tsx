import { useId } from 'react';
import styles from './BaseCheckbox.module.css';

export interface IBaseCheckbox {
  isChecked: boolean;
  onChange: () => void;
  value: string;
}

const BaseCheckbox: React.FC<IBaseCheckbox> = ({
  isChecked,
  onChange,
  value
}) => {
  const id = useId();

  return (
    <label className={styles.container} htmlFor={id}>
      <div className={styles.check}>
        <input
          type="checkbox"
          id={id}
          onChange={onChange}
          checked={isChecked}
        />
        <span
          className={[isChecked ? styles.checked : null, styles.control].join(
            ' '
          )}
        ></span>
      </div>
      <div className={styles.content}>{value}</div>
    </label>
  );
};

export default BaseCheckbox;
