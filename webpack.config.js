// const path = require('path');

// module.exports = {
//     entry: './public/index.js',
//     output: {
//         path: __dirname +'/public/build',
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [
//             {test: /\.pug$/, loader: 'pug-loader'}
//         ]
//     },
// };

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './public/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/build'),
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
