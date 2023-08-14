import { ComponentStory, ComponentMeta } from '@storybook/react';
import FontsDemo, { IFontsDemo } from './FontsDemo';

export default {
  title: 'fonts/FontsDemo',
  component: FontsDemo,
  argTypes: {}
} as ComponentMeta<typeof FontsDemo>;

const Template: ComponentStory<typeof FontsDemo> = args => (
  <FontsDemo {...args} />
);

export const Base = Template.bind({});

Base.args = {
  sampleTextProp: 'Texto'
} as IFontsDemo;
