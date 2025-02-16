import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

const meta = {
  title: 'Example/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: {
    options: ['Not completed', 'Completed'],
    defaultSelected: 0,
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Not completed', 'Completed'],
    defaultSelected: 0,
  },
};

export const CompletedSelected: Story = {
  args: {
    options: ['Not completed', 'Completed'],
    defaultSelected: 1,
  },
};
