const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Change this if your main file is different
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',  // You can configure Babel for JS files if necessary
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js'],  // Add 'jsx' or 'ts' if you're using React or TypeScript
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
