# eslint-tailwind-groupify

Enhance the organization and readability of your Tailwind CSS utility classes with this custom ESLint rule set. 
This rule set not only sorts your utility classes vertically for improved clarity but also groups related 
classes together, making your stylesheets more structured and maintainable.

## Installation

```sh
npm install -D eslint @undefinedhuman/eslint-tailwind-groupify

yarn add -D eslint @undefinedhuman/eslint-tailwind-groupify
```

## Configuration

1. Add the plugin to your `.eslintrc.js` or `.eslintrc.json` configuration file:

```json
{
 "plugins": ["eslint-tailwind-groupify"],
 "rules": {
   "eslint-tailwind-groupify/sort": "warn",
   "eslint-tailwind-groupify/group": "warn"
 }
}
```

2. Customize the rule according to your preferences. You can configure optional sorting options by adding a `order` array to your ESLint configuration:

```json
{
  "plugins": ["eslint-tailwind-groupify"],
  "rules": {
    "eslint-tailwind-groupify/sort": [
      "warn",
      {
        "sortOrder": ["responsive", "hover", "focus", "active", "group-hover", "group-focus", "disabled"],
        "order": "asc"
      }
    ]
  }
}
```

## Usage

To run ESLint and apply the sorting rule:

```sh
npx eslint yourfile.vue

# or

yarn run eslint yourfile.vue
```

## Contributing

Contributions are welcome! If you find any issues or want to improve the rule set, feel free to open an issue or submit a merge request in the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).