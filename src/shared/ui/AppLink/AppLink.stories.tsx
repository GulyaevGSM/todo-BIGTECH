import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        to: '/',
    },
    argTypes: {

    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLinkLight: Story = {
    args: {
        children: 'Text'
    },
};

export const AppLinkDark: Story = {
    args: {
        children: 'Text'
    },
};


AppLinkDark.decorators = ThemeDecorator(Theme.DARK)