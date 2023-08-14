import { ComponentStory, ComponentMeta } from '@storybook/react';
import IProjeto from '../../../models/interfaces/Projeto';
import CardProjetosPesquisa from './CardProjetosPesquisa';
import { CardProjetosPesquisaData } from './CardProjetosPesquisa.data';

export default {
  title: 'cards/CardProjetosPesquisa',
  component: CardProjetosPesquisa,
  argTypes: {}
} as ComponentMeta<typeof CardProjetosPesquisa>;

const Template: ComponentStory<typeof CardProjetosPesquisa> = args => (
  <CardProjetosPesquisa {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...CardProjetosPesquisaData.base
} as IProjeto;
