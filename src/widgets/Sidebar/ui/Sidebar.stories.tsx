import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from "@/widgets/Sidebar";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSidebar: Story = {
    args: {

    },
};

export const DarkSidebar: Story = {
    args: {

    }
}

DarkSidebar.decorators = ThemeDecorator(Theme.DARK)