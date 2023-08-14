import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccordionFiltroProjetosItem, {
  IAccordionFiltroProjetosItem
} from './AccordionFiltroProjetosItem';
import { AccordionFiltroProjetosItemData } from './AccordionFiltroProjetosItem.data';

export default {
  title: 'accordions/AccordionFiltroProjetosItem',
  component: AccordionFiltroProjetosItem,
  argTypes: {}
} as ComponentMeta<typeof AccordionFiltroProjetosItem>;

const Template: ComponentStory<typeof AccordionFiltroProjetosItem> = args => (
  <AccordionFiltroProjetosItem {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...AccordionFiltroProjetosItemData.base
} as IAccordionFiltroProjetosItem;
