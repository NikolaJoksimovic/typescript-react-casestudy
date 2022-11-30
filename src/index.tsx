import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ShoppingCartProvider } from "./contex/shoppingCartContex";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </Router>
  </React.StrictMode>
);
