import CarouselGroup from '../carousel-group/CarouselGroup';
import { CarouselGroupData } from '../carousel-group/CarouselGroup.data';

const { double, single  } = CarouselGroupData;



const desktop = {
  children: [
    <CarouselGroup key={2}>{double.children}</CarouselGroup>,
    <CarouselGroup key={0}>{single.children}</CarouselGroup>
    // <CarouselGroup key={1}>{triple.children}</CarouselGroup>,
  ]
};

export const CarouselNoticiasData = {
  desktop,
};
