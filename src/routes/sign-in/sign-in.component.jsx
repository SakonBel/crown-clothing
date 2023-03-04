import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <h1>This is sign-in page.</h1>
    </div>
  );
};

export default SignIn;
