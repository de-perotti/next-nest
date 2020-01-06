export NODE_ENV=development

yarn rimraf server/dist && \
yarn nest build --watch --webpack --webpackPath server/webpack.config.js $1
