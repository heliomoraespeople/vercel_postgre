import { ComponentStory, ComponentMeta } from '@storybook/react';
import TiposProjetosLista from './TiposProjetosLista';

export default {
  title: 'structures/programas/programas/TiposProjetos',
  component: TiposProjetosLista,
  argTypes: {}
} as ComponentMeta<typeof TiposProjetosLista>;

const Template: ComponentStory<typeof TiposProjetosLista> = args => (
  <TiposProjetosLista {...args} />
);

export const Base = Template.bind({});
