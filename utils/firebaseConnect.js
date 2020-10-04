import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import '@firebase/storage';
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const firebaseConfig = {
  apiKey: 'AIzaSyDa3dLC5Ao_svAAZTI01ntXok73A6oiYDA',
  authDomain: process.env.FIREBASE_PROJECTID+'.firebaseapp.com',
  databaseURL: `https://${process.env.FIREBASE_PROJECTID}.firebaseio.com`,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_PROJECTID+'.appspot.com',
  messagingSenderId: '547344388751',
};

// Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example
console.disableYellowBox = true;

try {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default firebase;