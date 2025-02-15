import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BooleanProvider } from "./context/Context.tsx";
import QueryProvider from "./context/QueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <BooleanProvider>
        <App />
      </BooleanProvider>
    </QueryProvider>
  </StrictMode>
);
