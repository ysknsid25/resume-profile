import type { Meta, StoryObj } from '@storybook/react';

import { SpeechBubbleToolTip } from "../components/atoms/SpeechBubbleToolTip";

const meta = {
    title: 'Example/SpeechBubbleToolTip',
    component: SpeechBubbleToolTip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof SpeechBubbleToolTip>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: "tooltip-default",
        content: "This is a tooltip",
    },
};