const withImages = require('next-images');
const keys = require('./config/keys');

module.exports = withImages({
  env: {
    MONGO_URI: keys.mongoURI,
    FIREBASE_PROJECTID: keys.firebaseProjectId
  }
})