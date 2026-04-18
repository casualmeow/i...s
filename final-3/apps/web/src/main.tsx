import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRouter } from "./app/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
);
