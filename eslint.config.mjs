import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist", "node_modules"],
  },

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
    },

    extends: [
      js.configs.recommended,
      reactPlugin.configs.flat.recommended,
    ],

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "react/react-in-jsx-scope": "off", // Not needed in modern React
      "react/prop-types": "off", // Optional if using TS or not using PropTypes
    },
  },
]);
