import { ComponentStory, ComponentMeta } from '@storybook/react';
import OutcomeItem, { IOutcomeItem } from './OutcomeItem';
import { OutcomeItemData } from './OutcomeItem.data';

export default {
  title: 'generics/OutcomeItem',
  component: OutcomeItem,
  argTypes: {}
} as ComponentMeta<typeof OutcomeItem>;

const Template: ComponentStory<typeof OutcomeItem> = args => (
  <OutcomeItem {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...OutcomeItemData.base
} as IOutcomeItem;
