import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";

//css
import "antd/dist/antd.css";

ReactDOM.render(
  <Auth0Provider
    domain="thanhtannguyen207.au.auth0.com"
    clientId="5NDbC1DNzo8ZSE6aIOYU3A4DNaZszTkR"
    redirectUri="http://localhost:3000"
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
