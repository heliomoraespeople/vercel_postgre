import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonCTA, { IButtonCTA } from './ButtonCTA';
import { ButtonCTAData } from './ButtonCTA.data';

export default {
  title: 'buttons/ButtonCTA',
  component: ButtonCTA,
  argTypes: {},
  parameters: {}
} as ComponentMeta<typeof ButtonCTA>;

const Template: ComponentStory<typeof ButtonCTA> = args => (
  <ButtonCTA {...args} />
);

export const PrimaryB = Template.bind({});
PrimaryB.args = {
  ...ButtonCTAData.base,
  primary: true
} as IButtonCTA;

export const Secondary = Template.bind({});
Secondary.args = {
  ...ButtonCTAData.base
} as IButtonCTA;

export const Large = Template.bind({});
Large.args = {
  ...ButtonCTAData.base,
  size: 'lg'
} as IButtonCTA;

export const Medium = Template.bind({});
Medium.args = {
  ...ButtonCTAData.base,
  size: 'md'
} as IButtonCTA;

export const Small = Template.bind({});
Small.args = {
  ...ButtonCTAData.base,
  size: 'sm'
} as IButtonCTA;
