import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import '@firebase/storage';
const keys = require('../config/keys');

const firebaseConfig = {
  apiKey: 'AIzaSyDa3dLC5Ao_svAAZTI01ntXok73A6oiYDA',
  authDomain: keys.FIREBASE_PROJECTID+'.firebaseapp.com',
  databaseURL: `https://${keys.FIREBASE_PROJECTID}.firebaseio.com`,
  projectId: keys.FIREBASE_PROJECTID,
  storageBucket: keys.FIREBASE_PROJECTID+'.appspot.com',
  messagingSenderId: '547344388751',
};

try {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default firebase;