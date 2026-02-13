const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    port: 8564,
    open: true,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'images',
            },
          },
          {
            loader: 'image-webpack-loader', 
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                  enabled: true,
              },
              pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
              },
              gifsicle: {
                  interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
};
