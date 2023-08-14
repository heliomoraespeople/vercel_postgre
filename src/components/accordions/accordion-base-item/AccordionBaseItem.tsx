import { ReactNode, useRef } from 'react';
import IconMinus from '../../icons/accordion-controllers/IconMinus';
import IconPlus from '../../icons/accordion-controllers/IconPlus';
import styles from './AccordionBaseItem.module.css';

export interface IAccordionBaseItem {
  item: {
    title: string;
    content: ReactNode;
  };
  onToggle: () => void;
  active: boolean;
}

const AccordionBaseItem: React.FC<IAccordionBaseItem> = ({
  item,
  onToggle,
  active
}) => {
  const contentEl = useRef(null as unknown as HTMLDivElement);
  const wrapperHeight =
    active && contentEl?.current
      ? { height: contentEl?.current.scrollHeight }
      : { height: '0px' };

  const { title, content } = item;

  return (
    <li className={`${styles.container}`}>
      <button className={styles.button} onClick={onToggle}>
        <span>{title}</span>
        <span className={styles.control}>
          {active ? <IconMinus /> : <IconPlus />}
        </span>
      </button>
      <div
        ref={contentEl}
        style={wrapperHeight}
        className={`${styles.contentWrapper}`}
      >
        <div className={styles.content}>{content}</div>
      </div>
    </li>
  );
};

export default AccordionBaseItem;
