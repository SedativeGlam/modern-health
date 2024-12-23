import React from "react";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";

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
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
    </div>
  );
}
