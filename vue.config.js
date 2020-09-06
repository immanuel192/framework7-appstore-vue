/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',
  pwa: {
    workboxPluginMode: 'GenerateSW',
    manifestPath: 'manifest.json',
    workboxOptions: {

    },
  },
};
