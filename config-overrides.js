const path = require('path')

module.exports = function override (config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@store': path.resolve(__dirname, 'src/store')
    }
  }

  return config
}
