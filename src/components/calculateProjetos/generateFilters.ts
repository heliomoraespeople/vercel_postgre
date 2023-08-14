export interface IProjetosFilter {
  filterName: string;
  quantity: number;
  filterId: string;
}

export default function montarFiltrosPorPropriedade(projetos, propriedade): IProjetosFilter[] {
  const filtros: IProjetosFilter[] = [];

  projetos.forEach((projeto) => {
    const valorPropriedade = projeto[propriedade];
    const filtroExistente = filtros.find((filtro) => filtro.filterId === valorPropriedade);

    if (filtroExistente) {
      filtroExistente.quantity++;
    } else {
      const novoFiltro: IProjetosFilter = {
        filterName: valorPropriedade,
        quantity: 1,
        filterId: valorPropriedade
      };
      filtros.push(novoFiltro);
    }
  });

  filtros.sort((a, b) => {
    if (typeof a.filterName === 'string' && typeof b.filterName === 'string') {
      return b.filterName.localeCompare(a.filterName);
    }
    return 0;
  });

  return filtros;
}



