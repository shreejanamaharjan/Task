import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BooleanProvider } from "./context/Context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BooleanProvider>
      <App />
    </BooleanProvider>
  </StrictMode>
);
