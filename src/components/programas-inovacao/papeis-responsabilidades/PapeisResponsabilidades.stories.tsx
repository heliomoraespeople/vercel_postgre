import { ComponentStory, ComponentMeta } from '@storybook/react';
import PapeisResponsabilidades, {
  IPapeisResponsabilidades
} from './PapeisResponsabilidades';
import { ResponsabilidadesData } from './PapeisResponsabilidades.data';

export default {
  title: 'templates/BaseTemplate',
  component: PapeisResponsabilidades,
  argTypes: {}
} as ComponentMeta<typeof PapeisResponsabilidades>;

const Template: ComponentStory<typeof PapeisResponsabilidades> = args => (
  <PapeisResponsabilidades {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...ResponsabilidadesData.enova
} as IPapeisResponsabilidades;
