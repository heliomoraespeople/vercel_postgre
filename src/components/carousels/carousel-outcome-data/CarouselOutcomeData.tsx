import { FC, useState } from 'react';
// import useWindowSize from '../../../hooks/useWindowSize';
// import Breakpoints from '../../../models/enums/Breakpoints';
// import OutcomeItem from '../../generic/outcome-item/OutcomeItem';
import ModalFiltroProjetos from '../../modals/filtro-projetos/ModalFiltroProjetos';
// import CarouselBase from '../carousel-base/CarouselBase';
// import { OutcomeDataData } from './CarouselOutcomeData.data';
import styles from './CarouselOutcomeData.module.css';
import { useProjetos } from '../../../context/ProjetosContext';

const CarouselOutcomeData: FC = () => {
  // const windowSize = useWindowSize();
  const [showModal, setShowModal] = useState<boolean>(false);

  const { resetFilters } = useProjetos();

  // const isMobile = windowSize.width >= Breakpoints.sm;
  // const isLandscape = windowSize.width >= Breakpoints.md;
  // const isTablet = windowSize.width >= Breakpoints.lg;

  // NOTE react-slick não implementou a prop 'mobileFrist' do slick, portanto não é possível configura-lo mobile first nativamente, fazendo-se necessário essa adaptação manual.

  // let settings = {
  //   arrows: false,
  //   autoplay: true,
  //   dots: false,
  //   variableWidth: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  // if (isMobile) settings = { ...settings, slidesToShow: 2, slidesToScroll: 2 };
  // if (isLandscape)
  //   settings = { ...settings, slidesToShow: 3, slidesToScroll: 3 };

  // const items = OutcomeDataData.outcomeData.map(item => (
  //   <OutcomeItem
  //     imgSrc={item.imgSrc}
  //     title={item.title}
  //     text={item.text}
  //     key={item.title}
  //   />
  // ));

  return (
    <div className={styles.container}>
      <ModalFiltroProjetos setShowModal={setShowModal} showModal={showModal} />
      <button className={styles.filtroIcon} onClick={() => setShowModal(true)}>
        <picture>
          <img alt="Filtros" src="/projetos/filtro.svg" />
        </picture>
        <p>Filtros</p>
      </button>
      <div className={styles.resetFilter}>
        <button onClick={() => resetFilters()}>Limpar filtros</button>
      </div>
      {/* <div className={styles.carouselWrapper}>
        {!isTablet ? <CarouselBase {...settings}>{items}</CarouselBase> : items}
      </div> */}
      <div className={styles.banner}>
        <img src="/icon_portifolio.svg" alt="portifolio" />
        <p className={styles.contentTitle}>
          Portfólio de <br />
          <span>projetos de Inovação</span>
        </p>
        <img src="/icon_lampada.svg" alt="lampada" />
      </div>
    </div>
  );
};

export default CarouselOutcomeData;
