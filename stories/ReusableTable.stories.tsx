import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ReusableTableTypes, ReusableTable } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: ReusableTable,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<ReusableTableTypes> = args => <div {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
