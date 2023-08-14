import { Dispatch, SetStateAction } from 'react';
import styles from './ModalFiltroEquipes.module.css';
import Modal from 'react-modal';
import EquipeFiltroArvore from '../../equipe/equipe-filtro-arvore/EquipeFiltroArvore';
import Breakpoints from '../../../models/enums/Breakpoints';
import useWindowSize from '../../../hooks/useWindowSize';
import { useEquipe } from '../../../context/EquipeContext';

export interface IModalFiltroProjetos {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

Modal.setAppElement('#main');

const ModalFiltroProjetos: React.FC<IModalFiltroProjetos> = ({
  showModal,
  setShowModal
}) => {
  const closeModal = (): void => setShowModal(false);
  const windowSize = useWindowSize();
  const { resetFilters } = useEquipe();

  const isMobile = windowSize.width <= Breakpoints.sm;
  const isTablet = windowSize.width <= Breakpoints.lg;

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: (isMobile && '340px') || (isTablet && '400px'),
      height: '60vh',
      backgroundColor: '#F0F8FA',
      border: 'unset',
      borderRadius: 'unset',
      padding: '8px',
      maxWidth: '400px'
    },
    overlay: {
      backgroundColor: '#00000040',
      zIndex: 1000
    }
  };

  return (
    <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <picture className="flex">
            <img alt="Filtros" src="/equipe/filtro-mobile.svg" />
            <p className="pl-5">Filtros</p>
          </picture>
          <div className={styles.resetFilter}>
            <button onClick={() => resetFilters()}>Limpar filtros</button>
          </div>
        </div>

        <EquipeFiltroArvore />
      </div>
    </Modal>
  );
};

export default ModalFiltroProjetos;
