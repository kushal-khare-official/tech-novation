import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/auth-context";
import LoaderContextProvider from "./context/loader-context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <LoaderContextProvider>
          <App />
        </LoaderContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

registerServiceWorker();
