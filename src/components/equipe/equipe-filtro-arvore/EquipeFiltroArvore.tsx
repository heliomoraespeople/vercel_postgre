import { ReactElement, ReactNode, useState } from 'react';
import { FiltroEquipesData } from './EquipeFiltroArvore.data';
import styles from './EquipeFiltroArvore.module.css';
import CheckboxEquipeFilter, {
  checkboxType
} from '../../inputs/checkbox-equipe-filter/CheckboxEquipeFilter';
import FilterDrop from '../../buttons/filterdrop/FilterDrop';
import { useEquipe } from '../../../context/EquipeContext';
import Responsabilidades from '../../../models/enums/Responsabilidades';
import ResponsabilidadesIDs from '../../../models/enums/ResponsabilidadesIDs';

export interface IFilter {
  filterName: Responsabilidades;
  filterId: ResponsabilidadesIDs;
}

interface IEquipeFilter extends IFilter {
  subFilters?: IFilter[];
}

export interface IEquipeFilterGroup {
  groupName: Responsabilidades;
  filterId?: ResponsabilidadesIDs;
  filters: IEquipeFilter[];
}

const EquipeFiltroArvore: React.FC = () => {
  const { filters, handleSetFilter } = useEquipe();
  const {resetFilters} = useEquipe();
  const [itemClicked, setItemClicked] = useState<number>(null);
  const [itemClickedSubFilter, setItemClickedSubFilter] =
    useState<number>(null);

  const [active, setActive] = useState(false);
  const [activeSub, setActiveSub] = useState(false);

  const handleToggle = (index: number): void => {
    if (itemClicked === index) {
      setItemClicked(null);
      setActive(!active);
    }
    setItemClicked(index);
  };

  const handleToggleSubFilter = (index: number): void => {
    if (itemClickedSubFilter === index) {
      setItemClickedSubFilter(null);
      setActiveSub(!activeSub);
    }
    setItemClickedSubFilter(index);
  };

  const activeCheckbox = (filterName: string): boolean =>
    filters.responsibilidade.has(filterName);

  const handleChangeCheckbox = (filterName: ResponsabilidadesIDs): void => {
    resetFilters();
    handleSetFilter(filterName, activeCheckbox(filterName));
  };

  const data = FiltroEquipesData.base;

  const renderTreeSubSublevel = (
    subFilters: IFilter[],
    idx: number
  ): ReactElement =>
    subFilters?.length > 0 &&
    activeSub &&
    itemClickedSubFilter === idx && (
      <ul className={styles.subFilter}>
        {subFilters?.map((subfilter: IFilter, idx: number) => (
          <li className={styles.subFilterItem} key={idx}>
            <CheckboxEquipeFilter
              htmlFor={subfilter?.filterId}
              label={subfilter.filterName}
              checked={activeCheckbox(subfilter.filterId)}
              onChange={() => handleChangeCheckbox(subfilter.filterId)}
            />
          </li>
        ))}
      </ul>
    );

  const renderTreeSublevel = (
    filters: IEquipeFilter[],
    idx: number
  ): ReactElement =>
    filters?.length > 0 &&
    active &&
    itemClicked == idx && (
      <ul className={styles.subFilter}>
        {filters?.map((filter, idx) => (
          <li className={`${styles.firstLevelItem} `} key={idx}>
            {filter?.subFilters?.length > 0 ? (
              <FilterDrop
                id={`${idx}`}
                onClick={() => {
                  setActiveSub(true);
                  handleToggleSubFilter(idx);
                }}
                label={filter?.filterName}
                active={activeSub}
              />
            ) : (
              <CheckboxEquipeFilter
                htmlFor={filter?.filterId}
                label={filter?.filterName}
                checked={activeCheckbox(filter.filterId)}
                onChange={() => handleChangeCheckbox(filter.filterId)}
              />
            )}

            {renderTreeSubSublevel(filter.subFilters, idx)}
          </li>
        ))}
      </ul>
    );

  const renderTreeFilter = (): ReactNode =>
    data.map((filterGroup, idx: number) => (
      <li className={styles.filterItem} key={idx}>
        {filterGroup?.filters?.length > 0 ? (
          <FilterDrop
            id={`${idx}`}
            onClick={() => {
              setActive(true);
              handleToggle(idx);
            }}
            label={filterGroup?.groupName}
            types={(idx + 1) as checkboxType}
            active={active}
            itemClicked={itemClicked}
          />
        ) : (
          <CheckboxEquipeFilter
            htmlFor={filterGroup?.groupName}
            label={filterGroup?.groupName}
            onChange={() => handleChangeCheckbox(filterGroup.filterId)}
            checked={activeCheckbox(filterGroup.filterId)}
            checkTypes={(idx + 1) as checkboxType}
            otherType
          />
        )}
        {renderTreeSublevel(filterGroup.filters, idx)}
      </li>
    ));

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterTitle}>
        <CheckboxEquipeFilter
          htmlFor={ResponsabilidadesIDs.DEIN}
          label={Responsabilidades.DEIN}
          checked={activeCheckbox(ResponsabilidadesIDs.DEIN)}
          onChange={() => handleChangeCheckbox(ResponsabilidadesIDs.DEIN)}
          checkTypes={6}
          otherType
        />
      </div>
      <ul className={styles.filterEquipes}>{renderTreeFilter()}</ul>
    </div>
  );
};

export default EquipeFiltroArvore;
