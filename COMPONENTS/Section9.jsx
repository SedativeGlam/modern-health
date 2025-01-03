import React from "react";
import Sec8And9 from "./Sec8And9";

export default function Section9() {
  return (
    <section className="section9-container">
      <Sec8And9
        className="details"
        header1="Community building"
        header2="Destigmatizing mental health one conversation at a time."
        text="Join U.S. Surgeon General, Dr. Vivek Murthy, and Modern Health's Chief Community Health Advocate, Naomi Osaka for an intimate conversation about their mental health journeys and inner voice."
        color2="#556fb8"
        color3="#080808c9"
      />

      <div className="flex-left">
        <img src="/naomi.jpg" />
      </div>
    </section>
  );
}
