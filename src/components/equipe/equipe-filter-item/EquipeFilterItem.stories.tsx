import { ComponentStory, ComponentMeta } from '@storybook/react';
import EquipeFilterItem from './EquipeFilterItem';

export default {
  title: 'generics/EquipeFilterItem',
  component: EquipeFilterItem,
  argTypes: {}
} as ComponentMeta<typeof EquipeFilterItem>;

const Template: ComponentStory<typeof EquipeFilterItem> = args => (
  <EquipeFilterItem {...args} />
);

export const Base = Template.bind({});
