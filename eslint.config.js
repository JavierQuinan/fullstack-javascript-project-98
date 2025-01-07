import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
    {
        files: ["**/*.{js,ts,jsx,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
        },
        rules: {
            "no-console": "off",
        }
    }
];
