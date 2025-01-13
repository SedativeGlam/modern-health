import React from "react";
import Navbar from "./Navbar";
import Accordion from "./Accordion";

export default function Section1() {
  return (
    <section className="bg-img">
      <div className="sec-1">
        <Navbar
          className="sec1-nav"
          logo="/ModernHealth-logo-white.svg"
        ></Navbar>

        <div className="article-1">
          <h1>The Global Standard in Mental Health</h1>
          <p className="Global-text">
            Modern Health delivers evidence-based, equitable mental health
            services worldwide — from self-guided tools to crisis care —
            ensuring our members have the right support wherever in the world
            they're located.
          </p>

          <Accordion className="sec1-accordion" iconColor="#00a3ff"></Accordion>
        </div>
      </div>
    </section>
  );
}
