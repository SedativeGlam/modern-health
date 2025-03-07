import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./COMPONENTS/Topnav.css";
import "./COMPONENTS/Navbar.css";
import "./COMPONENTS/NavAndFooterLinks.css";
import "./COMPONENTS/Button.css";
import "./COMPONENTS/Section1.css";
import "./COMPONENTS/Accordion.css";
import "./COMPONENTS/Section2.css";
import "./COMPONENTS/Section3.css";
import "./COMPONENTS/Slides.css";
import "./COMPONENTS/Section4.css";
import "./COMPONENTS/Section5.css";
import "./COMPONENTS/Section6.css";
import "./COMPONENTS/Section7.css";
import "./COMPONENTS/MentalHealth.css";
import "./COMPONENTS/Section8.css";
import "./COMPONENTS/Section9.css";
import "./COMPONENTS/Section10.css";
import "./COMPONENTS/Footer.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
