import useWindowSize from '../../../hooks/useWindowSize';
import CardSolido from '../../cards/card-solido/CardSolido';
import { CardSolidoData } from '../../cards/card-solido/CardSolido.data';
import styles from './ProgramasComoFunciona.module.css';

const ProgramasComoFunciona: React.FC = () => {
  const windowSize = useWindowSize();
  const isDesktop = windowSize.width >= 768;

  return (
    <div className={`${styles.container} text-cinza-300 wrapper-geral`}>
      <div className={`${styles.sectionLeft}`}>
        <picture>
          <img
            className={styles.imgBanner}
            src={`/programas_funcionamento_${isDesktop ? 'dt' : 'mb'}.png`}
            alt="Banner"
          />
        </picture>
      </div>

      <div className={styles.sectionRight}>
        <div className={styles.title}>
          COMO <br />
          <span className="font-extrabold">FUNCIONA</span>
        </div>
        <div className={styles.textWrapper}>
          <p className="mb-8">
            O colaborador contribui com uma ideia e o time de Inovação auxilia
            na validação e no desenvolvimento para torná-la um projeto concreto.
          </p>
          <p>
            De acordo com a complexidade e o prazo, a ideia pode se encaixar nos
            seguintes programas: E-nova, Experimentações, Pré-Projetos ou P&D.
          </p>
        </div>
        <CardSolido
          text={CardSolidoData.programasInovacao.text}
          buttonLabel={CardSolidoData.programasInovacao.buttonLabel}
          mode="light"
          className={styles.cardWrapper}
          onClickButton={CardSolidoData.programasInovacao.onClickButton}
        />
      </div>
    </div>
  );
};

export default ProgramasComoFunciona;
