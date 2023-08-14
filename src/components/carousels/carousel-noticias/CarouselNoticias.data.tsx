import CardArtigo, { ICardArtigo } from '../../cards/card-artigo/CardArtigo';
import { CardArtigoData } from '../../cards/card-artigo/CardArtigo.data';
import CarouselGroup from '../carousel-group/CarouselGroup';
import { CarouselGroupData } from '../carousel-group/CarouselGroup.data';

const { double, single  } = CarouselGroupData;

const files = [];
for (const index in CardArtigoData) {
  files.push(CardArtigoData[index]);
}

const mobile = {
  children: files.map((file: ICardArtigo, index: number) => (
    <CardArtigo
      abstract={file.abstract}
      title={file.title}
      imageFile={file.imageFile}
      key={index}
      priority={file.priority}
      link={file.link}
    />
  ))
};

const desktop = {
  children: [
    <CarouselGroup key={2}>{double.children}</CarouselGroup>,
    <CarouselGroup key={0}>{single.children}</CarouselGroup>
    // <CarouselGroup key={1}>{triple.children}</CarouselGroup>,
  ]
};

export const CarouselNoticiasData = {
  desktop,
  mobile
};
