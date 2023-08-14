import { ComponentStory, ComponentMeta } from '@storybook/react';
import CarouselOutcomeData from './CarouselOutcomeData';

export default {
  title: 'carousels/CarouselOutcomeData',
  component: CarouselOutcomeData,
  argTypes: {}
} as ComponentMeta<typeof CarouselOutcomeData>;

const Template: ComponentStory<typeof CarouselOutcomeData> = args => (
  <CarouselOutcomeData {...args} />
);

export const Base = Template.bind({});
