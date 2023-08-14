import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProjetosHome from './ProjetosHome';

export default {
  title: 'structures/home/ProjetosHome',
  component: ProjetosHome,
  argTypes: {}
} as ComponentMeta<typeof ProjetosHome>;

const Template: ComponentStory<typeof ProjetosHome> = args => (
  <ProjetosHome {...args} />
);

export const Base = Template.bind({});
