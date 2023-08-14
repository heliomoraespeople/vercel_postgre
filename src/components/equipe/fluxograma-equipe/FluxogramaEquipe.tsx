import { useEquipe } from '../../../context/EquipeContext';
import Responsabilidades from '../../../models/enums/Responsabilidades';
import ResponsabilidadesIDs from '../../../models/enums/ResponsabilidadesIDs';
import EquipeFilterItem from '../equipe-filter-item/EquipeFilterItem';
import { FluxogramaEquipeData } from './FluxogramaEquipe.data';
import styles from './FluxogramaEquipe.module.css';

const FluxogramaEquipe: React.FC = () => {
  const { resetFilters } = useEquipe();
  const { subFiltersCopr, subfilterCogi, subfilterCopi } = FluxogramaEquipeData;
  return (
    <div className={styles.container}>
      <div className={styles.resetFilter}>
        <button onClick={() => resetFilters()}>Limpar filtros</button>
      </div>
      <div className={styles.top}>
        <div className={`${styles.box} ${styles.box1}`}>
          <EquipeFilterItem
            label={Responsabilidades.DEIN}
            filterId={ResponsabilidadesIDs.DEIN}
            color="azulEscuro"
            className={styles.topic}
          />
          <div className={`${styles.line} ${styles.lineDark}`} />
        </div>

        <div className={`${styles.box} ${styles.box2}`}>
          <EquipeFilterItem
            label={Responsabilidades.COPR}
            filterId={ResponsabilidadesIDs.COPR}
            collapsible
            className={styles.topic}
            sidePadding={14}
            subFilters={subFiltersCopr}
          />
          <div className={`${styles.line} ${styles.lineDark}`} />
        </div>
      </div>
      <div className={styles.bottom}>
        {/* <div className={`${styles.box} ${styles.box3}`}>
          <EquipeFilterItem
            label={Responsabilidades.GEST}
            filterId={ResponsabilidadesIDs.GEST}
            color="laranja"
            className={styles.topic}
            sidePadding={28}
          />
          <div className={`${styles.line} ${styles.lineDark}`} />
        </div> */}
        <div className={`${styles.box} ${styles.box4}`}>
          <EquipeFilterItem
            label={Responsabilidades.GEIN}
            filterId={ResponsabilidadesIDs.GEIN}
            color="azulBase"
            className={styles.topic}
            sidePadding={28}
          />

          <div className={`${styles.line} ${styles.lineDark}`} />

          <div className={styles.boxGroup}>
            <div className={`${styles.box} ${styles.box10}`}>
              <EquipeFilterItem
                label={Responsabilidades.COPI}
                filterId={ResponsabilidadesIDs.COPI}
                className={styles.topic}
                sidePadding={8}
                collapsible
                subFilters={subfilterCopi}
              />
              <div className={`${styles.line} ${styles.lineLight}`} />
            </div>

            <div className={`${styles.box} ${styles.box11}`}>
              <EquipeFilterItem
                label={Responsabilidades.COGI}
                filterId={ResponsabilidadesIDs.COGI}
                className={styles.topic}
                sidePadding={8}
                collapsible
                subFilters={subfilterCogi}
              />
              <div className={`${styles.line} ${styles.lineLight}`} />
            </div>

            <div className={`${styles.box} ${styles.box12}`}>
              <EquipeFilterItem
                label={Responsabilidades.CanaisParcerias}
                filterId={ResponsabilidadesIDs.CanaisParcerias}
                className={styles.topic}
                sidePadding={16}
              />
              <div className={`${styles.line} ${styles.lineLight}`} />
            </div>
          </div>
        </div>
        <div className={`${styles.box} ${styles.box5}`}>
        <EquipeFilterItem
            label={Responsabilidades.GEST}
            filterId={ResponsabilidadesIDs.GEST}
            color="laranja"
            className={styles.topic}
            sidePadding={28}
          />
          <div className={`${styles.line} ${styles.lineDark}`} />
          {/* <EquipeFilterItem
            label={Responsabilidades.GENN}
            filterId={ResponsabilidadesIDs.GENN}
            color="verdeCitrico"
            className={styles.topic}
            sidePadding={18}
          />
          <div className={`${styles.line} ${styles.lineDark}`} /> */}
        </div>
        <div className={`${styles.box} ${styles.box6}`}>
          <EquipeFilterItem
            label={Responsabilidades.GETD}
            filterId={ResponsabilidadesIDs.GETD}
            color="verdeAgua"
            className={styles.topic}
            sidePadding={16}
          />
          <div className={`${styles.line} ${styles.lineDark}`} />
          <div className={styles.boxGroup}>
            <div className={`${styles.box} ${styles.box10}`}>
              <EquipeFilterItem
                label={Responsabilidades.COPD}
                filterId={ResponsabilidadesIDs.COPD}
                className={styles.topic}
                sidePadding={14}
              />
              <div className={`${styles.line} ${styles.lineGreen}`} />
            </div>

            <div className={`${styles.box} ${styles.box11}`}>
              <EquipeFilterItem
                label={Responsabilidades.COTD}
                filterId={ResponsabilidadesIDs.COTD}
                className={styles.topic}
                sidePadding={8}
              />
              <div className={`${styles.line} ${styles.lineGreen}`} />
            </div>

            <div className={`${styles.box} ${styles.box12}`}>
              <EquipeFilterItem
                label={Responsabilidades.CODS}
                filterId={ResponsabilidadesIDs.CODS}
                className={styles.topic}
                sidePadding={16}
              />
              <div className={`${styles.line} ${styles.lineGreen}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FluxogramaEquipe;
