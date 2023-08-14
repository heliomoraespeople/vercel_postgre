import { ComponentStory, ComponentMeta } from '@storybook/react';
import OutcomeItemSmall, { IOutcomeItemSmall } from './OutcomeItemSmall';
import { OutcomeItemSmallData } from './OutcomeItemSmall.data';

export default {
  title: 'generics/OutcomeItem',
  component: OutcomeItemSmall,
  argTypes: {}
} as ComponentMeta<typeof OutcomeItemSmall>;

const Template: ComponentStory<typeof OutcomeItemSmall> = args => (
  <OutcomeItemSmall {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...OutcomeItemSmallData.base
} as IOutcomeItemSmall;
