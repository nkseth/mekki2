/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/order */
const webpack = require('webpack')
const optimizedImages = require('next-optimized-images')
const path = require('path')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([optimizedImages], {
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))

    // Config to have absolute imports instead of relative imports
    config.resolve.alias.components = path.join(__dirname, 'components')
    config.resolve.alias.static = path.join(__dirname, 'static')

    return config
  },
})

const withImages = require('next-images')

module.exports = withImages()
