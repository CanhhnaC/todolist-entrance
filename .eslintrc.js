const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));

module.exports = {
  extends: ["react-app", "prettier", "plugin:sonarjs/recommended"],
  plugins: ["prettier", "sonarjs"],
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    "sonarjs/cognitive-complexity": "error",
    "sonarjs/no-identical-expressions": "error"
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: { "prettier/prettier": ["warn", prettierOptions] }
    }
  ]
};
