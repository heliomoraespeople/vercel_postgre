import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardCases, { ICardCases } from './CardCases';
import { CardCasesData } from './CardCases.data';

export default {
  title: 'cards/CardCases',
  component: CardCases,
  argTypes: {}
} as ComponentMeta<typeof CardCases>;

const Template: ComponentStory<typeof CardCases> = args => (
  <CardCases {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...CardCasesData.inspecoes
} as ICardCases;

Base.args = {
  ...CardCasesData.itemDiverso
} as ICardCases;
