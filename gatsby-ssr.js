import GlobalContextProvider from "./src/global/Context";
import GlobalStyle from "./src/global/GlobalStyle";

import React from "react";

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);
