import styles from './CarouselNoticias.module.css';
import CarouselBase from '../../carousels/carousel-base/CarouselBase';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import { CarouselNoticiasData } from './CarouselNoticias.data';

const CarouselNoticias: React.FC = () => {
  const windowSize = useWindowSize();
  return (
    <div className={`${styles.container} wrapper-geral`}>
      <div className="wrapper-carousel">
        <CarouselBase arrows={windowSize.width >= Breakpoints.sm + 5}>
          {windowSize.width >= Breakpoints.lg
            ? CarouselNoticiasData.desktop.children
            : CarouselNoticiasData.mobile.children}
        </CarouselBase>
      </div>
    </div>
  );
};

export default CarouselNoticias;
