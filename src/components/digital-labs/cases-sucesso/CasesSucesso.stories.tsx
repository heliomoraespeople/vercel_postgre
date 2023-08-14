import { ComponentStory, ComponentMeta } from '@storybook/react';
import CasesSucesso from './CasesSucesso';

export default {
  title: 'structures/digital-labs/CasesSucesso',
  component: CasesSucesso,
  argTypes: {}
} as ComponentMeta<typeof CasesSucesso>;

const Template: ComponentStory<typeof CasesSucesso> = args => (
  <CasesSucesso {...args} />
);

export const Base = Template.bind({});
