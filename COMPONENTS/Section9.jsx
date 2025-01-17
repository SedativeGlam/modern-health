import React from "react";
import MentalHealth from "./MentalHealth";
import { motion } from "framer-motion";

export default function Section9() {
  return (
    <section className="section9-container">
      <MentalHealth
        className="community-building"
        header1="Community building"
        header2="Destigmatizing mental health one conversation at a time."
        text="Join U.S. Surgeon General, Dr. Vivek Murthy, and Modern Health's Chief Community Health Advocate, Naomi Osaka for an intimate conversation about their mental health journeys and inner voice."
      ></MentalHealth>

      <motion.div
        className="community-img"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img src="/naomi.jpg" alt="Naomi" />
      </motion.div>
    </section>
  );
}
