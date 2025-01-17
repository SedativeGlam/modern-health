import React from "react";
import "./Section3.css";
import { motion } from "framer-motion";

export default function Section3() {
  return (
    <section className="sec3-container">
      <p>The world's top companies choose Modern Health</p>

      <motion.div
        className="logos-wrapper"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        style={{ display: "flex", gap: "70px" }}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} style={{ display: "flex", gap: "70px" }}>
            <img className="company-logo" src="./ancestry-logo.png" />
            <img className="pixar" src="./pixar-logo.png" />
            <img className="zappos" src="./ZapposLogo.png" />
            <img className="dennys" src="./dennys-logo.png" />
            <img className="company-logo" src="./DoorDash-logo.png" />
            <img className="company-logo" src="./logo-National-Beef.png" />
            <img className="company-logo" src="./netsmart-logo.png" />
            <img className="company-logo" src="./cox-health-logo.png" />
            <img className="company-logo" src="./electronic-arts-logo.png" />
            <img className="company-logo" src="./the-trade-desk-logo.png" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
