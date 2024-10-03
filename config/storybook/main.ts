import type { StorybookConfig } from "@storybook/react-webpack5";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import path from "path";

const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    webpackFinal: async ( config ) => {
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': path.resolve(__dirname, '../../src'),
        };

        config!.module!.rules = config!.module!.rules!.map((rule) => {
            // Проверяем, что правило — это объект типа RuleSetRule
            if (typeof rule === 'object' && rule !== null && 'test' in rule) {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }
            }

            return rule;
        });

        config!.module!.rules!.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        config.module!.rules!.push(buildCssLoader(true));

        return config;
    },
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic'
                }
            }
        }
    }),
};
export default config;
