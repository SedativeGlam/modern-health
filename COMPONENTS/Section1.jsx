import React from "react";
import Navbar from "./Navbar";
import Accordion from "./Accordion";
import { motion } from "framer-motion";

export default function Section1() {
  return (
    <section className="bg-img">
      <div className="sec-1">
        <Navbar
          className="sec1-nav"
          logo="/ModernHealth-logo-white.svg"
        ></Navbar>

        <motion.div
          className="article-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <h1>The Global Standard in Mental Health</h1>
          <p className="Global-text">
            Modern Health delivers evidence-based, equitable mental health
            services worldwide — from self-guided tools to crisis care —
            ensuring our members have the right support wherever in the world
            they're located.
          </p>
          <Accordion className="sec1-accordion" iconColor="#00a3ff" />
        </motion.div>
      </div>
    </section>
  );
}
