import { ReactNode, useState } from 'react';
import AccordionBaseItem from '../accordion-base-item/AccordionBaseItem';
import styles from './AccordionBase.module.css';

export interface IAccordionBase {
  itens: {
    title: string;
    content: ReactNode;
  }[];
}

const AccordionBase: React.FC<IAccordionBase> = ({ itens }) => {
  const [itemClicked, setItemClicked] = useState<number>(null);

  const handleToggle = (index: number): void => {
    if (itemClicked === index) {
      return setItemClicked(null);
    }
    setItemClicked(index);
  };

  return (
    <ul className={`${styles.container}`}>
      <div className={styles.title}>
        <p className="font-light">AINDA COM DÚVDAS?</p>
        <p className="font-bold">VEJA AS PERGUNTAS FREQUENTES</p>
      </div>
      {itens.map((item, index) => (
        <AccordionBaseItem
          key={index}
          item={item}
          onToggle={() => handleToggle(index)}
          active={itemClicked === index}
        />
      ))}
    </ul>
  );
};

export default AccordionBase;
