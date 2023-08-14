// import NumberData from '../../generic/number-data/NumberData';
// import { NumberDataData } from '../../generic/number-data/NumberData.data';
import styles from './InvestimentosHome.module.css';

const InvestimentosHome: React.FC = () => {
  // const { emAnalise, aprovados, investidos, presenca } = NumberDataData;
  return (
    <div className={`${styles.container} wrapper-geral`}>
      <div className={styles.sectionLeft}>
        <h4 className={`${styles.title} uppercase`}>
          investimentos que
          <br className="hidden md:inline-flex" />
          <span className="font-bold"> fazem a diferença</span>
        </h4>
        <p className={styles.paragraph}>
          A Energisa quer impactar a sociedade atual com bons investimentos.
          Conheça alguns grandes números da Inovação na Energisa.
        </p>
      </div>
      <div className={styles.numbers}>
        <div className={`${styles.containerBig}`}>
          <h3 className={`${styles.titleBigUm} text-branco`}>+340</h3>
          <p className={`${styles.textBigUm} text-azulEscuro`}>
            projetos aprovados em todos os programas em 2022
          </p>
        </div>{' '}
        <div className={`${styles.containerBig}`}>
          <h3 className={`${styles.titleBigDo} text-branco`}>R$200 MIL</h3>
          <p className={`${styles.textBigDo} text-azulEscuro`}>
            investidos em projetos e-nova em 2022
          </p>
        </div>{' '}
        <div className={`${styles.containerBig}`}>
          <h3 className={`${styles.titleBigTr} text-branco`}>R$5,8 MM</h3>
          <p className={`${styles.textBigTr} text-azulEscuro`}>
            investidos em projetos de Experimentação em 2022
          </p>
        </div>{' '}
        <div className={`${styles.containerBig}`}>
          <h3 className={`${styles.titleBigQu} text-branco`}>R$43 MM</h3>
          <p className={`${styles.textBigQu} text-azulEscuro`}>
            investidos em projetos de P&D em 2022
          </p>
        </div>
        {/* <NumberData {...aprovados} />
        <NumberData {...investidos} />
        <NumberData {...presenca} />
        <NumberData {...emAnalise} /> */}
      </div>
    </div>
  );
};

export default InvestimentosHome;
