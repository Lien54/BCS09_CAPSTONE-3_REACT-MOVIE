import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// React-router-dom
import { BrowserRouter } from "react-router-dom";

// redux-toolkit
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);