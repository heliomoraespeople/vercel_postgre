import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProjectsPerYear from './ProjectsPerYear';

export default {
  title: 'charts/ProjectsPerYear',
  component: ProjectsPerYear,
  argTypes: {}
} as ComponentMeta<typeof ProjectsPerYear>;

const Template: ComponentStory<typeof ProjectsPerYear> = args => (
  <ProjectsPerYear {...args} />
);

export const Base = Template.bind({});
