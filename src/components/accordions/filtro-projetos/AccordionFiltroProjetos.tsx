import { useState } from 'react';
import { useProjetos } from '../../../context/ProjetosContext';
import AccordionFiltroProjetosItem, {
  IProjetosFilterGroup
} from '../filtro-projetos-item/AccordionFiltroProjetosItem';
import styles from './AccordionFiltroProjetos.module.css';

export interface IAccordionFiltroProjetos {
  itens: IProjetosFilterGroup[];
}

const AccordionFiltroProjetos: React.FC<IAccordionFiltroProjetos> = ({
  itens
}) => {
  const [itemClicked, setItemClicked] = useState<number>(null);
  const { setActiveBanner } = useProjetos();

  const handleToggle = (index: number): void => {
    if (itemClicked === index) {
      setActiveBanner(0);
      return setItemClicked(null);
    }
    setItemClicked(index);
    setActiveBanner(index + 1);
  };

  return (
    <div className={styles.container}>
      {itens.map((item, index) => (
        <AccordionFiltroProjetosItem
          key={index}
          item={item}
          onToggle={() => handleToggle(index)}
          active={itemClicked === index}
        />
      ))}
    </div>
  );
};

export default AccordionFiltroProjetos;
