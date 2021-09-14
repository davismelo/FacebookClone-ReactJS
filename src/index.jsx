import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family:'Helvetica'; 
  src:url('../public/fonts/Helvetica.ttf');
  font-weight: normal;
  font-style: normal;
}

html {
  font-size: 18px;
}
* {
  margin:0;
  padding: 0;
  box-sizing:border-box;
  font-family:'Helvetica';
}
body{
  background-color:#F0F2F5;
}
a{text-decoration:none;
&:hover {
  text-decoration:underline;
}}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
