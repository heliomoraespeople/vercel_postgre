import { IAccordionFiltroProjetosItem } from './AccordionFiltroProjetosItem';

const base: IAccordionFiltroProjetosItem = {
  item: {
    groupName: 'Programas de Inovação',
    groupId: 'tipoPrograma',
    filters: [
      { filterName: 'Programa E-nova', quantity: 34, filterId: 'enova' },
      {
        filterName: 'Experimentação',
        quantity: 26,
        filterId: 'experimentacao'
      },
      { filterName: 'Pré-Projeto', quantity: 44, filterId: 'preprojeto' },
      { filterName: 'P&D', quantity: 22, filterId: 'pd' }
    ]
  },
  onToggle: null,
  active: false
};

export const AccordionFiltroProjetosItemData = {
  base
};
