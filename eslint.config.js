module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
    },
    files: [ "**/*.vue" ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        "eslint-tailwind-groupify"
    ],
    rules: {
        "eslint-tailwind-groupify/sort": "warn",
    },
    root: true
}