import React from "react";
import ReactDOM from "react-dom";
import Sidenav from "./Sidenav";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4CAF50",
      dark: "#388E3C",
      light: "#C8E6C9",
    },
    secondary: {
      main: "#795548",
    },
    text: {
      primary: "#000000",
      secondary: "#C4C4C4",
      light: "#FFFFFF",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Sidenav />,
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
