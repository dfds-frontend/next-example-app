const config = {
    "presets": [["next/babel"], ['@emotion/babel-preset-css-prop',
    {
      autoLabel: false,
    }],],
    "plugins": [
      ["emotion", { "inline": true }]
    ]
  }
  
  module.exports = config
  