import { ComponentStory, ComponentMeta } from '@storybook/react';
import BasePagination from './BasePagination';

export default {
  title: 'pagination/BasePagination',
  component: BasePagination,
  argTypes: {}
} as ComponentMeta<typeof BasePagination>;

const Template: ComponentStory<typeof BasePagination> = args => (
  <BasePagination {...args} />
);

export const Base = Template.bind({});
