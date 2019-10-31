const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
  [
    withTM,
    {
      transpileModules: ['@dfds-ui/react-components', '@dfds-ui/colors', '@dfds-ui/icons'],
      webpack: (config, options) => {
        const { isServer } = options
        // Fixes npm packages that depend on `fs` module
        config.node = {
          fs: 'empty',
        }
        return config
      },
    },
  ],
  [withBundleAnalyzer, {}],
])
