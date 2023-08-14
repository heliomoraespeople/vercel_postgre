import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModalFiltroProjetos from './ModalFiltroProjetos';

export default {
  title: 'modals/ModalFiltroProjetos',
  component: ModalFiltroProjetos,
  argTypes: {}
} as ComponentMeta<typeof ModalFiltroProjetos>;

const Template: ComponentStory<typeof ModalFiltroProjetos> = args => (
  <ModalFiltroProjetos {...args} />
);

export const Base = Template.bind({});
