import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // to create a new account with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //To login user with email & password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }

  // Github Login
  const githubLogin = () => {
    setLoading(true);
    const gitHubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, gitHubProvider);
  }

  //to logout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  // To update users Profile
  const updateUser = (updatedName, updatedUrl) => {
    return updateProfile(user, {
      displayName: updatedName, photoURL: updatedUrl 
    });
  }

  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    }
  });

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    githubLogin,
    logOutUser,
    updateUser
  };

  return (
      <AuthContext.Provider value={authInfo}>
          {children}
      </AuthContext.Provider>
  );
};


AuthProvider.propTypes={
  children:PropTypes.node
}
export default AuthProvider;
