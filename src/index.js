import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { InstaFollow } from "./InstaFollow";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <InstaFollow />
    </MuiThemeProvider>
  </React.StrictMode>,
  rootElement
);
