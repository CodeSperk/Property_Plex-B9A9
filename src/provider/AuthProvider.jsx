import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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

  //to logout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
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
    logOutUser
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
