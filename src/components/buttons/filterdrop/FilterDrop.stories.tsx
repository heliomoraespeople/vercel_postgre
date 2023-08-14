import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterDrop from './FilterDrop';

export default {
  title: 'buttons/FilterDrop',
  component: FilterDrop,
  argTypes: {}
} as ComponentMeta<typeof FilterDrop>;

const Template: ComponentStory<typeof FilterDrop> = args => (
  <FilterDrop {...args} />
);

export const Long = Template.bind({});
