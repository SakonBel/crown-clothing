import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGBz7Ges-x7ZJSZsAusDYnhw-5bUKCM7U",

  authDomain: "crown-clothing-8ee80.firebaseapp.com",

  projectId: "crown-clothing-8ee80",

  storageBucket: "crown-clothing-8ee80.appspot.com",

  messagingSenderId: "741369638567",

  appId: "1:741369638567:web:c339c1136e221458557582",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
