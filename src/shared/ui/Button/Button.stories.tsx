import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
    },
};

export const Clear: Story = {
    args: {
        children: 'Clear Button',
        theme: ButtonTheme.CLEAR
    }
}

export const Outlined: Story = {
    args: {
        children: "Outlined Button",
        theme: ButtonTheme.OUTLINE,
    }
}

export const OutlinedDark: Story = {
    args: {
        children: "Outlined Button",
        theme: ButtonTheme.OUTLINE,
    }
}

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]
