import Image from 'next/future/image';
import { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';
import { useProjetos } from '../../../context/ProjetosContext';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import StatusesProjeto from '../../../models/enums/StatusesProjeto';
import CarouselBase from '../../carousels/carousel-base/CarouselBase';
import styles from './ModalDetalheProjeto.module.css';
import router from 'next/router';

export interface IModalDetalheProjeto {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

Modal.setAppElement('#main');

const ModalDetalheProjeto: React.FC<IModalDetalheProjeto> = ({
  showModal,
  setShowModal
}) => {
  const { width } = useWindowSize();
  const { activeProjeto } = useProjetos();

  const {
    title,
    tipoPrograma,
    status,
    // areaAlvo,
    dono,
    gerente,
    anoAprovacao,
    empresaAplicada,
    descricao,
    investimento,
    anoImplementacao,
    capaImagesSrc
  } = activeProjeto;

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#F0F8FA',
      border: 'unset',
      borderRadius: 'unset',
      padding: '0',
      zIndex: 2000
    }
  };

  const formattedNumber = investimento !== 0
  ? `R$${Number(investimento).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  : 'R$ -';

  const tempCapaImgSrc = capaImagesSrc?.length && capaImagesSrc[0];
  const closeModal = (): void => {
    setShowModal(false);
    router.push({
      query: {}
    });
  };

  return (
    <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles}>
      <div className={styles.container}>
        <div className={styles.bg} />
        <button className={styles.closeButton} onClick={closeModal}>
          <picture>
            <img alt="" src="/icons/close_white.svg" />
          </picture>
        </button>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.carouselArea}>
          <div className={styles.imageWrapper}>
            {capaImagesSrc?.length > 1 ? (
              <CarouselBase
                customArrows={width >= Breakpoints.lg}
                arrowSize="md"
                arrows={false}
                autoplay
                dotsClass="slick-dots slick-dots--projetos"
              >
                {capaImagesSrc.map(image => (
                  <div className={styles.imageWrapper} key={image}>
                    <Image src={image} alt={title} fill />
                  </div>
                ))}
              </CarouselBase>
            ) : (
              <Image src={tempCapaImgSrc} alt={title} fill />
            )}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.infoPrincipal}>
            <div>
              <p className={styles.infoSubtitle}>Tipo de programa:</p>
              <p>{tipoPrograma}</p>
            </div>
            <div>
              <p className={styles.infoSubtitle}>Status:</p>
              <p>{StatusesProjeto[status]}</p>
            </div>
            <div>
              <p className={styles.infoSubtitle}>Investimento:</p>
              <p>{formattedNumber}</p>
            </div>
            {/* <div className={styles.areaAlvo}>
              <p className={styles.infoSubtitle}>Área Alvo de Inovação</p>
              <p>{areaAlvo}</p>
            </div> */}
          </div>
          <div className={styles.infoComplementar}>
            <div>
              <p className={styles.infoSubtitle}>Dono do Projeto:</p>
              <p>{dono}</p>
            </div>
            <div>
              <p className={styles.infoSubtitle}>Gerente do Projeto:</p>
              <p>{gerente}</p>
            </div>
            <div>
              <p className={styles.infoSubtitle}>Ano de Aprovação</p>
              <p>{anoAprovacao}</p>
            </div>
            <div>
              <p className={styles.infoSubtitle}>Ano de Implementação</p>
              <p>{anoImplementacao}</p>
            </div>
            <div className={styles.fullColumn}>
              <p className={styles.infoSubtitle}>Empresa:</p>
              <p>Empresa {empresaAplicada}</p>
            </div>
            <div className={styles.fullColumn}>
              <p className={styles.infoSubtitle}>Descrição:</p>
              <p>{descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetalheProjeto;
