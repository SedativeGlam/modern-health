import React from "react";
import Navbar from "./Navbar";
import Accordion from "./Accordion";

export default function Section1() {
  return (
    <div className="bg-img">
      <div className="sec-1">
        <Navbar
          logo="./ModernHealth-logo-white.svg"
          BgColor="transparent"
          navLinkColor="white"
          userColor="white"
          dropDLineColor="white"
          vertLineColor="white"
        />

        <div className="article-1">
          <h1>The Global Standard in Mental Health</h1>
          <p>
            Modern Health delivers evidence-based, equitable mental health
            services worldwide — from self-guided tools to crisis care —
            ensuring our members have the right support wherever in the world
            they're located.
          </p>

          <Accordion
            drpDColor="#556fb8"
            listColor="#000"
            fontSize="68px"
            paddingL="20px"
            paddingR="20px"
          />
        </div>
      </div>
    </div>
  );
}
