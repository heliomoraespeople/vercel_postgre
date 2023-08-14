import { ComponentStory, ComponentMeta } from '@storybook/react';
import NossaEstrutura from './NossaEstrutura';

export default {
  title: 'structures/digital-labs/NossaEstrutura',
  component: NossaEstrutura,
  argTypes: {}
} as ComponentMeta<typeof NossaEstrutura>;

const Template: ComponentStory<typeof NossaEstrutura> = args => (
  <NossaEstrutura {...args} />
);

export const Base = Template.bind({});
