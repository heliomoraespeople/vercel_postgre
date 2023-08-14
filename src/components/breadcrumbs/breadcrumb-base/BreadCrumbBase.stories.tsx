import { ComponentStory, ComponentMeta } from '@storybook/react';
import BreadCrumbBase from './BreadCrumbBase';

export default {
  title: 'breadcrumbs/BreadCrumbBase',
  component: BreadCrumbBase,
  argTypes: {}
} as ComponentMeta<typeof BreadCrumbBase>;

const Template: ComponentStory<typeof BreadCrumbBase> = args => (
  <BreadCrumbBase {...args} />
);

export const Base = Template.bind({});
