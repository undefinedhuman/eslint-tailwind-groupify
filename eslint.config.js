module.exports = [
    {
        parserOptions: {
            ecmaVersion: 2018,
        },
        files: [ "**/*.vue" ],
        extends: ["eslint:recommended"],
        plugins: [
            "eslint-tailwind-groupify"
        ],
        rules: {
            "eslint-tailwind-groupify/sort": "warn",
        },
    }
]