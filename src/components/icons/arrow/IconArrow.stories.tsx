import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconArrow, { IIconArrow } from './IconArrow';

export default {
  title: 'icons/IconArrow',
  component: IconArrow,
  argTypes: {}
} as ComponentMeta<typeof IconArrow>;

const Template: ComponentStory<typeof IconArrow> = args => (
  <IconArrow {...args} />
);

export const Gray = Template.bind({});
Gray.args = {
  color: '#E0DDDC'
} as IIconArrow;

export const Orange = Template.bind({});
Orange.args = {
  color: '#F37021'
} as IIconArrow;

export const Small = Template.bind({});
Small.args = {
  size: 'sm'
} as IIconArrow;

export const Medium = Template.bind({});
Medium.args = {
  size: 'md'
} as IIconArrow;

export const Large = Template.bind({});
Large.args = {
  size: 'lg'
} as IIconArrow;
