import { ComponentStory, ComponentMeta } from '@storybook/react';
import EtapasProcesso, { IEtapasProcesso } from './EtapasProcesso';
import { EtapasProcessoData } from './EtapasProcesso.data';

export default {
  title: 'structures/programas/EtapasProcesso',
  component: EtapasProcesso,
  argTypes: {},
  parameters: { layout: 'fullscreen' }
} as ComponentMeta<typeof EtapasProcesso>;

const Template: ComponentStory<typeof EtapasProcesso> = args => (
  <EtapasProcesso {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...EtapasProcessoData.experimentacao
} as IEtapasProcesso;
