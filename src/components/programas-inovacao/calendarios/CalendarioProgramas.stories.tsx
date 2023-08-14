import { ComponentStory, ComponentMeta } from '@storybook/react';
import CalendarioProgramas from './CalendarioProgramas';

export default {
  title: 'structures/programas/CalendarioProgramas',
  component: CalendarioProgramas,
  argTypes: {}
} as ComponentMeta<typeof CalendarioProgramas>;

const Template: ComponentStory<typeof CalendarioProgramas> = args => (
  <CalendarioProgramas {...args} />
);

export const Base = Template.bind({});
