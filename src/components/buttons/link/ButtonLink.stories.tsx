import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonLink, { IButtonLink } from './ButtonLink';
import { ButtonLinkData } from './ButtonLink.data';

export default {
  title: 'buttons/ButtonLink',
  component: ButtonLink,
  argTypes: {}
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = args => (
  <ButtonLink {...args} />
);

export const Long = Template.bind({});

Long.args = {
  label: 'People Interactive Brasil'
} as IButtonLink;

export const Light = Template.bind({});
Light.args = {
  ...ButtonLinkData.base,
  color: 'branco'
} as IButtonLink;

export const Dark = Template.bind({});
Dark.args = {
  ...ButtonLinkData.base,
  color: 'cinza-100'
} as IButtonLink;
