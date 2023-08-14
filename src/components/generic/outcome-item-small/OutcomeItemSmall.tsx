import { ReactNode } from 'react';
import styles from './OutcomeItemSmall.module.css';

export interface IOutcomeItemSmall {
  imgSrc: string;
  title: string;
  text: ReactNode;
}

const OutcomeItemSmall: React.FC<IOutcomeItemSmall> = ({
  imgSrc,
  title,
  text
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <picture>
          <img alt="icone" src={imgSrc} />
        </picture>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default OutcomeItemSmall;
