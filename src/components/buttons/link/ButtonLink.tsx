import { MouseEventHandler } from 'react';
import styles from './ButtonLink.module.css';

export interface IButtonLink {
  label: string;
  color?: 'branco' | 'cinza-100';
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isDownloadButton?: boolean;
  href?: string;
}

const ButtonLink: React.FC<IButtonLink> = ({
  label,
  color = 'branco',
  onClick,
  className,
  isDownloadButton
}) => {
  const twStyle = `font-bold text-${color} text-xs text-left`;
  return (
    <button
      onClick={onClick}
      className={[
        styles.container,
        twStyle,
        isDownloadButton ? styles.downloadable : null,
        className
      ].join(' ')}
    >
      <div className={styles.labelWrapper}>
        {label}
        <div className={styles.bar} />
      </div>
    </button>
  );
};

export default ButtonLink;
