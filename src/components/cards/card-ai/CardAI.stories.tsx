import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardAI, { ICardAI } from './CardAI';
import { CardAIData } from './CardAI.data';

export default {
  title: 'cards/CardAI',
  component: CardAI,
  argTypes: {}
} as ComponentMeta<typeof CardAI>;

const Template: ComponentStory<typeof CardAI> = args => <CardAI {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...CardAIData.artificialInteligence
} as ICardAI;

Base.args = {
  ...CardAIData.machineLearning
} as ICardAI;

Base.args = {
  ...CardAIData.deepLearning
} as ICardAI;
