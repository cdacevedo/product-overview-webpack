const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
