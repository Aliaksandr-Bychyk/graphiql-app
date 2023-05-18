import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDJq8HEsGbwvpiCalD-He-9yfUZ0bGEp_A',
  authDomain: 'graphql-54534.firebaseapp.com',
  projectId: 'graphql-54534',
  storageBucket: 'graphql-54534.appspot.com',
  messagingSenderId: '418408547034',
  appId: '1:418408547034:web:344657f58b20d0af991be3',
  measurementId: 'G-0CQTZQDYF0',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
