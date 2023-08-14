import { ComponentStory, ComponentMeta } from '@storybook/react';
import QuaisSao from './QuaisSao';

export default {
  title: 'structures/areas-alvo/QuaisSao',
  component: QuaisSao,
  argTypes: {}
} as ComponentMeta<typeof QuaisSao>;

const Template: ComponentStory<typeof QuaisSao> = args => (
  <QuaisSao {...args} />
);

export const Base = Template.bind({});
