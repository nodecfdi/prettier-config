import { type Config } from "prettier";

const configBase: Config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 100,
  proseWrap: "preserve",
  quoteProps: "consistent",
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
};

export default configBase;
