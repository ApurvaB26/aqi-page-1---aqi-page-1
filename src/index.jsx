import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AqiPage } from "./screens/AqiPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <AqiPage />
  </StrictMode>,
);
