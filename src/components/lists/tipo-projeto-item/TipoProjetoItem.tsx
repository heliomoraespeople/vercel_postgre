import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import ButtonLink from '../../buttons/link/ButtonLink';
import styles from './TipoProjetoItem.module.css';

export interface ITipoProjetoItem {
  title: string;
  imgSrc: string;
  text: ReactElement;
  complexity: string;
  deadline: string;
  value: string;
  buttonLink: string;
}

const TipoProjetoItem: React.FC<ITipoProjetoItem> = ({
  title,
  imgSrc,
  text,
  complexity,
  deadline,
  value,
  buttonLink
}) => {
  const router = useRouter();
  return (
    <div className={`${styles.container}`}>
      <div className={styles.thumb}>
        <picture>
          <img alt={title} src={imgSrc} />
        </picture>
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.genericWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.text}>{text}</div>
          <div className={styles.dataWrapper}>
            <p className={styles.dataTitle}>Complexidade</p>
            <p className={styles.dataTitle}>Prazo Máximo</p>
            <p className={styles.dataTitle}>Valor</p>
            <p>{complexity}</p>
            <p>{deadline}</p>
            <p>{value}</p>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <ButtonLink
            color="cinza-100"
            label="Saiba mais"
            onClick={() => router.push(buttonLink)}
          />
        </div>
      </div>
    </div>
  );
};

export default TipoProjetoItem;
