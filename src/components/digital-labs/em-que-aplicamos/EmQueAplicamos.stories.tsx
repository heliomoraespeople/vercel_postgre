import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmQueAplicamos from './EmQueAplicamos';

export default {
  title: 'structures/digital-labs/EmQueAplicamos',
  component: EmQueAplicamos,
  argTypes: {}
} as ComponentMeta<typeof EmQueAplicamos>;

const Template: ComponentStory<typeof EmQueAplicamos> = args => (
  <EmQueAplicamos {...args} />
);

export const Base = Template.bind({});
