import { useRef, useState } from 'react';
import { useProjetos } from '../../../context/ProjetosContext';
import IconMinus from '../../icons/accordion-controllers/IconMinus';
import IconPlus from '../../icons/accordion-controllers/IconPlus';
import BaseCheckbox from '../../inputs/base-checkbox/BaseCheckbox';
import styles from './AccordionFiltroProjetosItem.module.css';

export interface IProjetosFilter {
  filterName: string;
  quantity: number;
  filterId: string;
}

export interface IProjetosFilterGroup {
  groupName: string;
  groupId: string;
  filters: IProjetosFilter[];
}

export interface IAccordionFiltroProjetosItem {
  item: IProjetosFilterGroup;
  onToggle: () => void;
  active: boolean;
}

const AccordionFiltroProjetosItem: React.FC<IAccordionFiltroProjetosItem> = ({
  item,
  onToggle,
  active
}) => {
  const [, setIsChecked] = useState<boolean>(false);
  const { setFilterParam, filterParam } = useProjetos();
  const contentEl = useRef(null as unknown as HTMLDivElement);
  const wrapperHeight =
    active && contentEl?.current
      ? { height: contentEl?.current.scrollHeight }
      : { height: '0px' };

  const { groupId, filters, groupName } = item;

  const handleClickSubFilter = (item: IProjetosFilter): void => {
    const filterValues = filterParam[groupId].activeFilters;
    if (filterValues.includes(item.filterId)) {
      const tempArray = filterValues;
      const index = tempArray.indexOf(item.filterId);
      tempArray.splice(index, 1);
      setFilterParam({
        ...filterParam,
        [groupId]: {
          ...filterParam[groupId],
          activeFilters: tempArray
        }
      });
      setIsChecked(false);
    } else {
      setFilterParam({
        ...filterParam,
        [groupId]: {
          ...filterParam[groupId],
          activeFilters: [...filterParam[groupId].activeFilters, item.filterId]
        }
      });
      setIsChecked(true);
    }
  };

  return (
    <li className={styles.container}>
      <button className={styles.button} onClick={onToggle}>
        <span>{groupName}</span>
        <span className={styles.control}>
          {active ? <IconMinus /> : <IconPlus />}
        </span>
      </button>
      <div
        ref={contentEl}
        style={wrapperHeight}
        className={`${styles.contentWrapper}`}
      >
        <div className={styles.content}>
          <ul>
            {filters.map((filter, index) => (
              <li key={index}>
                <BaseCheckbox
                  onChange={() => handleClickSubFilter(filter)}
                  value={`${filter.filterName} (${filter.quantity}) ${
                    Number(filter.filterName) < 2021 ? '*' : ''
                  } `}
                  isChecked={filterParam[item.groupId].activeFilters.includes(
                    filter.filterId
                  )}
                />
              </li>
            ))}
            {groupName === 'Ano de Aprovação' ? (
              <p>* Considerados somente projetos de P&D.</p>
            ) : (
              ''
            )}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default AccordionFiltroProjetosItem;
