"use client";

import Link from "next/link";
import { useState, createContext, useContext } from "react";

export const Context = createContext({ user: {} });

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
  const { user } = useContext(Context);

  const handleLogout = () => {
    alert("Logged out successfully");
  };

  return user.id ? (
    <button className="btn" onClick={handleLogout}>
      Logout
    </button>
  ) : (
    <Link href="/login">Login</Link>
  );
};

export const TodoButton = ({ id, completed }) => {
  const handleDelete = (id) => {
    alert(`Deleted ${id}`);
  };
  return (
    <>
      <input type="checkbox" checked={completed} />
      <button className="btn" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </>
  );
};
