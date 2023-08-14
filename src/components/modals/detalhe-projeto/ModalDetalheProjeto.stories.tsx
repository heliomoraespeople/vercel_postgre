import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModalDetalheProjeto from './ModalDetalheProjeto';

export default {
  title: 'modals/ModalDetalheProjeto',
  component: ModalDetalheProjeto,
  argTypes: {}
} as ComponentMeta<typeof ModalDetalheProjeto>;

const Template: ComponentStory<typeof ModalDetalheProjeto> = args => (
  <ModalDetalheProjeto {...args} />
);

export const Base = Template.bind({});
