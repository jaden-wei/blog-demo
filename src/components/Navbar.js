import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

function Navbar({ isAuth, setIsAuth }) {
  let nav = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then((result) => {
      localStorage.clear();
      setIsAuth(false);
      nav("/login");
    });
  };

  return (
    <div>
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/create">
          Create Post
        </Link>
        {!isAuth ? (
          <Link className="link" to="/login">
            Login
          </Link>
        ) : (
          <button onClick={handleSignOut}>Sign Out</button>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
