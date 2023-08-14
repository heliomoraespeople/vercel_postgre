import { ComponentStory, ComponentMeta } from '@storybook/react';
import LogoHeader, { ILogoHeader } from './LogoHeader';

export default {
  title: 'icons/LogoHeader',
  component: LogoHeader,
  argTypes: {}
} as ComponentMeta<typeof LogoHeader>;

const Template: ComponentStory<typeof LogoHeader> = args => (
  <LogoHeader {...args} />
);

export const Mobile = Template.bind({});
Mobile.args = {
  isLarge: true
} as ILogoHeader;

export const Desktop = Template.bind({});
Desktop.args = {
  isLarge: false
} as ILogoHeader;
