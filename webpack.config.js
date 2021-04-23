const path = require('path')
const { node } = require('prop-types')

module.exports= {
    entry : './src/app/index.js',
    output: {
        path: path.resolve(__dirname, './src/public'),
        filename : 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }

}


