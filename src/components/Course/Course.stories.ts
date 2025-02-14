import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Course from './Course';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Button',
    component: Course,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    /* argTypes: {
        backgroundColor: { control: 'color' },
    }, */
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    /* args: { onClick: fn() }, */
} satisfies Meta<typeof Course>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        /*  primary: true, */
        imageSrc: "https://images.seeklogo.com/logo-png/44/1/next-js-logo-png_seeklogo-449824.png",
    title: "Next.js: Beginner",
    description: "Updated today",
    },
};

export const Secondary: Story = {
    args: {
        imageSrc: "https://images.seeklogo.com/logo-png/44/1/next-js-logo-png_seeklogo-449824.png",
    title: "Next.js: Beginner",
    description: "Updated today",
    },
};

export const Large: Story = {
    args: {
        /* size: 'large', */
        imageSrc: "https://images.seeklogo.com/logo-png/44/1/next-js-logo-png_seeklogo-449824.png",
    title: "Next.js: Beginner",
    description: "Updated today",
    },
};

export const Small: Story = {
    args: {
        /* size: 'small', */
        imageSrc: "https://images.seeklogo.com/logo-png/44/1/next-js-logo-png_seeklogo-449824.png",
    title: "Next.js: Beginner",
    description: "Updated today",
    },
};
