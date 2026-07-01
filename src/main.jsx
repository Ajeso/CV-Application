import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Introduction from "./Introduction.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Introduction />
    <Experience />
    <Education />
    <Skills />
  </StrictMode>,
);
