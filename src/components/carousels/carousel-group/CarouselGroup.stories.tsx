import { ComponentStory, ComponentMeta } from '@storybook/react';
import CarouselGroup, { ICarouselGroup } from './CarouselGroup';
import { CarouselGroupData } from './CarouselGroup.data';

export default {
  title: 'carousel/CarouselGroup',
  component: CarouselGroup,
  argTypes: {}
} as ComponentMeta<typeof CarouselGroup>;

const Template: ComponentStory<typeof CarouselGroup> = args => (
  <CarouselGroup {...args} />
);

export const Single = Template.bind({});
Single.args = {
  ...CarouselGroupData.single
} as ICarouselGroup;

export const Double = Template.bind({});
Double.args = {
  ...CarouselGroupData.double
} as ICarouselGroup;

// export const Triple = Template.bind({});
// Triple.args = {
//   ...CarouselGroupData.triple
// } as ICarouselGroup;
