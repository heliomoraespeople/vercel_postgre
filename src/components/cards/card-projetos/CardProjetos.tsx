import router from 'next/router';
import ButtonLink from '../../buttons/link/ButtonLink';
import styles from './CardProjetos.module.css';

interface CardProjetosData {
  title: string;
  abstract: string;
  buttonLink: string;
  img: string;
  path: string;
  query: string;
}

const CardProjetos: React.FC<CardProjetosData> = props => {
  const { title, abstract, buttonLink, img, path, query } = props;
  return (
    <div className={styles.CardProjeto}>
      <h3 className={`${styles.title} text-branco`}>{title}</h3>
      <p className={`${styles.abstract} text-branco`}>{abstract}</p>
      <ButtonLink
        label={buttonLink}
        className={`${styles.btnLink} text-branco`}
        onClick={() =>
          router.push({ pathname: `/${path}`, query: { projeto: `${query}` } })
        }
      />
      <picture>
        <img className={styles.imgCard} src={img} alt="Card Projetos" />
      </picture>
    </div>
  );
};

export default CardProjetos;
