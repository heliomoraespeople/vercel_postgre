import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccordionBaseItem, { IAccordionBaseItem } from './AccordionBaseItem';
import { AccordionBaseItemData } from './AccordionBaseItem.data';

export default {
  title: 'accordion/AccordionBaseItem',
  component: AccordionBaseItem,
  argTypes: {},
  parameters: { layout: 'fullscreen' }
} as ComponentMeta<typeof AccordionBaseItem>;

const Template: ComponentStory<typeof AccordionBaseItem> = args => (
  <AccordionBaseItem {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...AccordionBaseItemData.base
} as IAccordionBaseItem;
