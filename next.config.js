const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    optimizeImagesInDev: true
  }],
  {
    env: {
      MONGO_URI: 'mongodb://ben:admin1234@ds139037.mlab.com:39037/shopping-cart-template',
      secret: ''
    }
  }
]);