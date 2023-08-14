import { ComponentStory, ComponentMeta } from '@storybook/react';
import NumberData, { INumberData } from './NumberData';
import { NumberDataData } from './NumberData.data';

export default {
  title: 'generics/NumberData',
  component: NumberData,
  argTypes: {}
} as ComponentMeta<typeof NumberData>;

const Template: ComponentStory<typeof NumberData> = args => (
  <NumberData {...args} />
);

export const EmAnalise = Template.bind({});
EmAnalise.args = {
  ...NumberDataData.emAnalise
} as INumberData;

export const Aprovados = Template.bind({});
Aprovados.args = {
  ...NumberDataData.aprovados
} as INumberData;

export const Investidos = Template.bind({});
Investidos.args = {
  ...NumberDataData.investidos
} as INumberData;

export const Presenca = Template.bind({});
Presenca.args = {
  ...NumberDataData.presenca
} as INumberData;
