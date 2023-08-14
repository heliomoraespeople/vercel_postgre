import { ReactNode } from 'react';
import styles from './OutcomeItem.module.css';

export interface IOutcomeItem {
  imgSrc: string;
  title: string;
  text: ReactNode;
}

const OutcomeItem: React.FC<IOutcomeItem> = ({ imgSrc, title, text }) => {
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

export default OutcomeItem;
