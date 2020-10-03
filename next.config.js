const withImages = require('next-images');

module.exports = withImages({
  env: {
    MONGO_URI: 'mongodb://ben:admin1234@ds139037.mlab.com:39037/shopping-cart-template',
    secret: ''
  }
})