import React from "react";
import { useNavigate } from "react-router-dom";

import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div>
      <p>Sign in</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default Login;
