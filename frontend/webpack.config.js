import path from 'path'

export default {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.tsx')
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['tsx', 'jsx', 'ts', 'js']
  },
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  }
}
