import { IChartEntry } from "../../../models/interfaces/ChartEntry";

export default function quantidadePorEmpresa(projetos, propriedade): IChartEntry[] {
  const filtros: IChartEntry[] = [];

  projetos.forEach((projeto) => {
    const valorPropriedade = projeto[propriedade];
    const filtroExistente = filtros.find((filtro) => filtro.name === valorPropriedade);

    if (filtroExistente) {
      filtroExistente.value++;
    } else {
      const novoFiltro: IChartEntry = {
        name: valorPropriedade,
        value: 1,

      };
      filtros.push(novoFiltro);
    }
  });

  filtros.sort((a, b) => {
    if (typeof a.name === 'string' && typeof b.name === 'string') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return filtros;
}



