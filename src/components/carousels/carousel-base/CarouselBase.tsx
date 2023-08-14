import { ReactNode, useRef } from 'react';
import Slider from 'react-slick';
import IconArrow from '../../icons/arrow/IconArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import styles from './CarouselBase.module.css';

export interface ICarouselBase {
  children: ReactNode[];
  infinite?: boolean;
  arrows?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  rows?: number;
  slidesToShow?: number;
  slidesPerRow?: number;
  slidesToScroll?: number;
  responsive?: {
    breakpoint: number;
    settings: Record<string, unknown> | 'unslick';
  }[];
  variableWidth?: boolean;
  customArrows?: boolean;
  arrowSize?: 'sm' | 'md' | 'lg';
  dotsClass?: string;
}

const CarouselBase: React.FC<ICarouselBase> = ({
  children,
  infinite = true,
  arrows = true,
  autoplay = false,
  autoplaySpeed = 3000,
  dots = true,
  rows = 1,
  slidesToShow = 1,
  slidesPerRow = 1,
  slidesToScroll = 1,
  responsive,
  variableWidth = false,
  customArrows = false,
  arrowSize,
  dotsClass = 'slick-dots'
}) => {
  const sliderRef = useRef(null);
  const windowSize = useWindowSize();

  let internalArrowSize: 'sm' | 'md' | 'lg';

  if (windowSize.width >= Breakpoints.lg) {
    internalArrowSize = 'lg';
  } else if (windowSize.width >= Breakpoints.sm + 5) {
    internalArrowSize = 'md';
  } else {
    internalArrowSize = 'sm';
  }

  const settings = {
    prevArrow: (
      <button>
        <div className={styles.prevWrapper}>
          <IconArrow size={arrowSize || internalArrowSize} />
        </div>
      </button>
    ),
    nextArrow: (
      <button>
        <div className={styles.nextWrapper}>
          <IconArrow size={arrowSize || internalArrowSize} />
        </div>
      </button>
    ),
    infinite: infinite,
    arrows: arrows,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    dots: dots,
    rows: rows,
    slidesToShow: windowSize.width >= Breakpoints.sm + 5 ? slidesToShow : 1.03,
    slidesPerRow: slidesPerRow,
    slidesToScroll: slidesToScroll,
    responsive: responsive,
    variableWidth: variableWidth,
    dotsClass: dotsClass
  };

  const appendDotsSettings = {
    ...settings,
    appendDots: dots => (
      <div>
        <div className={styles.customPaging}>
          <button
            onClick={() => sliderRef?.current?.slickPrev()}
            className="rotate-180"
          >
            <IconArrow size={arrowSize || internalArrowSize} />
          </button>
          <ul> {dots} </ul>
          <button onClick={() => sliderRef?.current?.slickNext()}>
            <IconArrow size={arrowSize || internalArrowSize} />
          </button>
        </div>
      </div>
    )
  };

  const finalSettings = customArrows ? appendDotsSettings : settings;
  return (
    <Slider {...finalSettings} ref={sliderRef}>
      {children}
    </Slider>
  );
};

export default CarouselBase;
