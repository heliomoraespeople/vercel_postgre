import { ReactElement } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import styles from './EtapasProcesso.module.css';

export interface IEtapasProcesso {
  etapas: ReactElement[];
}

const EtapasProcesso: React.FC<IEtapasProcesso> = ({ etapas }) => {
  const windowSize = useWindowSize();

  const painel = {
    0: 'painelTop',
    1: 'painelMiddle',
    3: 'painelBottom'
  };

  return (
    <div className={`${styles.container}`}>
      <div className={styles.capaWrapper}>
        <div className={styles.sectionLeft}>
          <picture>
            <img alt="" src="/programas_etapas.jpg" />
          </picture>
        </div>
        <div className={styles.sectionRight}>
          <div className={styles.title}>
            ETAPAS DO
            <span className="font-bold"> PROCESSO</span>
          </div>
          {windowSize.width >= Breakpoints.sm && (
            <div className={styles.capaText}>
              <p>
                As etapas dentro de um fluxo são semelhantes nos diversos tipos
                de projetos e tem como objetivo validar e analisar a ideia a fim
                de torná-la viável ou não.
              </p>
            </div>
          )}
        </div>
        {windowSize.width <= Breakpoints.sm && (
          <div className={styles.capaText}>
            <p>
              As etapas dentro de um fluxo são semelhantes nos diversos tipos de
              projetos e tem como objetivo validar e analisar a ideia a fim de
              torná-la viável ou não.
            </p>
          </div>
        )}
      </div>

      <div className={styles.mosaicoWrapper}>
        <div className={styles.mosaico}>
          {etapas.map((etapa: ReactElement, index: number) => (
            <div className={styles.box} key={index}>
              <div className={`${styles.painel} ${styles[painel[index]]}`} />
              {index == 0 ? (
                <div className={styles.bola} />
              ) : (
                <div className={styles.losango} />
              )}
              <div className={styles.textboxwrapper}>
                <div
                  className={`${styles.textbox} ${index % 2 !== 0 ? styles.textboxPares : ''}`}
                >
                  {etapa}
                </div>
              </div>
              {index !== etapas.length - 1 && <div className={styles.line} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EtapasProcesso;
