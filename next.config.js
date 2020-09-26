module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpg|jpeg|gif|png|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: 'static',
          publicPath: '_next/static',
        }
      }]
    })

    return config
  }
}
