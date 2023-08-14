import { ComponentStory, ComponentMeta } from '@storybook/react';
import SaberMais from './SaberMais';

export default {
  title: 'structures/areas-alvo/SaberMais',
  component: SaberMais,
  argTypes: {}
} as ComponentMeta<typeof SaberMais>;

const Template: ComponentStory<typeof SaberMais> = args => (
  <SaberMais {...args} />
);

export const Base = Template.bind({});
