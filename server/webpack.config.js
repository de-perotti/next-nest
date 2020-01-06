const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const fs = require("fs");
const assert = require("assert");
const _ = require("lodash");

const filterTruthy = _.unary(_.identity);

const ENVS = ["development", "staging", "production"];

module.exports = function(options) {
  assert(ENVS.includes(process.env.NODE_ENV));

  const [entry] = process.argv.reverse();
  const commands = fs
    .readdirSync(path.join(__dirname, "./cmd"))
    .map(c => c.replace(/\.ts/, ""));
  assert(
    commands.includes(entry),
    `${entry} not in commands ${JSON.stringify(commands)}`
  );

  return {
    ...options,
    entry: [
      process.env.NODE_ENV !== "production" && "webpack/hot/poll?100",
      path.join(__dirname, "cmd", entry + ".ts")
    ].filter(filterTruthy),
    watch:
      process.env.NODE_ENV !== "production" &&
      (process.argv.includes("--watch") || process.argv.includes(" -w ")),
    externals: [
      process.env.NODE_ENV !== "production" &&
        nodeExternals({
          whitelist: ["webpack/hot/poll?100"]
        })
    ].filter(filterTruthy),
    plugins: [
      ...options.plugins.filter(
        plugin =>
          !(
            plugin.constructor.name === "IgnorePlugin" &&
            process.env.NODE_ENV === "production"
          )
      ),
      process.env.NODE_ENV !== "production" &&
        new webpack.HotModuleReplacementPlugin()
    ].filter(filterTruthy),
    output: {
      path: path.join(__dirname, "dist"),
      filename: entry + ".js"
    },
    module: {
      ...options.module,
      rules: [
        ...options.module.rules,
        process.env.NODE_ENV === "production" && {
          type: "javascript/auto",
          test: /\.m?js$/
        }
      ].filter(filterTruthy)
    }
  };
};
