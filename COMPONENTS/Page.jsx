import React from "react";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

export default function Page() {
  return (
    <div className="overall-wrapper">
      {/* <Navbar
        logo="./Modern_Health_Logo.png"
        BgColor="#ffffffee"
        navLinkColor="#4e4e4e"
        userColor="#2b2a2a"
        dropDLineColor="#4e4e4e"
      /> */}

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}
