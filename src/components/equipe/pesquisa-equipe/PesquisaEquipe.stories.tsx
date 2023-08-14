import { ComponentStory, ComponentMeta } from '@storybook/react';
import PesquisaEquipe from './PesquisaEquipe';

export default {
  title: 'structures/equipe/PesquisaEquipe',
  component: PesquisaEquipe,
  argTypes: {}
} as ComponentMeta<typeof PesquisaEquipe>;

const Template: ComponentStory<typeof PesquisaEquipe> = args => (
  <PesquisaEquipe {...args} />
);

export const Base = Template.bind({});
