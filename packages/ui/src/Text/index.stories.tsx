import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Text } from './';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    children: 'Text',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
  args: {
    name: 'large',
  },
};

export const LargeEmphasized: Story = {
  args: {
    name: 'large-em',
  },
};

export const h1: Story = {
  args: {
    name: 'h1',
  },
};

export const h1Emphasized: Story = {
  args: {
    name: 'h1-em',
  },
};

export const h2: Story = {
  args: {
    name: 'h1',
  },
};

export const h2Emphasized: Story = {
  args: {
    name: 'h2-em',
  },
};

export const h3: Story = {
  args: {
    name: 'h3',
  },
};

export const h3Emphasized: Story = {
  args: {
    name: 'h3-em',
  },
};

export const headline: Story = {
  args: {
    name: 'headline',
  },
};

export const headlineEmphasized: Story = {
  args: {
    name: 'headline-em',
  },
};

export const body: Story = {
  args: {
    name: 'body',
  },
};

export const bodyEmphasized: Story = {
  args: {
    name: 'body-em',
  },
};

export const callout: Story = {
  args: {
    name: 'callout',
  },
};

export const calloutEmphasized: Story = {
  args: {
    name: 'callout-em',
  },
};

export const subheadline: Story = {
  args: {
    name: 'subheadline',
  },
};

export const subheadlineEmphasized: Story = {
  args: {
    name: 'subheadline-em',
  },
};

export const footnote: Story = {
  args: {
    name: 'footnote',
  },
};

export const footnoteEmphasized: Story = {
  args: {
    name: 'footnote-em',
  },
};

export const caption1: Story = {
  args: {
    name: 'caption1',
  },
};

export const caption1Emphasized: Story = {
  args: {
    name: 'caption1-em',
  },
};

export const caption2: Story = {
  args: {
    name: 'caption2',
  },
};

export const caption2Emphasized: Story = {
  args: {
    name: 'caption2-em',
  },
};
