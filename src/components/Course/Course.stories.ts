import type { Meta, StoryObj } from '@storybook/react';

import Course from './Course';

const meta = {
    title: 'Example/Course',
    component: Course,
    tags: ['autodocs'],
} satisfies Meta<typeof Course>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        imageSrc: "https://images.seeklogo.com/logo-png/44/1/next-js-logo-png_seeklogo-449824.png",
        title: "Next.js: Beginner",
        description: "Updated today",
    },
};