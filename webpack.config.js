var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle-w.js'
  },
  // resolve: {
  //   alias: {
  //     'video.js': path.join(__dirname, 'node_modules/video.js')
  //   }
  // }
};
