import { ReactElement } from 'react';
import styles from './CardCases.module.css';

export interface ICardCases {
  title: string;
  subtitle: string;
  text: ReactElement;
  imagesPath: string[];
}

const CardCases: React.FC<ICardCases> = ({
  title,
  subtitle,
  text,
  imagesPath
}) => {
  return (
    <div className={`${styles.container} text-branco`}>
      <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.images}>
        {imagesPath.map((path, index) => (
          <picture key={index}>
            <img
              alt={'case' + index}
              src={path}
              className={[styles.image, styles['image--' + index]].join(' ')}
            />
          </picture>
        ))}
      </div>
    </div>
  );
};

export default CardCases;
