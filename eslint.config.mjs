import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginI18next from "eslint-plugin-i18next";

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                __IS_DEV__: true, // Добавляем глобальные переменные здесь
            },
        }
    },
    {
        plugins: {
            i18next: pluginI18next,
        },
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            "no-unused-vars": ["warn", { "varsIgnorePattern": "^_", "argsIgnorePattern": "^_" }],
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'i18next/no-literal-string': 2,
            "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
            "object-curly-spacing": ["error", "always"],
            "react/jsx-wrap-multilines": [
                "error",
                {
                    "declaration": "parens",
                    "assignment": "parens",
                    "return": "parens",
                    "arrow": "parens",
                    "condition": "parens",
                    "logical": "parens",
                    "prop": "parens"
                }
            ]
        },
    }
];