import { IChartEntry } from '../../../models/interfaces/ChartEntry';
import quantidadePorEmpresa from '../calculate-chart/calculateEmpresas';
import { CardProjetosPesquisaData } from '../../cards/card-projetos-pesquisa/CardProjetosPesquisa.data';

const projetos = CardProjetosPesquisaData;
const quantidadeEmpresas: IChartEntry[] = quantidadePorEmpresa(projetos, "empresaAplicada");

const empresasChart: IChartEntry[] = quantidadeEmpresas;

export const EmpresasChartData = {
  empresasChart
};
