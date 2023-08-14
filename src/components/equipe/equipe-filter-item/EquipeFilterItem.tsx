import { useEquipe } from '../../../context/EquipeContext';
import Responsabilidades from '../../../models/enums/Responsabilidades';
import styles from './EquipeFilterItem.module.css';
import CheckboxEquipeFilter from '../../inputs/checkbox-equipe-filter/CheckboxEquipeFilter';
import ResponsabilidadesIDs from '../../../models/enums/ResponsabilidadesIDs';
import { IFilter } from '../equipe-filtro-arvore/EquipeFiltroArvore';

export interface IEquipeFilterItem {
  label: Responsabilidades;
  filterId: ResponsabilidadesIDs;
  color?: string;
  collapsible?: boolean;
  className?: string;
  sidePadding?: number;
  subFilters?: IFilter[];
}

const EquipeFilterItem: React.FC<IEquipeFilterItem> = ({
  label,
  filterId,
  color,
  collapsible,
  className,
  sidePadding = 0,
  subFilters
}) => {
  const {
    filters,
    handleSetFilter,
    resetFilters,
    activeFilterDropdown,
    setActiveFilterDropdown
  } = useEquipe();

  const active = filters.responsibilidade.has(filterId);
  const activeCheckbox = (filterName: ResponsabilidadesIDs): boolean =>
    filters.responsibilidade.has(filterName);
  const collapsed = label === activeFilterDropdown;

  const toggleCollapsed = (): void => {
    if (collapsed) {
      setActiveFilterDropdown(null);
    } else {
      setActiveFilterDropdown(label);
    }
  };

  const isCogiOrCopi =
    label === Responsabilidades.COPI || label == Responsabilidades.COGI;
  const subFilterVariation = isCogiOrCopi ? styles.variation : null;

  return (
    <>
      <div className={'relative inline-block ' + className}>
        <button
          style={{ paddingLeft: sidePadding, paddingRight: sidePadding }}
          className={`${styles.container} ${styles[color]} ${
            active && styles.active
          }`}
          onClick={() => {resetFilters(), handleSetFilter(filterId, active)}}
        >
          {label}
        </button>

        {collapsible && (
          <button
            className={[
              styles.collapisingButton,
              collapsed && styles.collapsedButton
            ].join(' ')}
            onClick={toggleCollapsed}
          ></button>
        )}

        {collapsed && (
          <div
            className={`${styles.subFiltersContainer} ${subFilterVariation}`}
          >
            {subFilters?.map((filter, idx) => (
              //TODO controle desativado deveria ser 'checked' via prop de Checkbox
              <CheckboxEquipeFilter
                key={idx}
                htmlFor={`${idx}`}
                label={filter?.filterName}
                checked={activeCheckbox(filter?.filterId)}
                onChange={() =>
                  {resetFilters(),
                  handleSetFilter(
                    filter?.filterId,
                    activeCheckbox(filter?.filterId)
                  )}
                }
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default EquipeFilterItem;
