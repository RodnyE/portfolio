
const { DIR, PORT, PUBLIC_DIR } = require('./config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  // main file
  entry: './src/index.js',
  mode: process.env.NODE_ENV, // production or development

  // main export file
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },

  // if start a dev server
  devServer: {
    port: PORT,
    hot: true,
    historyApiFallback: true
  },

  // html export
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './public/favicon.png',
    }),
  ],

  resolve: {
    // alias imports
    alias: {
      '@': DIR + '/src',

      // for program in mobile :')
      'eruda':
        dev ? 'eruda' : DIR + '/src/utils/__eruda-fake.js',
    },
    extensions: ['.*', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(jpg|png|pdf|svg|webp)$/i,
        type: 'asset',
      },
    ],
  },
};