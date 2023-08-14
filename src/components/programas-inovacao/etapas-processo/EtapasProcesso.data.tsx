import { IEtapasProcesso } from './EtapasProcesso';
import styles from './EtapasProcesso.module.css';

const experimentacao: IEtapasProcesso = {
  etapas: [
    <>
      <h4>Cadastro</h4>
      <p>Cadastro de ideias na plataforma E-nova</p>
    </>,
    <>
      <h4>Discovery da Iniciativa</h4>
      <p>
      Etapa em que a ideia se torna mais madura e robusta, com envolvimento dos times técnicos e da área de inovação.
      </p>
    </>,
    <>
      <h4>Comitê de Harmonização</h4>

      <p>
        Comitê com caráter deliberativo, análise multidisciplinar e
        identificação da oportunidade de apoio do ecossistema.
      </p>
    </>,
    <>
      <h4>Orquestração da Iniciativa</h4>

      <p>
        GP e squads definidas para condução do projeto. Priorização das ideias
        para etapa de aprovação e execução.
      </p>
    </>,
    <>
      <h4>Comitê de Aprovação por Alçada</h4>
      <div className={styles.comiteGrid}>
        <div className={`${styles.comiteItem} w-[127px] lg:w-[82px]`}>
          <p>Até R$ 300k </p>
          <p>Comitê de Inovadores</p>
        </div>
        <div className={`${styles.comiteItem} w-[65px] lg:w-[76px]`}>
          <p>De R$ 300k a R$ 600K</p>
          <p>VP da área proponente</p>
        </div>
        <div className={`${styles.comiteItem} w-[59px] lg:w-[68px]`}>
          <p>Acima de R$ 600k</p>
          <p>
            CEO
            <br /> Energisa
          </p>
        </div>
      </div>
    </>
  ]
};

const preprojeto: IEtapasProcesso = {
  etapas: [
    <>
      <h4>Cadastro</h4>
      <p>Cadastro de ideias na plataforma E-nova</p>
    </>,
    <>
      <h4>Discovery da Iniciativa</h4>
      <p>
      Etapa em que a ideia se torna mais madura e robusta, com envolvimento dos times técnicos e da área de inovação.
      </p>
    </>,
    <>
      <h4>Comitê de Harmonização</h4>

      <p>
        Comitê com caráter deliberativo, análise multidisciplinar e
        identificação da oportunidade de apoio do ecossistema.
      </p>
    </>,
    <>
      <h4>Orquestração da Iniciativa</h4>

      <p>
        GP e squads definidas para condução do projeto. Priorização das ideias
        para etapa de aprovação e execução.
      </p>
    </>,
    <>
      <h4>Comitê de Aprovação por Alçada</h4>
      <div className={styles.comiteGrid}>
        <div className={`${styles.comiteItem} w-[127px] lg:w-[82px]`}>
          <p>Até R$ 300k </p>
          <p>Comitê de Inovadores</p>
        </div>
        <div className={`${styles.comiteItem} w-[65px] lg:w-[76px]`}>
          <p>De R$ 300k a R$ 600K</p>
          <p>VP da área proponente</p>
        </div>
        <div className={`${styles.comiteItem} w-[59px] lg:w-[68px]`}>
          <p>Acima de R$ 600k</p>
          <p>
            CEO
            <br /> Energisa
          </p>
        </div>
      </div>
    </>
  ]
};

const PD: IEtapasProcesso = {
  etapas: [
    <>
      <h4>Cadastro</h4>
      <p>Cadastro de ideias na plataforma E-nova.</p>
    </>,
    <>
      <h4>Discovery da Iniciativa</h4>
      <p>
      Aprofundamento da inovação e da área técnica no problema, para trazer mais robustez à solução.
      </p>
    </>,
    <>
      <h4>Comitê de Harmonização</h4>
      <p>Comitê com caráter deliberativo, análise multidisciplinar e identificação da oportunidade de apoio do ecossistema.</p>
    </>,
    <>
      <h4>Orquestração da Iniciativa</h4>
      <p>
      Garantir a maturidade do material e priorização segundo uma visão executiva.
      </p>
    </>,
        <>
        <h4>Comitê de Inovadores</h4>
        <p>Validação e coleta de contribuições com conselho de inovadores da Energisa.</p>
      </>,
    <>
      <h4>Comitê de aprovação CEO</h4>
      <p>Apresentação e defesa de projeto para deliberação do CEO Energisa. </p>
    </>
  ]
};
export const EtapasProcessoData = {
  experimentacao,
  preprojeto,
  PD
};
