import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxEquipeFilter from './CheckboxEquipeFilter';

export default {
  title: 'generics/Checkbox',
  component: CheckboxEquipeFilter,
  argTypes: {}
} as ComponentMeta<typeof CheckboxEquipeFilter>;

const Template: ComponentStory<typeof CheckboxEquipeFilter> = args => (
  <CheckboxEquipeFilter {...args} />
);

export const Base = Template.bind({});
