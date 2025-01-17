import React from "react";
import { motion } from "framer-motion";

export default function Section10() {
  return (
    <section className="section10-container">
      <motion.div
        className="section10-wrapper"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img src="/ModernHealth-icon-white.svg" alt="Modern Health Icon" />
        <h2>Ready for your workplace to thrive?</h2>
        <button>Talk to our team</button>
      </motion.div>
    </section>
  );
}
