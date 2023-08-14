import { ReactNode } from 'react';
import ButtonLink from '../../buttons/link/ButtonLink';
import styles from './CardSolido.module.css';

export interface ICardSolido {
  text: ReactNode;
  mode?: 'light' | 'dark';
  buttonLabel?: string;
  className?: string;
  linkPlaceholder?: string;
  onClickButton?: () => void;
}

const CardSolido: React.FC<ICardSolido> = ({
  text,
  mode = 'dark',
  buttonLabel,
  className,
  linkPlaceholder,
  onClickButton
}) => {
  const buttonColor = mode === 'dark' ? 'branco' : 'cinza-100';
  const placeholderColor = mode === 'dark' ? 'text-branco' : 'text-cinza-100';
  return (
    <div className={`${styles.container} ${styles[mode]} ${className}`}>
      {text}
      {linkPlaceholder ? (
        <p className={`mt-5 font-bold text-[12px] ${placeholderColor}`}>
          {linkPlaceholder}
        </p>
      ) : buttonLabel && onClickButton ? (
        <ButtonLink
          className="mt-5"
          label={buttonLabel}
          color={buttonColor}
          onClick={onClickButton}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardSolido;
