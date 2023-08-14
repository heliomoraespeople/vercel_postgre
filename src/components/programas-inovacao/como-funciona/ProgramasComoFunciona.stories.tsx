import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgramasComoFunciona from './ProgramasComoFunciona';

export default {
  title: 'structures/programas/ProgramasComoFunciona',
  component: ProgramasComoFunciona,
  argTypes: {}
} as ComponentMeta<typeof ProgramasComoFunciona>;

const Template: ComponentStory<typeof ProgramasComoFunciona> = args => (
  <ProgramasComoFunciona {...args} />
);

export const Base = Template.bind({});
