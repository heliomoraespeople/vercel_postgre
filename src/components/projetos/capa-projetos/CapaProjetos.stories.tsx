import { ComponentStory, ComponentMeta } from '@storybook/react';
import CapaProjetos from './CapaProjetos';

export default {
  title: 'structures/projetos/CapaProjetos',
  component: CapaProjetos,
  argTypes: {}
} as ComponentMeta<typeof CapaProjetos>;

const Template: ComponentStory<typeof CapaProjetos> = args => (
  <CapaProjetos {...args} />
);

export const Base = Template.bind({});
