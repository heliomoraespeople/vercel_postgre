import { ReactNode } from 'react';
import styles from './CardAI.module.css';

export interface ICardAI {
  imgSrc: string;
  title: string;
  subtitle: string;
  list: ReactNode;
  reverseImg?: boolean;
}

const CardAI: React.FC<ICardAI> = ({
  imgSrc,
  title,
  subtitle,
  list,
  reverseImg
}) => {
  return (
    <div className={`${styles.container} ${reverseImg ? styles.reversed : ''}`}>
      <div className={`${styles.left}`}>
        <picture>
          <img alt="" src={imgSrc} />
        </picture>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
        <div className={styles.list}>{list}</div>
      </div>
    </div>
  );
};

export default CardAI;
