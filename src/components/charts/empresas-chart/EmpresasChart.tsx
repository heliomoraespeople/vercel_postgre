import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis
} from 'recharts';
import { IChartEntry } from '../../../models/interfaces/ChartEntry';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';
import styles from './EmpresasChart.module.css';
import { EmpresasChartData } from './EmpresasChart.data';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';

export interface ILineChart {
  data: IChartEntry[];
}

const twConfig = resolveConfig(tailwindConfig);
const { azulEscuro, azulBase, verde } = twConfig.theme.colors;
const COLORS = [
  '#1f5587',
  verde[400],
  '#4abea9',
  verde[700],
  azulBase,
  azulEscuro,
  '#00746d',
  '#0fbaac'
];

// const renderCustomLabel = ({ x, y, value, width, height }): ReactElement => {
//   const cx = x + width / 2;
//   const cy = y + height / 2;
//   return (
//     <text x={cx} y={cy} fill="#fff">
//       {value}
//     </text>
//   );
// };

const EmpresasChart: React.FC<ILineChart> = ({ data }) => {
  const { width } = useWindowSize();
  const dados = EmpresasChartData.empresasChart;
  const init = 0;
  const total = dados.reduce((acc, cur) => acc + cur.value, init);
  const isXl = width > Breakpoints.xl;
  const ANGLE = isXl ? 0 : -90;
  const OFFSET = isXl ? 10 : 25;

  const barChartMargin = isXl
    ? {
        top: 15,
        right: 30,
        left: 20,
        bottom: 25
      }
    : {
        top: 25,
        right: 0,
        left: 0,
        bottom: 25
      };

  const NameLabel = data => {
    if (data.name === '(re)energisa') {
      return '(re)e...';
    }
    return data.name;
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <span className={styles.title}>
          Projetos realizados em casa empresa do Grupo Energisa
        </span>
        <span className={`${styles.numbers} hidden xl:inline`}>
          {' '}
          | {total} Projetos no total
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={barChartMargin}>
          <XAxis tick={false} />
          <Bar dataKey="value">
            <LabelList className={styles.label} position={'top'} />
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length] as string}
              />
            ))}
            <LabelList
              className={styles.label}
              position={'bottom'}
              dataKey={NameLabel}
              angle={ANGLE}
              offset={OFFSET}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmpresasChart;
