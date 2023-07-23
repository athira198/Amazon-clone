import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAMjp0vSwcQyrSYUg6bWrhmKnKwhmXyNws",
  authDomain: "challenge-1a02f.firebaseapp.com",
  projectId: "challenge-1a02f",
  storageBucket: "challenge-1a02f.appspot.com",
  messagingSenderId: "881239095908",
  appId: "1:881239095908:web:f6e32584811481fc627d71",
  measurementId: "G-LG73X3QB0F"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth};