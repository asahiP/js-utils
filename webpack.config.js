module.exports = {
  entry: {
    main: './src/main.ts',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: __dirname,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
}
