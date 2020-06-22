import React, { useEffect, useState } from "react";
import app from "./base.js";

// This will allow us to manage state in this file
export const AuthContext = React.createContext();

// Stores Auth status in useState
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Updates Auth state, runs only once
  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
