import { ComponentStory, ComponentMeta } from '@storybook/react';
import EquipeFiltroArvore from './EquipeFiltroArvore';
import { FiltroEquipesData } from './EquipeFiltroArvore.data';

export default {
  title: 'accordions/AccordionFiltroProjetosItem',
  component: EquipeFiltroArvore,
  argTypes: {}
} as ComponentMeta<typeof EquipeFiltroArvore>;

const Template: ComponentStory<typeof EquipeFiltroArvore> = args => (
  <EquipeFiltroArvore {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...FiltroEquipesData.base
} as any;
