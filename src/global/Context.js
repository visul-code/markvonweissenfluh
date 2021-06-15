import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./Themes";
import GlobalStyle from "./GlobalStyle";

export const GlobalStateContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const switchTheme = (e) => {
    setTheme(e);
  };

  return (
    <GlobalStateContext.Provider
      value={{ switchTheme, theme, open, handleOpen }}
    >
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
