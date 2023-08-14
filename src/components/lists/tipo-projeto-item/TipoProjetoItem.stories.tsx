import { ComponentStory, ComponentMeta } from '@storybook/react';
import TipoProjetoItem, { ITipoProjetoItem } from './TipoProjetoItem';
import { TipoProjetoItemData } from './TipoProjetoItem.data';

export default {
  title: 'lists/TipoProjetoItem',
  component: TipoProjetoItem,
  argTypes: {}
} as ComponentMeta<typeof TipoProjetoItem>;

const Template: ComponentStory<typeof TipoProjetoItem> = args => (
  <TipoProjetoItem {...args} />
);

export const ProgramaEnova = Template.bind({});
ProgramaEnova.args = {
  ...TipoProjetoItemData.programaEnova
} as ITipoProjetoItem;

export const Experimentacao = Template.bind({});
Experimentacao.args = {
  ...TipoProjetoItemData.experimentacao
} as ITipoProjetoItem;

export const PreProjeto = Template.bind({});
PreProjeto.args = {
  ...TipoProjetoItemData.preProjeto
} as ITipoProjetoItem;

export const Pd = Template.bind({});
Pd.args = {
  ...TipoProjetoItemData.pd
} as ITipoProjetoItem;
