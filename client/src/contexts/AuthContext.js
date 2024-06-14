import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null); 

    useEffect(() => {
      checkLogin();
    }, []);

    async function checkLogin () {
      await axios("/protectedRoute").then((res) => { 
      if (res.status === 200) {
          setIsLoggedIn(true);
          setCurrentUser(res.data.user);
          console.log("✅ Login successful, setting loggedIn to true");
        }}).catch((err) => {
          setIsLoggedIn(false);
          setCurrentUser(null);
          console.log("❌ Login failed (" + err + ")");
        });
    };

    return (
      <AuthContext.Provider value={{ isLoggedIn, currentUser, checkLogin }}>
        {children}
      </AuthContext.Provider>
    );
};

export function useAuth(){
  const context = useContext(AuthContext);
 
  return context;
 }