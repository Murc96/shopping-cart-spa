import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router.tsx";
import "@picocss/pico";
import { ShoppingCartProvider } from "./components/ShoopingCartProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <Router />
    </ShoppingCartProvider>
  </React.StrictMode>
);
