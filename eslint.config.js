import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { rules: {
    "semi" : ["error", "always"],
    "indent": ["error", 2],
    "eqeqeq": ["error", "always"],
    "camelcase" : ["error"],
    "no-redeclare": "error"
  }}
]);