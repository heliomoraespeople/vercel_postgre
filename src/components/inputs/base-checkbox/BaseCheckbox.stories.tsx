import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseCheckbox, { IBaseCheckbox } from './BaseCheckbox';
import { BaseCheckboxData } from './BaseCheckbox.data';

export default {
  title: 'inputs/BaseCheckbox',
  component: BaseCheckbox,
  argTypes: {}
} as ComponentMeta<typeof BaseCheckbox>;

const Template: ComponentStory<typeof BaseCheckbox> = args => (
  <BaseCheckbox {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...BaseCheckboxData.base
} as IBaseCheckbox;
