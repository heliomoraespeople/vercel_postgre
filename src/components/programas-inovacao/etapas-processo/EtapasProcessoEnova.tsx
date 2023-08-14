import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import styles from './EtapasProcessoEnova.module.css';

export interface IEtapasProcesso {
  coverText: string;
}

const EtapasProcessoEnova: React.FC<IEtapasProcesso> = ({ coverText }) => {
  const windowSize = useWindowSize();

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
              <p>{coverText}</p>
              <p className={styles.capaCards}>O programa e-nova, que atua na inovação incremental, não possui datas específicas para defesa de ideias, pois possui um fluxo contínuo ao longo do ano.</p>
            </div>
          )}
        </div>
        {windowSize.width <= Breakpoints.sm && (
          <div className={styles.capaText}>
            <p>{coverText}</p>
            <p className={styles.capaCards}>O programa e-nova, que atua na inovação incremental, não possui datas específicas para defesa de ideias, pois possui um fluxo contínuo ao longo do ano.</p>
          </div>
        )}
      </div>
      <div className={styles.mosaicoWrapper}>
        <div className={styles.mosaico}>
          <div className={styles.box}>
            <div className={`${styles.painel} ${styles.painelTop}`} />
            <div className={styles.bola}></div>
            <div className={styles.textboxwrapper}>
              <div className={styles.textbox}>
                <h4>Cadastro da ideia</h4>

                <p>Colaborador envia a ideia.</p>
              </div>
            </div>

            <div className={styles.line}></div>
          </div>

          <div className={styles.box}>
            <div className={styles.losango}></div>
            <div className={styles.textboxwrapper}>
              <div className={styles.textbox}>
                <h4>Validação da Inovação</h4>
                <p className="mb-3">
                  Time de Inovação verifica pontos como: A ideia é, de fato, uma
                  inovação? O que há a ser testado e validado na ideia proposta?
                  Há alguma ideia já cadastrada com escopo semelhante? Há algo a
                  ser medido caso a ideia seja implantada?
                </p>
                <p>
                  Se necessário, são solicitados ajustes ao autor para melhor
                  entendimento.
                </p>
              </div>
            </div>
            <div className={styles.line}></div>
          </div>

          <div className={styles.box}>
            <div className={`${styles.painel} ${styles.painelMiddle}`} />
            <div className={styles.losango}></div>
            <div className={styles.textboxwrapper}>
              <div className={styles.textbox}>
                <h4>Avaliação do Comitê Local</h4>

                <p className="mb-3">
                  Time de Inovação apresenta proposta para um comitê, composto
                  por Padrinho e gestores/especialistas da unidade, que avalia
                  se a ideia faz sentido a nível de negócio.
                </p>
                <p>
                  Se necessário, são solicitados ajustes ao autor para melhor
                  entendimento.
                </p>
              </div>
            </div>

            <div className={[styles.box, styles.reversedToRight].join(' ')}>
              <div className={styles.retangulo}>
                <div className={styles.losango}></div>
              </div>

              <div className={styles.textboxwrapper}>
                <div className={styles.textbox}>
                  <h4>Avaliação Técnica da TI</h4>

                  <p>
                    Ideias que envolvem TI
                    <br className="hidden md:block" /> são analisadas aqui.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.line}></div>
          </div>

          <div className={[styles.box, styles.reversedToLeft].join(' ')}>
            <div className={`${styles.painel} ${styles.painelBottom}`} />
            <div className={styles.losango}></div>

            <div className={styles.textboxwrapper}>
              <div className={styles.textbox}>
                <h4>Avaliação Técnica pela Área de Destino</h4>

                <p>
                  A ideia aprovada pelo comitê local é direcionada ao avaliador
                  técnico da área de destino.As ideias aprovadas pelo avaliador
                  com valor inferior a R$ 5 mil são automaticamente encaminhadas
                  para a etapa de projeto, já as de valor superior passarão pela
                  etapa de avaliação seguinte.
                </p>
              </div>
            </div>
            <div className={styles.line}></div>
          </div>

          <div className={`${styles.box} ${styles.reversedToRight}`}>
            <div className={[styles.losango, styles.losangoFinal].join(' ')} />

            <div className={styles.textboxwrapper}>
              <div className={styles.textbox}>
                <h4>Comitê com Gerente de Inovação</h4>

                <p>
                  Autor apresenta a ideia para o Gerente de Inovação, de modo a
                  defender a proposta e o valor a ser investido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtapasProcessoEnova;
