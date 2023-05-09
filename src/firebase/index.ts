import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDJq8HEsGbwvpiCalD-He-9yfUZ0bGEp_A',
  authDomain: 'graphql-54534.firebaseapp.com',
  projectId: 'graphql-54534',
  storageBucket: 'graphql-54534.appspot.com',
  messagingSenderId: '418408547034',
  appId: '1:418408547034:web:344657f58b20d0af991be3',
  measurementId: 'G-0CQTZQDYF0',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function signUp(email: string, password: string) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

export async function signIn(email: string, password: string) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

export function logOut() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
}
