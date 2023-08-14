import { MutableRefObject, ReactNode, useRef } from 'react';
import { jumpToRef } from '../../../lib/jumpToRef';
import ButtonLink from '../../buttons/link/ButtonLink';
import styles from './TipoAreaAlvo.module.css';

export interface ITipoAreaAlvo {
  title: string;
  briefing: ReactNode;
  subAreas: string[];
  icon: ReactNode;
  areasSummaryRef: MutableRefObject<HTMLDivElement>;
  onToggle: () => void;
  active: boolean;
  uniqueRef: MutableRefObject<HTMLDivElement>;
}

const TipoAreaAlvo: React.FC<ITipoAreaAlvo> = ({
  title,
  briefing,
  subAreas,
  icon,
  areasSummaryRef,
  onToggle,
  active,
  uniqueRef
}) => {
  const subAreasRef = useRef(null as unknown as HTMLDivElement);
  const wrapperHeight =
    active && subAreasRef?.current
      ? { height: subAreasRef?.current.scrollHeight }
      : { height: '0px' };
  return (
    <div ref={uniqueRef} className={styles.container}>
      <div className={styles.sectionLeft}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconWrapper}>{icon}</div>
          <p>{title}</p>
        </div>
        <div className={styles.briefing}>{briefing}</div>
      </div>
      <div className={styles.sectionRight}>
        <ButtonLink
          label="Ver outras áreas"
          onClick={() => jumpToRef(areasSummaryRef)}
          className={styles.outrasAreas}
          color="cinza-100"
        />
        <button
          className={`${styles.subAreasButton} ${active ? styles.opened : ''}`}
          onClick={onToggle}
        >
          SUBÁREAS DE INTERESSE
        </button>
        <div
          ref={subAreasRef}
          style={wrapperHeight}
          className={styles.subAreasWrapper}
        >
          <div className={styles.subAreasGrid}>
            {subAreas.map((subArea: string, key: number) => (
              <div className={styles.subArea} key={key}>
                {subArea}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipoAreaAlvo;
