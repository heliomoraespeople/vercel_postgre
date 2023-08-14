import { ComponentStory, ComponentMeta } from '@storybook/react';
import InteligenciaArtificial from './InteligenciaArtificial';

export default {
  title: 'structures/digital-labs/InteligenciaArtificial',
  component: InteligenciaArtificial,
  argTypes: {}
} as ComponentMeta<typeof InteligenciaArtificial>;

const Template: ComponentStory<typeof InteligenciaArtificial> = args => (
  <InteligenciaArtificial {...args} />
);

export const Base = Template.bind({});
