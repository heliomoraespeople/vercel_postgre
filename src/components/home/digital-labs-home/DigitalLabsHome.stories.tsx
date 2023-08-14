import { ComponentStory, ComponentMeta } from '@storybook/react';
import DigitalLabsHome from './DigitalLabsHome';

export default {
  title: 'structures/home/DigitalLabsHome',
  component: DigitalLabsHome,
  argTypes: {}
} as ComponentMeta<typeof DigitalLabsHome>;

const Template: ComponentStory<typeof DigitalLabsHome> = args => (
  <DigitalLabsHome {...args} />
);

export const Base = Template.bind({});
