import { ComponentStory, ComponentMeta } from '@storybook/react';
import CapaHome from './CapaHome';

export default {
  title: 'structures/home/CapaHome',
  component: CapaHome,
  argTypes: {}
} as ComponentMeta<typeof CapaHome>;

const Template: ComponentStory<typeof CapaHome> = args => (
  <CapaHome {...args} />
);

export const Base = Template.bind({});
