import { ComponentStory, ComponentMeta } from '@storybook/react';
import TipoAreaAlvo, { ITipoAreaAlvo } from './TipoAreaAlvo';
import { TipoAreaAlvoData } from './TipoAreaAlvo.data';

export default {
  title: 'structures/areas-alvo/TipoAreaAlvo',
  component: TipoAreaAlvo,
  argTypes: {}
} as ComponentMeta<typeof TipoAreaAlvo>;

const Template: ComponentStory<typeof TipoAreaAlvo> = args => (
  <TipoAreaAlvo {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...TipoAreaAlvoData.coreBusiness
} as ITipoAreaAlvo;
