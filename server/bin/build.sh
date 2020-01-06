yarn rimraf server/dist && \
yarn nest build --webpack --webpackPath server/webpack.config.js $1
