import { IChartEntry } from '../../../models/interfaces/ChartEntry';
import { resultPercent } from '../calculate-chart/calculateRoundChart';

const programsChart: IChartEntry[] = [
  { name: 'Pré-projeto', value: resultPercent.preProjeto},
  { name: 'Experimentação', value: resultPercent.experimentacao },
  { name: 'Programa E-NOVA', value: resultPercent.enova },
  { name: 'P&D', value: resultPercent.pd}
];

const areasChart: IChartEntry[] = [
  { name: 'Transição e\r Digitalização\n do\r Core Business', value: 34 },
  { name: 'Ecossistema de\r Negócios', value: 26 },
  { name: 'Experiência de Fidelização\r do Cliente', value: 44 },
  { name: 'Organização\r Orientada a Dados', value: 22 },
  { name: 'Inovação\r Sustentável', value: 22 }
];

const statusChart: IChartEntry[] = [
  { name: 'Em andamento', value: resultPercent.andamento },
  { name: 'Concluido', value: resultPercent.concluido },
  { name: 'Em planejamento', value: resultPercent.planejamento }
];

export const RoundChartData = {
  programsChart,
  areasChart,
  statusChart
};
