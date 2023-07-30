const path = require('path')

module.exports = {
  entry: './themes/default/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
    library: {
      name: 'colorWheel',
      type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  }
  // optimization: {
  //   runtimeChunk: 'single'
  // }
}
