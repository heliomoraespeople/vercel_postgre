import { Area, AreaChart, XAxis, YAxis } from 'recharts';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import { ProjectsPerYearData } from './ProjectsPerYear.data';
import styles from './ProjectsPerYear.module.css';

const twConfig = resolveConfig(tailwindConfig);
const { azulBase, cinza } = twConfig.theme.colors;

type DotProps = {
  cx?: number;
  cy?: number;
};

const Dot: React.FC<DotProps> = ({ cx, cy }) => {
  return (
    <circle
      r="1"
      type="monotone"
      strokeWidth={1}
      stroke={azulBase as string}
      fillOpacity="1"
      fill={azulBase as string}
      cx={cx && cx - 1}
      cy={cy}
    />
  );
};

const ProjectsPerYear: React.FC = () => {
  const { width } = useWindowSize();
  const isXl = width > Breakpoints.xl;
  const data = ProjectsPerYearData.projectsPerYearChart;
  const totalProjectsYearsValue = data.reduce((acc, cur) => acc + cur.value, 0);

  const HEIGHT = isXl ? 115 : 115;
  const WIDTH = isXl ? 325 : 250;
  const ANGLE = isXl ? 0 : -45;
  const TICKMARGIN = isXl ? 5 : 15;

  return (
    <div className={styles.container}>
      <p className={styles.graphTitle}>Projetos realizados no total dos anos</p>
      <div className={styles.graphWrapper}>
        <div className={styles.graphItem}>
          <div className={styles.graph}>
            <AreaChart
              margin={{ left: -45, top: 5, right: 20, bottom: 0 }}
              width={WIDTH}
              height={HEIGHT}
              data={data}
            >
              <XAxis
                dataKey="name"
                tickSize={4}
                interval={0}
                tick={true}
                axisLine={{ stroke: cinza[300], strokeWidth: 1 }}
                angle={ANGLE}
                tickMargin={TICKMARGIN}
              />
              <YAxis tick={false} domain={[0, 50]} />
              <Area
                dataKey="value"
                stroke={azulBase as string}
                fill="#009fc233"
                animationDuration={800}
                dot={<Dot />}
              />
            </AreaChart>
          </div>
          <div className="pt-16 ml-24 xl:ml-56">
            <p className={styles.graphText}>Total:</p>
            <p className={styles.number}>{totalProjectsYearsValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPerYear;
