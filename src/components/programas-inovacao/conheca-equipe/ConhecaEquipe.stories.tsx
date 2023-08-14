import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConhecaEquipe from './ConhecaEquipe';

export default {
  title: 'structures/programas/ConhecaEquipe',
  component: ConhecaEquipe,
  argTypes: {}
} as ComponentMeta<typeof ConhecaEquipe>;

const Template: ComponentStory<typeof ConhecaEquipe> = args => (
  <ConhecaEquipe {...args} />
);

export const Base = Template.bind({});
