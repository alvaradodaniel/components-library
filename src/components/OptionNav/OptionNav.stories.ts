import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import OptionNav from './OptionNav';

const meta = {
    title: 'Example/OptionNav',
    component: OptionNav,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof OptionNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        imgSrc: 'https://images.vexels.com/media/users/3/134189/isolated/preview/b5ac9e439895b429ae3c44c368741aa5-silueta-estrella-16.png',
        text: "Classes",
    },
};