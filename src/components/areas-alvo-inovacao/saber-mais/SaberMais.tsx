import ButtonLink from '../../buttons/link/ButtonLink';
import Farol from '../../icons/saber-mais/Farol';
import Radar from '../../icons/saber-mais/Radar';
import styles from './SaberMais.module.css';

const SaberMais: React.FC = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.title}>
        <p>QUER SABER MAIS?</p>
      </div>
      <div className="hidden lg:block lg:w-full" />
      <div className={styles.sectionLeft}>
        <picture>
          <img alt="Farol" src="/farol.jpg" />
        </picture>
      </div>
      <div className={`${styles.sectionRight}`}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Radar />
          </div>
          <div className={styles.content}>
            <h5>Radar de tendências</h5>
            <p>
              Utilizada como ferramenta facilitadora de tomadas de decisão. O
              Radar de Tendências permite a deliberação e discussão elaborada a
              respeito de cenários futuros e com isso o que será relevante como
              foco de inovação.
            </p>
            <ButtonLink
              label="Conhecer mais esta ferramenta"
              color="cinza-100"
              onClick={null}
              isDownloadButton
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Farol />
          </div>
          <div className={styles.content}>
            <h5>Faróis de negócios</h5>
            <p>
              Os faróis são uma ferramenta criada à partir da discussão sobre as
              tendências encontradas pela Energisa, e esta ferramenta é
              responsável por maximizar os impactos positivos e minimizar os
              possíveis impactos negativos de cada uma delas.
            </p>
            <ButtonLink
              isDownloadButton
              label="Conhecer mais este projeto"
              color="cinza-100"
              onClick={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaberMais;
