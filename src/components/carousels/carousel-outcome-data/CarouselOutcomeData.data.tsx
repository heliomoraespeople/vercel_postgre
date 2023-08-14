import { IOutcomeItem } from '../../generic/outcome-item/OutcomeItem';

const outcomeData: IOutcomeItem[] = [
  {
    imgSrc: '/projetos/outcome-data/investimentos.svg',
    title: 'R$ 22,6 MM',
    text: (
      <p>
        Investidos nos
        <br className="hidden lg:block" /> últimos 5 anos
      </p>
    )
  },
  {
    imgSrc: '/projetos/outcome-data/ideias.svg',
    title: '2200',
    text: (
      <p>
        Ideias <br className="hidden lg:block" /> analizadas
      </p>
    )
  },
  {
    imgSrc: '/projetos/outcome-data/projetos.svg',
    title: '580',
    text: (
      <p>
        Projetos <br className="hidden lg:block" />
        realizados
      </p>
    )
  },
  {
    imgSrc: '/projetos/outcome-data/retorno.svg',
    title: 'R$ 32,8 MM ',
    text: <p> De retorno devido aos projetos desenvolvidos</p>
  }
];

export const OutcomeDataData = {
  outcomeData
};
