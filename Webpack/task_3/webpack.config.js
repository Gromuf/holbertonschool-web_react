const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
  header: './modules/header/header.js',
  body: './modules/body/body.js',
  footer: './modules/footer/footer.js',
  }, 
  output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 8564,
    open: true,
    hot: true,
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
