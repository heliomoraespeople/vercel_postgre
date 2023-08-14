import { useRouter } from 'next/router';
import { MutableRefObject, useEffect } from 'react';
import { jumpToRef } from '../../../lib/jumpToRef';
import TipoProjetoItem, {
  ITipoProjetoItem
} from '../../lists/tipo-projeto-item/TipoProjetoItem';
import { TipoProjetoItemDataArray } from '../../lists/tipo-projeto-item/TipoProjetoItem.data';
import styles from './TiposProjetosLista.module.css';

export interface ITiposProjetosLista {
  listRef: MutableRefObject<HTMLDivElement>;
}

const TiposProjetosLista: React.FC<ITiposProjetosLista> = ({ listRef }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.verProgramas) jumpToRef(listRef);
  }, []);

  return (
    <div ref={listRef} className={`${styles.container} wrapper-geral`}>
      {TipoProjetoItemDataArray.map(
        (item: ITipoProjetoItem, index: number) => (
          <TipoProjetoItem
            title={item.title}
            imgSrc={item.imgSrc}
            text={item.text}
            complexity={item.complexity}
            deadline={item.deadline}
            value={item.value}
            buttonLink={item.buttonLink}
            key={index}
          />
        )
      )}
    </div>
  );
};

export default TiposProjetosLista;
