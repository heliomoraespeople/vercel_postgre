import { ComponentStory, ComponentMeta } from '@storybook/react';
import NossosProgramas from './NossosProgramas';

export default {
  title: 'structures/programas/NossosProgramas',
  component: NossosProgramas,
  argTypes: {},
  parameters: { layout: 'fullscreen' }
} as ComponentMeta<typeof NossosProgramas>;

const Template: ComponentStory<typeof NossosProgramas> = args => (
  <NossosProgramas {...args} />
);

export const Base = Template.bind({});
