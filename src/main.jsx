import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </Provider>
);



/* 
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>


 */
