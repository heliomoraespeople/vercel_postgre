import { ComponentStory, ComponentMeta } from '@storybook/react';
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { PrimaryLayoutData } from './PrimaryLayout.data';

export default {
  title: 'layouts/PrimaryLayout',
  component: PrimaryLayout,
  argTypes: {},
  parameters: { layout: 'fullscreen' }
} as ComponentMeta<typeof PrimaryLayout>;

const Template: ComponentStory<typeof PrimaryLayout> = args => (
  <PrimaryLayout {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...PrimaryLayoutData.base
} as IPrimaryLayout;
