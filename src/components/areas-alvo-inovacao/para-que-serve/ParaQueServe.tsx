import { useRouter } from 'next/router';
import useWindowSize from '../../../hooks/useWindowSize';
import CardSolido from '../../cards/card-solido/CardSolido';
import { CardSolidoData } from '../../cards/card-solido/CardSolido.data';
import styles from './ParaQueServe.module.css';

const ParaQueServe: React.FC = () => {
  const router = useRouter();
  const windowSize = useWindowSize();
  const isDesktop = windowSize.width >= 768;

  return (
    <div className={`${styles.container} text-cinza-300`}>
      <div className={`${styles.sectionLeft}`}>
        <picture>
          <img
            className={styles.imgBanner}
            src={`/para-que-serve_${isDesktop ? 'dt' : 'mb'}.png`}
            alt="Banner"
          />
        </picture>
      </div>

      <div className={styles.sectionRight}>
        <div className={styles.title}>
          PARA <span className="font-extrabold">QUE SERVE?</span>
        </div>
        <div className={styles.textWrapper}>
          <p className="mb-8">
            As Áreas Alvo de Inovação foram estabelecidas para direcionarem o
            colaborador que queira contribuir com Inovação.
          </p>
          <p className="mb-8">
            Esta classificação em áreas traz diferentes visões do que é a
            Energisa. Criação de novos produtos, manutenção de rede e
            comunicação com o cliente são alguns exemplos em que há um constante
            esforço de melhorias, e isso é possível através da Inovação.
          </p>
          <p>
            Desse modo, as ideias propostas podem auxiliar e/ou responder a uma
            necessidade dos clientes, dos colaboradores ou da empresa.
          </p>
        </div>
        <CardSolido
          text={CardSolidoData.areasAlvoParaQueServe.text}
          buttonLabel={CardSolidoData.areasAlvoParaQueServe.buttonLabel}
          mode="light"
          className={styles.cardWrapper}
          onClickButton={() =>
            router.push({
              pathname: '/programas-inovacao',
              query: { verProgramas: true }
            })
          }
        />
      </div>
    </div>
  );
};

export default ParaQueServe;
