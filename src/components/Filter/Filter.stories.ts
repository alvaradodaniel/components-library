import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Filter from './Filter';

const meta = {
    title: 'Example/Filter',
    component: Filter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Technological',
        isActive: false,
    },
};

export const Active: Story = {
    args: {
        label: 'Technological',
        isActive: true,
    },
};

export const LongLabel: Story = {
    args: {
        label: 'Technological Innovation',
        isActive: false,
    },
};

export const ShortLabel: Story = {
    args: {
        label: 'Tech',
        isActive: false,
    },
};
