import { ComponentStory, ComponentMeta } from '@storybook/react';
import OqueFazemos from './OqueFazemos';

export default {
  title: 'structures/digital-labs/OqueFazemos',
  component: OqueFazemos,
  argTypes: {}
} as ComponentMeta<typeof OqueFazemos>;

const Template: ComponentStory<typeof OqueFazemos> = args => (
  <OqueFazemos {...args} />
);

export const Base = Template.bind({});
