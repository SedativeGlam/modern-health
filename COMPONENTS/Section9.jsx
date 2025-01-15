import React from "react";
import MentalHealth from "./MentalHealth";

export default function Section9() {
  return (
    <section className="section9-container">
      {/* <Sec8And9
        className="details"
        header1="Community building"
        header2="Destigmatizing mental health one conversation at a time."
        text="Join U.S. Surgeon General, Dr. Vivek Murthy, and Modern Health's Chief Community Health Advocate, Naomi Osaka for an intimate conversation about their mental health journeys and inner voice."
        color2="#556fb8"
        color3="#080808c9"
      /> */}

      <MentalHealth
        className="community-building"
        header1="Community building"
        header2="Destigmatizing mental health one conversation at a time."
        text="Join U.S. Surgeon General, Dr. Vivek Murthy, and Modern Health's Chief Community Health Advocate, Naomi Osaka for an intimate conversation about their mental health journeys and inner voice."
      ></MentalHealth>

      <div className="community-img">
        <img src="/naomi.jpg" />
      </div>
    </section>
  );
}
