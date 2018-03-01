'use strict';

module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.js?$/,
          use: {
            loader: 'prettier-loader',
            // additional options assigned to your options in
            // - .prettierrc,
            // - prettier.config.js,
            // - "prettier" property in package.json
            options: { /* prettier options */ },
          }
        }
      ]
    }
  };