const path = require("path");

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const analyzeOutPath = path.resolve(process.cwd(), "./bundles");

module.exports = withPlugins([
  [
    withTM,
    {
      transpileModules: [
        "@dfds-ui/react-components",
        "@dfds-ui/colors",
        "@dfds-ui/icons"
      ],
      webpack: (config, options) => {
        const { isServer } = options;
        // Fixes npm packages that depend on `fs` module
        config.node = {
          fs: "empty"
        };

        config.module.rules.push({
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  fallback: 'file-loader',
                  publicPath: `/_next/static/chunks/fonts/`,
                  outputPath: `${isServer ? "../" : ""}static/chunks/fonts/`,
                  name: '[name]-[hash].[ext]'
                }
            },
          ],
        },
        {
            test: /\.(svg|ttf|eot)$/i,
            loader: 'file-loader?outputPath=static/'
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            loaders: [
                'file-loader?outputPath=static/',
                'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        })

        return config;
      }
    }
  ],
  [
    withBundleAnalyzer,
    {
      analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: path.resolve(analyzeOutPath, "server.html"),
          openAnalyzer: false
        },
        browser: {
          analyzerMode: "static",
          reportFilename: path.resolve(analyzeOutPath, "client.html"),
          openAnalyzer: false
        }
      }
    }
  ]
]);
