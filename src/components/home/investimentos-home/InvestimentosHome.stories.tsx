import { ComponentStory, ComponentMeta } from '@storybook/react';
import InvestimentosHome from './InvestimentosHome';

export default {
  title: 'structures/home/InvestimentosHome',
  component: InvestimentosHome,
  argTypes: {}
} as ComponentMeta<typeof InvestimentosHome>;

const Template: ComponentStory<typeof InvestimentosHome> = args => (
  <InvestimentosHome {...args} />
);

export const Base = Template.bind({});
