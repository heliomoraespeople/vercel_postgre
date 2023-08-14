import { FC, MouseEventHandler, useEffect, useState } from 'react';
import styles from './FilterDrop.module.css';
import ArrowDown from '../../icons/arrows/ArrowDown';
import ArrowUp from '../../icons/arrows/ArrowUp';
import { checkboxType } from '../../inputs/checkbox-equipe-filter/CheckboxEquipeFilter';

export interface IFilterDrop {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  id: string;
  types?: checkboxType;
  otherType?: boolean;
  active?: boolean;
  itemClicked?: number;
}

const FilterDrop: FC<IFilterDrop> = ({
  label,
  id,
  active,
  onClick,
  types,
  otherType = true,
  itemClicked
}) => {
  const [style, setStyle] = useState('');
  const [arrowColor, setArrowColor] = useState('');

  useEffect(() => {
    if (otherType) {
      switch (types) {
        case 1:
          setStyle(styles.filterDropType1);
          setArrowColor('#4B4D4F');
          break;
        case 2:
          setStyle(styles.filterDropType2);
          setArrowColor('#F37021');
          break;
        case 3:
          setStyle(styles.filterDropType3);
          setArrowColor('#009FC2');

          break;
        case 4:
          setStyle(styles.filterDropType4);
          setArrowColor('#C2CD23');

          break;
        case 5:
          setStyle(styles.filterDropType5);
          setArrowColor('#74C7B8');

          break;
        default:
          setStyle(styles.filterDrop);
          setArrowColor('#4B4D4F');
      }
    }
  }, [otherType, types]);

  return (
    <button id={id} className={style} onClick={onClick}>
      <picture>
        {active && itemClicked === Number(id) ? (
          <ArrowDown color={arrowColor} />
        ) : (
          <ArrowUp color={arrowColor} />
        )}
      </picture>
      <p>{label}</p>
    </button>
  );
};

export default FilterDrop;
