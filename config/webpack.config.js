module.exports = {
  // An application entry point.
  entry: './src/index.tsx',

  // The output location for our built bundle.
  output: {
    path: __dirname + '/public',
    filename: 'build/app.js'
  },

  // Tell Webpack which types of extensions to support.
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devServer: {
    open: true,
    port: 8020,
  },

  // Tell Webpack that for .ts and .tsx files, it should use ts-loader
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  }
};
