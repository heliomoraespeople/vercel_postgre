import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccordionFiltroProjetos, {
  IAccordionFiltroProjetos
} from './AccordionFiltroProjetos';
import { AccordionFiltroProjetosData } from './AccordionFiltroProjetos.data';

export default {
  title: 'accordions/AccordionFiltroProjetos',
  component: AccordionFiltroProjetos,
  argTypes: {}
} as ComponentMeta<typeof AccordionFiltroProjetos>;

const Template: ComponentStory<typeof AccordionFiltroProjetos> = args => (
  <AccordionFiltroProjetos {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...AccordionFiltroProjetosData.base
} as IAccordionFiltroProjetos;
