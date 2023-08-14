import { ReactNode } from 'react';
import styles from './CarouselGroup.module.css';

export interface ICarouselGroup {
  children: ReactNode[];
}

const CarouselGroup: React.FC<ICarouselGroup> = ({ children }) => {
  return (
    <div
      className={[
        styles.container,
        styles['container--' + children.length]
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default CarouselGroup;
