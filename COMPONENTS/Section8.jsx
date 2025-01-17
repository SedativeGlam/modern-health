import React from "react";
import MentalHealth from "./MentalHealth";
import { motion } from "framer-motion";

export default function Section8() {
  return (
    <section className="section8-container">
      <div className="section8-wrapper">
        <motion.div
          className="member-img"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src="/kima.jpg" alt="Kima" />
        </motion.div>

        <MentalHealth
          className="member-impact"
          header1="Member impact"
          header2="Getting mental health support for the family"
          text="“I sometimes think that we're a Modern Health family because each of us has a therapist. We also have a family therapist. It has meant a closer relationship with my wife, a deeper relationship with my daughter, and all of us loving each other more.”"
          name="Kima"
          rank="Modern Health Member"
        ></MentalHealth>
      </div>
    </section>
  );
}
