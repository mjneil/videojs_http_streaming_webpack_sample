module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      webworkify:'webworkify-webpack-dropin'
    }
  }
};
