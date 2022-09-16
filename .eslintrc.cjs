const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "plugin:vue/vue3-recommended",
    /**
     * 继承 eslint-plugin-prettier 插件的规则
     * @link https://github.com/prettier/eslint-plugin-prettier
     */
    "plugin:prettier/recommended",
    /**
     * 继承 eslint-plugin-vue 插件的规则
     * @link https://eslint.vuejs.org/user-guide/#installation
     */
    "plugin:vue/recommended"
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
});