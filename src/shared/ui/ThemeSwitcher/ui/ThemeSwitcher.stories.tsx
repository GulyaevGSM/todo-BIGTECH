import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ui/ThemeSwitcher";

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeSwitcherLight: Story = {
    args: {

    },
};

export const ThemeSwitcherDark: Story = {
    args: {

    },
};

ThemeSwitcherDark.decorators = ThemeDecorator(Theme.DARK)