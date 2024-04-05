const path = require('path');

module.exports = {
  devServer: {
    port: 9000,
    watchFiles: path.join(__dirname, 'src'),
  },
};
