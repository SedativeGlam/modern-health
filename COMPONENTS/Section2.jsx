import React from "react";
import { motion } from "framer-motion";

export default function Section2() {
  const sec2Cards = [
    {
      value: 1,
      header: "Boost productivity and prevent burnout",
      text: "Equip your workforce with the mental resilience tools they need to combat burnout and maintain peak performance.",
    },

    {
      value: 2,
      header: "Optimize operational efficiency",
      text: "Optimize your organization's performance with our sustainable mental health model. We address long-term needs, reduce absenteeism, boost retention, and enhance operational efficiency—all while improving your bottom line.",
    },

    {
      value: 3,
      header: "Attract and retain top talent",
      text: "Elevate your employer brand and attract top-tier talent in a competitive marketplace by showcasing your commitment to employee well-being through comprehensive mental health support.",
    },
  ];

  return (
    <section className="approach-bg">
      <div className="sec2-container">
        <div className="sec2-flex">
          <h2>Solve your greatest business challenges with Modern Health</h2>
          <img src="./ModernHealth-icon.svg" />
        </div>

        <motion.div
          className="sec2-card-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          {sec2Cards.map((item, i) => (
            <motion.div
              className="sec2-card"
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <h4>{item.value}</h4>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
