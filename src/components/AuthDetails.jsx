import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      }).catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <div className="user">

      {authUser ? (
        <>
          <p className="userName">Sign in as  <span className="email">{`${authUser.email}`}</span></p>
          <button className="btnSignOut" onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>No User</p>
      )}
    </div>
  );
};

export default AuthDetails;