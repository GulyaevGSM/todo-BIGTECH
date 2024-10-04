import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import CalendarPage from "@/pages/CalendarPage/ui/CalendarPage";

const meta = {
    title: 'pages/CalendarPage',
    component: CalendarPage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof CalendarPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarPageLight: Story = {
    args: {

    },
};

export const CalendarPageDark: Story = {
    args: {

    },
};

CalendarPageDark.decorators = ThemeDecorator(Theme.DARK)