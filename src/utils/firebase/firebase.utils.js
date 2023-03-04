import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.messsage);
    }
  }

  return userDocRef;
};
