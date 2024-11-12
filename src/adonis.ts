import { type Config } from "prettier";
import configBase from "./base.js";

const configAdonis: Config = {
  ...configBase,
  plugins: ["prettier-edgejs"],
};

export default configAdonis;
