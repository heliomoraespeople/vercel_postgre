import Priorities from '../../../models/enums/CardPriorities';
import { ICardArtigo } from './CardArtigo';

// const squirrel: ICardArtigo = {
//   imageFile: '/mock/squirrel.jpg',
//   title: 'Título da notícia 1',
//   abstract:
//     'Ut volutpat dignissim nibh, id consectetur elit euismod et. donec ut luctus sapien. fusce risus dolor, imperdiet at tristique ac, posuere nec nibh. vivamus sit amet ipsum non elit vestibulum ullamcorper vel ac nisl.',
//   priority: Priorities.low
// };

// const pencils: ICardArtigo = {
//   imageFile: '/mock/pencils.jpg',
//   title: 'Título da notícia 3',
//   abstract:
//     'Ut volutpat dignissim nibh, id consectetur elit euismod et. donec ut luctus sapien. fusce risus dolor, imperdiet at tristique ac, posuere nec nibh. vivamus sit amet ipsum non elit vestibulum ullamcorper vel ac nisl.',
//   priority: Priorities.low
// };

//noticia 2
const dice: ICardArtigo = {
  imageFile: '/noticias/noticia2.jpg',
  title: 'Startups Verdes: Motores da Inovação Sustentável em Ação',
  abstract:
    'Explorando o papel das startups na busca por soluções ambientalmente responsáveis.',
  priority: Priorities.high,
  link: 'https://www.jornaldenegocios.pt/sustentabilidade/ambiental/detalhe/20230809-0844-startups-verdes-os-motores-da-inovacao-sustentavel'
};

//noticia 1
const bull: ICardArtigo = {
  imageFile: '/noticias/noticia1.jpg',
  title: 'Inovação: Escassez e Abundância impulsionam a mudança',
  abstract:
    'Explorando os desafios e oportunidades no cenário da inovação.',
  priority: Priorities.mid,
  link: 'https://economiasc.com/2023/08/07/escassez-e-abundancia-os-dois-lados-da-moeda-da-inovacao/'
};

//noticia 3
const sunset: ICardArtigo = {
  imageFile: '/noticias/noticia3.jpg',
  title: 'Prêmio Valor Inovação: Energisa é TOP 2 no setor elétrico',
  abstract:
    'Inovação marcante impulsiona o reconhecimento da Energisa no mercado elétrico',
  priority: Priorities.high,
  link: 'https://www.grupoenergisa.com.br/noticias/inovacao/energisa-e-reconhecida-como-uma-das-empresas-mais-inovadoras-do-setor-eletrico'
};

export const CardArtigoData = {
  // squirrel,
  // pencils,
  dice,
  bull,
  sunset
};
