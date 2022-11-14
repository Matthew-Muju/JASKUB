// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBgfbw0Af2498HKFw6lNc9-sGLMAe3aXWE',
  authDomain: 'jaskub-53e1c.firebaseapp.com',
  databaseURL:
    'https://jaskub-53e1c-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'jaskub-53e1c',
  storageBucket: 'jaskub-53e1c.appspot.com',
  messagingSenderId: '843292974595',
  appId: '1:843292974595:web:088912b7c1a779c59af836',
  measurementId: 'G-G80M8XY2Z9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
