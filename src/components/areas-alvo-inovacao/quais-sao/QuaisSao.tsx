import { useRef, useState } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import ButtonLink from '../../buttons/link/ButtonLink';
import TipoAreaAlvo, { ITipoAreaAlvo } from '../tipo-area-alvo/TipoAreaAlvo';
import { TipoAreaAlvoDataArray } from '../tipo-area-alvo/TipoAreaAlvo.data';
import styles from './QuaisSao.module.css';

const QuaisSao: React.FC = () => {
  const areasSummary = useRef(null as unknown as HTMLDivElement);
  const windowSize = useWindowSize();
  const isLg = windowSize.width >= Breakpoints.lg;
  const coreBusiness = useRef();
  const ecossistemaNegocios = useRef();
  const fidelizacaoCliente = useRef();
  const organizacaoDados = useRef();
  const inovacaoSustentavel = useRef();

  const [itemClicked, setItemClicked] = useState<number>(null);

  const handleToggle = (index: number): void => {
    if (itemClicked === index) {
      return setItemClicked(null);
    }
    setItemClicked(index);
  };

  const refsIndex = {
    0: coreBusiness,
    1: ecossistemaNegocios,
    2: fidelizacaoCliente,
    3: organizacaoDados,
    4: inovacaoSustentavel
  };

  const jumpToAreaAlvo = (index: number): void => {
    window.scrollTo({
      behavior: 'smooth',
      top:
        areasSummary?.current?.offsetTop +
        refsIndex[index].current.offsetTop -
        110
    });
  };

  return (
    <div ref={areasSummary} className={`${styles.container} text-cinza-300`}>
      <div className={styles.sectionLeft}>
        <div className={styles.title}>
          <p>
            Quais são as áreas <span>alvo de inovação?</span>
          </p>
        </div>
        <div className={styles.content}>
          <p>
            Existem 5 grandes áreas de interesse, sendo que cada uma delas
            contém subáreas. Essas áreas abrangem desde avanços tecnológicos,
            diversificação de fontes de receitas, até sustentabilidade e
            segurança de redes e dados.
          </p>
          <div className={styles.buttons}>
            {TipoAreaAlvoDataArray.map((item: ITipoAreaAlvo, index: number) => (
              <div key={index} className={styles.cell}>
                <ButtonLink
                  label={item.title}
                  onClick={() => jumpToAreaAlvo(index)}
                  color="cinza-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.sectionRight}>
        <picture>
          <img alt="" src="/areas_quais_sao.jpg" />
        </picture>
      </div>
      <div className={styles.sectionBottom}>
        {TipoAreaAlvoDataArray.map((item: ITipoAreaAlvo, index: number) => (
          <TipoAreaAlvo
            key={index}
            title={item.title}
            briefing={item.briefing}
            subAreas={item.subAreas}
            icon={item.icon}
            areasSummaryRef={areasSummary}
            onToggle={() => handleToggle(index)}
            active={isLg ? true : itemClicked == index}
            uniqueRef={refsIndex[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default QuaisSao;
