import { Theme, ThemeProvider } from "@/app/providers/ThemeProvider";
import { StoryFn } from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => {
    const ThemedStory = (Story: StoryFn) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story/>
            </div>
        </ThemeProvider>
    );

    // Установка displayName для отладки
    ThemedStory.displayName = "ThemedStory";

    return ThemedStory;
};
