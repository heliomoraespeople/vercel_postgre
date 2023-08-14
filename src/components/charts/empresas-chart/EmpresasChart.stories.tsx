import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IChartEntry } from '../../../models/interfaces/ChartEntry';
import EmpresasChart from './EmpresasChart';
import { EmpresasChartData } from './EmpresasChart.data';

export default {
  title: 'charts/EmpresasChart',
  component: EmpresasChart,
  argTypes: {}
} as ComponentMeta<typeof EmpresasChart>;

const Template: ComponentStory<typeof EmpresasChart> = args => (
  <EmpresasChart {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...EmpresasChartData.empresasChart
} as IChartEntry[];
