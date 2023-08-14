import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import IProjeto from '../../../models/interfaces/Projeto';
import styles from './CardProjetosPesquisa.module.css';
import StatusesProjeto from '../../../models/enums/StatusesProjeto';
import { useEffect } from 'react';

export interface ICardProjetosPesquisa extends IProjeto {
  onClick: () => void;
  activeModal: boolean;
}

const CardProjetosPesquisa: React.FC<ICardProjetosPesquisa> = ({
  cardImgSrc,
  imgAlt,
  title,
  // areaAlvo,
  dono,
  gerente,
  tipoPrograma,
  status = 'planejamento',
  listView = false,
  onClick,
  activeModal
}) => {
  const windowSize = useWindowSize();
  const LENGTH_THERSHOLD = windowSize.width >= Breakpoints.lg ? 40 : 34;

  const responsaveisJoined = `${dono}, ${gerente}.`;

  const responsaveisSliced =
    responsaveisJoined.slice(0, LENGTH_THERSHOLD) + '...';

  const responsaveisString =
    responsaveisJoined.length <= LENGTH_THERSHOLD
      ? responsaveisJoined
      : responsaveisSliced;

  const tagStatus = (
    <div className={`${styles.tag} bg-azulBase`}>
      <span>{StatusesProjeto[status]}</span>
    </div>
  );

  const tagTipoPrograma = (
    <div className={`${styles.tag} bg-azulEscuro`}>
      <span>{tipoPrograma}</span>
    </div>
  );

  useEffect(() => {
    if (activeModal) {
      onClick();
    }
  }, []);

  return (
    <button
      className={`${styles.container} ${
        listView ? styles['container--list'] : ''
      }`}
      onClick={onClick}
    >
      <div className={styles.image}>
        <picture>
          <img alt={imgAlt} src={cardImgSrc} />
        </picture>
        <div className={`${styles.gridViewTags} ${styles.tagsArea}`}>
          {tagTipoPrograma}
          {tagStatus}
        </div>
      </div>
      <div className={styles.content}>
        <p className={`${styles.title} text-azulEscuro`}>{title}</p>
        <div className={`${styles.listViewTags} ${styles.tagsArea}`}>
          {tagTipoPrograma}
          {tagStatus}
        </div>
        <div className={`${styles.details} text-cinza-300`}>
          {/* <p className={styles.tipo}>{areaAlvo}</p> */}
          <p>Responsáveis: {responsaveisString}</p>
        </div>
      </div>
    </button>
  );
};

export default CardProjetosPesquisa;
