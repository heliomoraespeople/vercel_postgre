import CardSolido from '../../cards/card-solido/CardSolido';
import { CardSolidoData } from '../../cards/card-solido/CardSolido.data';
import styles from './OqueFazemos.module.css';

const OqueFazemos: React.FC = () => {
  return (
    <div className={`${styles.container} wrapper-geral`}>
      <div className={styles.sectionLeft}>
        <picture>
          <img
            className={styles.imgBanner}
            src="/digilabs/oque_fazemos.png"
            alt="Banner"
          />
        </picture>
      </div>
      <div className={styles.sectionRight}>
        <div className={styles.title}>
          O QUE <br />
          <span className="font-extrabold">FAZEMOS?</span>
        </div>
        <div className={styles.textWrapper}>
          <p className="mb-8">
          Nós promovemos a cultura de projetos ágeis e a <span className="relative bg-azulEscuro text-branco inline">Cultura Data-driven.</span>, além de utilizar metodologias de design de produtos e facilitações, utilizando o design thinking para criar soluções inovadoras que atendam às necessidades dos nossos clientes e usuários. <br />
            <div className="relative">
              {' '}
             
              <CardSolido
                {...CardSolidoData.digitalLabsOqueFazemos}
                className={styles.cardWrapper}
              />
              <div className={styles.line} />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OqueFazemos;
