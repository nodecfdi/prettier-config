import { type Config } from "prettier";
import configBase from "./base.js";

const configPkg: Config = {
  ...configBase,
  printWidth: 120,
};

export default configPkg;
