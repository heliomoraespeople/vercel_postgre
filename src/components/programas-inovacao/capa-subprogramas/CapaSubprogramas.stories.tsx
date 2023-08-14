import { ComponentStory, ComponentMeta } from '@storybook/react';
import CapaSubprogramas, {
  ICapaSubprogramas
} from './CapaSubprogramas';
import { CapaSubprogramasData } from './CapaSubprogramas.data';

export default {
  title: 'structures/programas/CapaSubprogramas',
  component: CapaSubprogramas,
  argTypes: {}
} as ComponentMeta<typeof CapaSubprogramas>;

const Template: ComponentStory<typeof CapaSubprogramas> = args => (
  <CapaSubprogramas {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...CapaSubprogramasData.base
} as ICapaSubprogramas;
