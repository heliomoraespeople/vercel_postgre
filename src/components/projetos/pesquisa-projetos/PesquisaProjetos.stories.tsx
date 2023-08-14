import { ComponentStory, ComponentMeta } from '@storybook/react';
import PesquisaProjetos from './PesquisaProjetos';

export default {
  title: 'structures/projetos/PesquisaProjetos',
  component: PesquisaProjetos,
  argTypes: {}
} as ComponentMeta<typeof PesquisaProjetos>;

const Template: ComponentStory<typeof PesquisaProjetos> = args => (
  <PesquisaProjetos {...args} />
);

export const Base = Template.bind({});
