import { ComponentStory, ComponentMeta } from '@storybook/react';
import Capa, { ICapa } from './Capa';
import { CapaData } from './Capa.data';

export default {
  title: 'templates/Capa',
  component: Capa,
  argTypes: {}
} as ComponentMeta<typeof Capa>;

const Template: ComponentStory<typeof Capa> = args => <Capa {...args} />;

export const ProgramasInovacao = Template.bind({});

ProgramasInovacao.args = {
  ...CapaData.programasInovacao
} as ICapa;
