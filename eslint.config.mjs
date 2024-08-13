import globals from "globals";
import pluginJs from "@eslint/js";
import { jest } from "globals";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: {
      jest,
    },
  },
];
