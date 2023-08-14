import { ComponentStory, ComponentMeta } from '@storybook/react';
import FluxogramaEquipe from './FluxogramaEquipe';

export default {
  title: 'structures/equipe/FluxogramaEquipe',
  component: FluxogramaEquipe,
  argTypes: {}
} as ComponentMeta<typeof FluxogramaEquipe>;

const Template: ComponentStory<typeof FluxogramaEquipe> = args => (
  <FluxogramaEquipe {...args} />
);

export const Base = Template.bind({});
