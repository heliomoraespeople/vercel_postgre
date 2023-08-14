import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import styles from './ModalFiltroProjetos.module.css';
import AccordionFiltroProjetos from '../../accordions/filtro-projetos/AccordionFiltroProjetos';
import { AccordionFiltroProjetosData } from '../../accordions/filtro-projetos/AccordionFiltroProjetos.data';
import Modal from 'react-modal';
import RoundChart from '../../charts/round-chart/RoundChart';
import { RoundChartData } from '../../charts/round-chart/RoundChart.data';
import { useProjetos } from '../../../context/ProjetosContext';
import EmpresasChart from '../../charts/empresas-chart/EmpresasChart';
import ProjectsPerYear from '../../charts/projects-per-year/ProjectsPerYear';
import { EmpresasChartData } from '../../charts/empresas-chart/EmpresasChart.data';

export interface IModalFiltroProjetos {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

Modal.setAppElement('#main');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '328px',
    height: '90vh',
    backgroundColor: '#F0F8FA',
    border: 'unset',
    borderRadius: 'unset',
    padding: '8px'
  },
  overlay: {
    zIndex: 1000
  }
};

const ModalFiltroProjetos: React.FC<IModalFiltroProjetos> = ({
  showModal,
  setShowModal
}) => {
  const closeModal = (): void => setShowModal(false);
  const [graphPadding, setGraphPadding] = useState<string>('');
  const [renderedBanner, setRenderedBanner] = useState<
    ReactElement | ReactElement[]
  >();

  const { activeBanner } = useProjetos();

  useEffect(() => {
    switch (activeBanner) {
      default:
      case 0:
        setGraphPadding('');
        setRenderedBanner(
          <div className={styles.banner}>
          <img src="/icon_portifolio.svg" alt="portifolio" />
          <p className={styles.contentTitle}>
            Portfólio de <br />
            <span>projetos de Inovação</span>
          </p>
          <img src="/icon_lampada.svg" alt="lampada" />
        </div>
        );
        break;
      case 1:
        setGraphPadding(styles.roundGraphWrapper);
        setRenderedBanner(<RoundChart data={RoundChartData.programsChart} />);
        break;
      case 5:
        setGraphPadding(styles.roundGraphWrapper);
        setRenderedBanner(<RoundChart data={RoundChartData.areasChart} />);
        break;
      case 2:
        setGraphPadding(styles.roundGraphWrapper);
        setRenderedBanner(<RoundChart data={RoundChartData.statusChart} />);
        break;
      case 4:
        setGraphPadding(styles.empresasGraphWrapper);
        setRenderedBanner(
          <EmpresasChart data={EmpresasChartData.empresasChart} />
        );
        break;
      case 3:
        setGraphPadding(styles.lineGraphWrapper);
        setRenderedBanner(<ProjectsPerYear />);
        break;
    }
  }, [activeBanner]);


  return (
    <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles}>
      <div className={styles.container}>
        <button className={styles.closeButton} onClick={closeModal}>
          <picture>
            <img alt="" src="/icons/close_blue.svg" />
          </picture>
        </button>
        <div className={[styles.bannerWrapper, graphPadding].join(' ')}>
          {renderedBanner}
        </div>
        <AccordionFiltroProjetos
          itens={AccordionFiltroProjetosData.base.itens}
        />
      </div>
    </Modal>
  );
};

export default ModalFiltroProjetos;
