import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');

html {
  font-size: 18px;
}
* {
  margin:0;
  padding: 0;
  box-sizing:border-box;
}
body{
  background-color:#F0F2F5;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
