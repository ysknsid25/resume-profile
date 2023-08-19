import type { Meta, StoryObj } from '@storybook/react';

import { Grass } from "../components/atoms/Grass";

const meta = {
    title: 'Atoms/Grass',
    component: Grass,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Grass>;
export default meta;

type Story = StoryObj<typeof meta>;

export const None: Story = {
    args: {
        contributes: 0,
    },
};

export const Bit: Story = {
    args: {
        contributes: 3,
    },
};

export const Decent: Story = {
    args: {
        contributes: 6,
    },
};

export const Often: Story = {
    args: {
        contributes: 11,
    },
};

export const TooMany: Story = {
    args: {
        contributes: 20,
    },
};