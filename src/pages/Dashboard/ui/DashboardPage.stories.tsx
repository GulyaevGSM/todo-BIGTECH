import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import DashboardPage from "@/pages/Dashboard/ui/DashboardPage";

const meta = {
    title: 'pages/DashboardPage',
    component: DashboardPage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof DashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DashboardPageLight: Story = {
    args: {

    },
};

export const DashboardPageDark: Story = {
    args: {

    },
};

DashboardPageDark.decorators = ThemeDecorator(Theme.DARK)