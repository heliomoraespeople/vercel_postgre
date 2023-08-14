import { ComponentStory, ComponentMeta } from '@storybook/react';
import CadastrarIdeia from './CadastrarIdeia';

export default {
  title: 'templates/CadastrarIdeia',
  component: CadastrarIdeia,
  argTypes: {}
} as ComponentMeta<typeof CadastrarIdeia>;

const Template: ComponentStory<typeof CadastrarIdeia> = args => (
  <CadastrarIdeia {...args} />
);

export const Base = Template.bind({});
