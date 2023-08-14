import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardSolido, { ICardSolido } from './CardSolido';
import { CardSolidoData } from './CardSolido.data';

export default {
  title: 'cards/CardSolido',
  component: CardSolido,
  argTypes: {}
} as ComponentMeta<typeof CardSolido>;

const Template: ComponentStory<typeof CardSolido> = args => (
  <CardSolido {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...CardSolidoData.programasInovacao
} as ICardSolido;

export const Light = Template.bind({});

Light.args = {
  ...CardSolidoData.programasInovacao,
  mode: 'light'
} as ICardSolido;
