import { ICarouselBase } from './CarouselBase';
import { theme } from '../../../../tailwind.config';

const colors = Object.values(theme.colors);
colors.pop();

const slides = colors.map((color: string, index: number) => (
  <div key={index}>
    <div
      style={{
        backgroundColor: color,
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 4px',
        color: color === '#000' ? 'white' : 'black'
      }}
    >
      {color}
    </div>
  </div>
));

const base: ICarouselBase = {
  children: slides
};

const withRows: ICarouselBase = {
  ...base,
  rows: 2,
  slidesPerRow: 1
};

const withColumns: ICarouselBase = {
  ...base,
  slidesToShow: 2
};

const autoplay: ICarouselBase = {
  ...withColumns,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true
};

export const CarouselBaseData = {
  base,
  withRows,
  withColumns,
  autoplay
};
