const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


const isDevelopment = process.env.NODE_ENV !== 'production'
console.log('isDevelopment: ', isDevelopment)
const plugins = [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html') ,
      title: 'toolchain-boilerplate',
      favicon: 'public/favicon.ico',
      minify: true
    })
]

if(isDevelopment) {
  plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
  stats: {
    children: isDevelopment
  },
  mode: isDevelopment ? 'development' : 'production',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: require.resolve('babel-loader'),
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
            },
            {
                test: /\.s?[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
    ]
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8080,
    compress: true,
    open: true,
    hot: true
  },
  plugins: plugins
}
