import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccordionBase, { IAccordionBase } from './AccordionBase';
import { AccordionBaseData } from './AccordionBase.data';

export default {
  title: 'accordion/AccordionBase',
  component: AccordionBase,
  argTypes: {},
  parameters: { layout: 'centered' }
} as ComponentMeta<typeof AccordionBase>;

const Template: ComponentStory<typeof AccordionBase> = args => (
  <AccordionBase {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...AccordionBaseData.base
} as IAccordionBase;
