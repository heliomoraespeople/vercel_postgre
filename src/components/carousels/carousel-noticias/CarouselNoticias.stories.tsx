import { ComponentStory, ComponentMeta } from '@storybook/react';
import CarouselNoticias from './CarouselNoticias';
import { CarouselNoticiasData } from './CarouselNoticias.data';

export default {
  title: 'carousel/CarouselNoticias',
  component: CarouselNoticias,
  argTypes: {},
  parameters: { layout: 'fullscreen' }
} as ComponentMeta<typeof CarouselNoticias>;

const Template: ComponentStory<typeof CarouselNoticias> = args => (
  <CarouselNoticias {...args} />
);

export const Mobile = Template.bind({});
Mobile.args = {
  ...CarouselNoticiasData.mobile
};

export const Desktop = Template.bind({});
Desktop.args = {
  ...CarouselNoticiasData.desktop
};
