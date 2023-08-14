import { IOutcomeItem } from './OutcomeItem';

const base: IOutcomeItem = {
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

export const OutcomeItemData = {
  base
};
