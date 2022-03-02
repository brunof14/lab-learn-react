import React from "react";
import ReactDOM from "react-dom";

import { UserContextProvider } from "./contexts/UserContext";
import { App } from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <GlobalStyles />
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
