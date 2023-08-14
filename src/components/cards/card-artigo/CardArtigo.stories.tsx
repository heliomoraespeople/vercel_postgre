import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardArtigo, { ICardArtigo } from './CardArtigo';
import { CardArtigoData } from './CardArtigo.data';

export default {
  title: 'cards/CardArtigo',
  component: CardArtigo,
  argTypes: {}
} as ComponentMeta<typeof CardArtigo>;

const Template: ComponentStory<typeof CardArtigo> = args => (
  <CardArtigo {...args} />
);

// export const Squirrel = Template.bind({});
// Squirrel.args = {
//   ...CardArtigoData.squirrel
// } as ICardArtigo;

// export const Pencils = Template.bind({});
// Pencils.args = {
//   ...CardArtigoData.pencils
// } as ICardArtigo;

export const Dice = Template.bind({});
Dice.args = {
  ...CardArtigoData.dice
} as ICardArtigo;

export const Bull = Template.bind({});
Bull.args = {
  ...CardArtigoData.bull
} as ICardArtigo;

export const Sunset = Template.bind({});
Sunset.args = {
  ...CardArtigoData.sunset
} as ICardArtigo;
