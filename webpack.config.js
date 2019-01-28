const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mainConfig = {
  entry: {
    index: './src/app.js',
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
  },
};

if (process.env.NODE_ENV === 'development') {
  mainConfig.devServer = { port: 8080 };
}

if (process.env.NODE_ENV === 'production') {
  mainConfig.plugins = [
    ...mainConfig.plugins,
    new CleanWebpackPlugin(['dist']),
    new webpack.HashedModuleIdsPlugin(),
  ];

  mainConfig.optimization = {
    runtimeChunk: 'single',
  };
}

module.exports = mainConfig;
