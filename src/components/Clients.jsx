"use client";

import { useState, createContext } from "react";

const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const BtnLogout = () => {
  const handleLogout = () => {
    alert("Logged out successfully");
  };

  return (
    <button className="btn" onClick={handleLogout}>
      Logout
    </button>
  );
};
