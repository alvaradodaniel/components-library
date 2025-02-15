import type { Meta, StoryObj } from '@storybook/react';

import Lection from './Lection';

const meta = {
  title: 'Example/Lection',
  component: Lection,
  tags: ['autodocs'],
} satisfies Meta<typeof Lection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Introduction to Next.js',
    description: 'Learn the core concepts of Next.js',
  },
};