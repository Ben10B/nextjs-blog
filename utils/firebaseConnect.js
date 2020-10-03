import * as firebase from 'firebase';
// import * as firebaseAdmin from 'firebase-admin';
import 'firebase/auth';
import 'firebase/database';
import '@firebase/storage';
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const firebaseConfig = {
  apiKey: 'AIzaSyDa3dLC5Ao_svAAZTI01ntXok73A6oiYDA',
  authDomain: 'surprise-morgan.firebaseapp.com',
  databaseURL: 'https://surprise-morgan.firebaseio.com',
  projectId: 'surprise-morgan',
  storageBucket: 'surprise-morgan.appspot.com',
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