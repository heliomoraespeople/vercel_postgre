import { IChartEntry } from '../../../models/interfaces/ChartEntry';
import { CardProjetosPesquisaData } from '../../cards/card-projetos-pesquisa/CardProjetosPesquisa.data';
import montarGraficoPerYear from '../calculate-chart/generatePerYear';

const projetos = CardProjetosPesquisaData

const projectsPerYearChart: IChartEntry[] = montarGraficoPerYear(projetos, 'anoAprovacao');

export const ProjectsPerYearData = {
  projectsPerYearChart
};
