import { ComponentStory, ComponentMeta } from '@storybook/react';
import NossoProcesso from './NossoProcesso';

export default {
  title: 'structures/digital-labs/NossoProcesso',
  component: NossoProcesso,
  argTypes: {}
} as ComponentMeta<typeof NossoProcesso>;

const Template: ComponentStory<typeof NossoProcesso> = args => (
  <NossoProcesso {...args} />
);

export const Base = Template.bind({});
