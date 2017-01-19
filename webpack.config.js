const path = require('path')

const PATHS = {
  entry: path.join(__dirname, '/src/index.js'),
  output: path.join(__dirname, '/public')
}

module.exports = {
  entry:  PATHS.entry,
  

  output: {
    path: PATHS.output,
    filename: 'bundle.js',
  },
  resolve: {
    root: __dirname,
    alias: {
      App: 'src/components/App.js',
      Score: 'src/components/Score.js',
      Cards: 'src/components/Cards.js',
      SubmitName: 'src/components/SubmitName.js',
      HighScore: 'src/components/HighScore.js'

    },
    extensions: ['','.js','.jsx']
  },

  devServer: {
    contentBase: PATHS.output,
    inline: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },

  plugins: [
  ],

  devtool: 'eval-source-map'
}
