import { useRouter } from 'next/router';
import ButtonLink from '../../buttons/link/ButtonLink';
import styles from './ConhecaEquipe.module.css';

const ConhecaEquipe: React.FC = () => {
  const router = useRouter();
  return (
    <div className={`${styles.container}`}>
      <div className={styles.sectionLeft}>
        <picture>
          <img alt="" src="/programas_equipe.jpg" />
        </picture>
      </div>
      <div className={styles.sectionRight}>
        <h3>Conheça a equipe responsável</h3>
        <p>
          Todo esse processo dentro de um fluxo conta com a participação de uma
          equipe de profissionais que você pode conhecer no botão abaixo.{' '}
        </p>
        <ButtonLink
          color="cinza-100"
          label="Saiba mais"
          onClick={() => router.push('/equipe')}
        />
      </div>
    </div>
  );
};

export default ConhecaEquipe;
