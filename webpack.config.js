module.exports = {
  entry: './index.js',
  output: {
    path: './build',
    filename: 'vue-props.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015'] }
      }
    ]
  },
  devtool: '#source-map'
}
