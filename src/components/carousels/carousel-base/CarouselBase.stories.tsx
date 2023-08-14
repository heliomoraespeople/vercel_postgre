import { ComponentStory, ComponentMeta } from '@storybook/react';
import CarouselBase, { ICarouselBase } from './CarouselBase';
import { CarouselBaseData } from './CarouselBase.data';

export default {
  title: 'carousel/CarouselBase',
  component: CarouselBase,
  argTypes: {}
} as ComponentMeta<typeof CarouselBase>;

const Template: ComponentStory<typeof CarouselBase> = args => (
  <div style={{ width: '80%', margin: '0 auto' }}>
    <CarouselBase {...args} />
  </div>
);

export const Base = Template.bind({});
Base.args = {
  ...CarouselBaseData.base
} as ICarouselBase;

export const WithRows = Template.bind({});
WithRows.args = {
  ...CarouselBaseData.withRows
} as ICarouselBase;

export const WithColumns = Template.bind({});
WithColumns.args = {
  ...CarouselBaseData.withColumns
} as ICarouselBase;

export const Autoplay = Template.bind({});
Autoplay.args = {
  ...CarouselBaseData.autoplay
} as ICarouselBase;
