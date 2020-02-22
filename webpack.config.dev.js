const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 8000,
    contentBase: path.join(__dirname, 'dist'),
    // without this option, with react-router set, reloads on e.g. localhost:8000/home didn't work,
    // I could only load localhost:8000 and wait for redirects.
    historyApiFallback: true,
    compress: true
  }
};
