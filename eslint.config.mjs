import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import eslintComfigPrettier from "eslint-config-prettier";

export default [
  {
    plugins: {
      prettier: prettierPlugin
    }
  },
  pluginJs.configs.recommended,  
  { 
    languageOptions: {
      globals: {
        ...globals.browser        
      }
    }
  },  
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"],    
    rules: {
      ...eslintComfigPrettier.rules,
      "prettier/prettier": "error",      
      "no-var": "error",
      "semi": "error",
      "indent": "error",
      "no-multi-spaces": "error",
      "space-in-parens": "error",
      "no-multiple-empty-lines": "error",
      "prefer-const": "error",
      "no-use-before-define": "error",      
    }
  }
];