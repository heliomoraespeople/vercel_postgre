import { ComponentStory, ComponentMeta } from '@storybook/react';
import ParaQueServe from './ParaQueServe';

export default {
  title: 'structures/areas-alvo/ParaQueServe',
  component: ParaQueServe,
  argTypes: {}
} as ComponentMeta<typeof ParaQueServe>;

const Template: ComponentStory<typeof ParaQueServe> = args => (
  <ParaQueServe {...args} />
);

export const Base = Template.bind({});
