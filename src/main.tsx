import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DataProvider } from "./context/DataContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <DataProvider>
        <App />
      </DataProvider>
    </StrictMode>
  </BrowserRouter>
);
