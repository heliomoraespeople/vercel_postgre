import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'templates/Header',
  component: Header,
  argTypes: {},
  parameters: { layout: 'fullscreen' }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => (
  <div
    style={{
      height: '150vh'
    }}
  >
    <Header {...args} />
  </div>
);

export const Base = Template.bind({});
