"use client";
import { createContext, useContext, useState } from "react";

export const Context = createContext(null);

const AuthContext = ({ children }) => {
  const [selectedFriend, setSelectedFriend] = useState([]);
  console.log(selectedFriend);
  return (
    <Context.Provider
      value={{
        selectedFriend,
        setSelectedFriend,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
