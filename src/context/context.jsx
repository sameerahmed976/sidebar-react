import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();
const Context = ({ children }) => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        toggleHamburger,
        modal,
        setModal,
        setToggleHamburger,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useContextApp = () => {
  return useContext(AppContext);
};

export { Context, useContextApp };
