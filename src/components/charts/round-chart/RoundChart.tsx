import styles from './RoundChart.module.css';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';
import { ReactElement, ReactNode } from 'react';
import { IChartEntry } from '../../../models/interfaces/ChartEntry';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';

export interface IRoundChart {
  data: IChartEntry[];
}

const twConfig = resolveConfig(tailwindConfig);
const RADIAN = Math.PI / 180;
const { azulEscuro, azulBase, verde } = twConfig.theme.colors;
const COLORS = [azulEscuro, azulBase, verde[700], verde[400], verde[100]];

const RoundChart: React.FC<IRoundChart> = ({ data }) => {
  const { width } = useWindowSize();

  const isXl = width > Breakpoints.xl;

  const STROKE_DASH_ARRAY = isXl ? '4,4' : '2,2';
  const X_GENERAL_MOD = isXl ? 2 : 0.8;
  const Y_GENERAL_MOD = isXl ? 0.8 : 1;
  const Y_LABEL_MOD = isXl ? 18 : 16;
  const INNER_RADIUS = isXl ? 50 : 40;
  const OUTER_RADIUS = isXl ? 90 : 70;
  const POSITIONX = isXl ? '50%' : '45%';

  const renderCustomizedLabel = (props): ReactElement => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      percent,
      payload,
      fill,
      outerRadius
    } = props;
    const radius = innerRadius + innerRadius * 1.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * X_GENERAL_MOD;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * Y_GENERAL_MOD;

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const lineSx = cx + (outerRadius - 15) * cos;
    const lineSy = cy + (outerRadius - 15) * sin;
    const lineMx = x;
    const lineMy = y - 9;
    const lineEx = lineMx + (cos >= 0 ? 1 : -1) * 60;
    const lineEy = lineMy;

    const renderText = (): ReactNode[] => {
      const name = payload.name;
      const thershold = isXl ? 40 : 20;
      if (name.length > thershold) {
        const splitChar = isXl ? '\n' : '\r';
        const names = name.split(splitChar).reverse();
        return names.map((name: string, index: number) => {
          const dy = isXl ? -16 * index : -12 * index;
          const yOffset = isXl ? 20 : 17;
          return (
            <tspan x={x} dy={dy} y={y - yOffset} key={index}>
              {name}
            </tspan>
          );
        });
      }
      return name;
    };

    return (
      <g className={styles.fadeIn}>
        {/* NOME */}
        <text
          x={x}
          y={y - Y_LABEL_MOD}
          fill={fill}
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          className={styles.label}
        >
          {renderText()}
        </text>

        {/* VALOR */}
        <text
          x={x}
          y={y}
          fill={fill}
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          className={styles.value}
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>

        {/* LINHA */}
        <path
          d={`M${lineSx},${lineSy}L${lineMx},${lineMy}L${lineEx},${lineEy}`}
          stroke={verde[100] as string}
          strokeDasharray={STROKE_DASH_ARRAY}
          fill="none"
        />
      </g>
    );
  };

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx={POSITIONX}
            cy="100%"
            innerRadius={INNER_RADIUS}
            outerRadius={OUTER_RADIUS}
            label={renderCustomizedLabel}
            labelLine={false}
            startAngle={180}
            endAngle={0}
            animationDuration={500}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length] as string}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoundChart;
