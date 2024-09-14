// https://docs.expo.dev/guides/using-eslint/
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: { browser: true, es2022: true, es2021: true, node: true },
  extends: [
    "expo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "unused-imports",
    "import",
    "react-native",
    "react-refresh",
  ],
  rules: {
    "no-unused-vars": ["warn", { vars: "all", args: "none" }],
    "spaced-comment": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-imports-ts": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "no-empty": "off",
    "@typescript-eslint/rule-name": "off",
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "warn",
    "react/display-name": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "no-anonymous-default-export": "off",
    camelcase: "off",
    "dot-notation": "warn",
    "@typescript-eslint/camelcase": ["off"],
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "no-console": ["warn", { allow: ["info", "error"] }],
    "@typescript-eslint/ban-ts-comment": "warn",
    "prettier/prettier": "error",
    "prefer-const": [
      "warn",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "import/order": [
      "warn",
      {
        "newlines-between": "always", // Ensures a newline between different groups of imports
        groups: [
          "builtin", // Built-in Node.js modules
          "external", // External packages
          "internal", // Internal modules within your project
          "parent", // Parent directories of the current module
          "sibling", // Sibling modules in the same directory
          "index", // Index file of the current directory
        ],
        pathGroups: [
          // Define additional groupings if needed
        ],
        pathGroupsExcludedImportTypes: [], // Exclude certain import types from path grouping
        alphabetize: { order: "asc" }, // Alphabetically order imports within each group
      },
    ],
  },
};
