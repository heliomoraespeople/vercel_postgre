import { MouseEventHandler } from 'react';
import styles from './ButtonCTA.module.css';

export interface IButtonCTA {
  primary?: boolean;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ButtonCTA: React.FC<IButtonCTA> = ({
  label,
  primary = false,
  size = 'md',
  onClick
}) => {
  const mode = primary
    ? 'bg-verdeCitrico hover:bg-verdeCitricoLight'
    : 'border-solid border-2 border-verdeCitrico text-verdeCitrico';

  return (
    <button
      onClick={onClick}
      className={`${styles.cta} ${styles['cta--' + size]} ${mode}`}
    >
      {label}
    </button>
  );
};

export default ButtonCTA;
