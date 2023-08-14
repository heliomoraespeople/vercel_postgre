import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IChartEntry } from '../../../models/interfaces/ChartEntry';
import RoundChart from './RoundChart';
import { RoundChartData } from './RoundChart.data';

export default {
  title: 'charts/RoundChart',
  component: RoundChart,
  argTypes: {}
} as ComponentMeta<typeof RoundChart>;

const Template: ComponentStory<typeof RoundChart> = args => (
  <RoundChart {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...RoundChartData.areasChart
} as IChartEntry[];
