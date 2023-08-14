import { IOutcomeItemSmall } from './OutcomeItemSmall';

const base: IOutcomeItemSmall = {
  imgSrc: '/projetos/outcome-data/projetos.svg',
  title: '580',
  text: (
    <p>
      Projetos
      <br className="hidden lg:block" />
      realizados
    </p>
  )
};

export const OutcomeItemSmallData = {
  base
};
