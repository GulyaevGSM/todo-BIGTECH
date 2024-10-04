import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import SettingsPage from "@/pages/SettingsPage/ui/SettingsPage";

const meta = {
    title: 'pages/SettingsPage',
    component: SettingsPage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof SettingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SettingsPageLight: Story = {
    args: {

    },
};

export const SettingsPageDark: Story = {
    args: {

    },
};

SettingsPageDark.decorators = ThemeDecorator(Theme.DARK)