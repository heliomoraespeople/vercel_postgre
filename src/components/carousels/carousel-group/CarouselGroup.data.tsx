import CardArtigo from '../../cards/card-artigo/CardArtigo';
import { CardArtigoData } from '../../cards/card-artigo/CardArtigo.data';
import { ICarouselGroup } from './CarouselGroup';

const { bull, dice, sunset } = CardArtigoData;

const double: ICarouselGroup = {
  children: [<CardArtigo {...bull} key={0} />, <CardArtigo {...dice} key={1} />]
};

const single: ICarouselGroup = {
  children: [<CardArtigo {...sunset} key={0} />]
};

// const triple: ICarouselGroup = {
//   children: [
//     <CardArtigo {...dice} key={0} />,
//     <CardArtigo {...pencils} key={1} />,
//     <CardArtigo {...squirrel} key={2} />
//   ]
// };
export const CarouselGroupData = {
  double,
  single
  // triple
};
