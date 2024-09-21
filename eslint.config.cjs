/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const globals = require("globals");
const pluginJs = require("@eslint/js");
const tseslint = require("typescript-eslint");
const pluginReact = require("eslint-plugin-react");

// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";

// export default [
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
//   // { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

module.exports = [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
