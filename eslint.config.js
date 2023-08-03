// eslint.config.js
"use strict";

// Import the ESLint plugin locally
const eslintTailwindGroupify = require("./index");
const vueESLintParser = require("vue-eslint-parser");

module.exports = {
    files: [ "**/*.vue" ],
    languageOptions: {
        parser: vueESLintParser
    },
    plugins: {
        "eslint-tailwind-groupify": eslintTailwindGroupify
    },
    rules: {
        "eslint-tailwind-groupify/sort": [
            "warn",
            {
                "order": [
                    "w",
                    "h"
                ]
            }
        ]
    }
}