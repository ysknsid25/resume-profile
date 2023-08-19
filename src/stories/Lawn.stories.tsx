import type { Meta, StoryObj } from '@storybook/react';

import { Lawn } from "../components/organisms/Lawn";

const meta = {
    title: 'Organisms/Lawn',
    component: Lawn,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Lawn>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        contributesList: [6, 0, 15, 20, 2, 6, 2],
    },
};