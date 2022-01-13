import { join, resolve } from 'path'
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseDir = resolve(__dirname)
const HtmlWebPackPlugin = require('html-webpack-plugin')

import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}
const htmlPlugin = new HtmlWebPackPlugin({
  filename: './index.html',
  template: './static/index.html',
})
const dev = process.env.NODE_ENV === 'development'
export const config: Configuration = {
  devServer: {
    compress: true,
    contentBase: join(baseDir, 'dist/src'),
    hot: false,
    liveReload: false,
    port: 4010,
  },
  entry: resolve(baseDir, 'src', 'index.tsx'),
  mode: dev ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: { loader: 'ts-loader' },
      },
      {
        loader: 'file-loader',
        options: {
          esModule: false,
          name: 'assets/images/[name].[ext]',
        },
        test: /\.(png|jpg|gif|ico|svg)$/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: { loader: 'url-loader?limit=100000' },
      },
      {
        exclude: /node_modules/,
        test: /\.ttf$/,
        use: { loader: 'file-loader?name=assets/fonts/[name].[ext]' },
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: resolve(baseDir, 'dist/src'),
    publicPath: '/',
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  plugins: [htmlPlugin, new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['src', 'node_modules', 'jest-config'],
  },
}

export default config
