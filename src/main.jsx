import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
);



/* 
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>


 */
