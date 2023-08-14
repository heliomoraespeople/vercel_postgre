import { ComponentStory, ComponentMeta } from '@storybook/react';
import FaixaGradiente, { IFaixaGradiente } from './FaixaGradiente';

export default {
  title: 'separators/FaixaGradiente',
  component: FaixaGradiente,
  argTypes: {}
} as ComponentMeta<typeof FaixaGradiente>;

const Template: ComponentStory<typeof FaixaGradiente> = args => (
  <FaixaGradiente {...args} />
);

export const Horizontal = Template.bind({});

Horizontal.args = {
  direction: 'horizontal'
} as IFaixaGradiente;

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical'
} as IFaixaGradiente;
