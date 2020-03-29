
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withTM = require('next-transpile-modules')(['@arbete/ui']);

module.exports = withPlugins([ [withTM], [withPWA, { pwa: { dest: 'public'} }] ], {
  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'src', 'components')
    config.resolve.alias['contexts'] = path.join(__dirname, 'src', 'contexts')
    config.resolve.alias['api'] = path.join(__dirname, 'src', 'api')
    return config;
  },
});