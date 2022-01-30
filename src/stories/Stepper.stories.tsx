// YourComponent.stories.js
import { Story } from '@storybook/react';
import { Stepper } from 'components/Issue/Stepper';

// This default export determines where your story goes in the story list
export default {
  title: 'Stepper',
  component: Stepper,
};

const Template: Story = (args) => <Stepper {...args} />;

export const StepperStory = Template.bind({});

StepperStory.args = {};
