import { ComponentStory, ComponentMeta } from '@storybook/react';
import FuncoesDigitalLabs from './FuncoesDigitalLabs';

export default {
  title: 'structures/digital-labs/FuncoesDigitalLabs',
  component: FuncoesDigitalLabs,
  argTypes: {}
} as ComponentMeta<typeof FuncoesDigitalLabs>;

const Template: ComponentStory<typeof FuncoesDigitalLabs> = args => (
  <FuncoesDigitalLabs {...args} />
);

export const Base = Template.bind({});
