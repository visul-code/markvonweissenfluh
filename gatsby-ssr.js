import GlobalContextProvider from "./src/global/Context";

import React from "react";

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
);
