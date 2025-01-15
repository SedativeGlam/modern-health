import React from "react";
import MentalHealth from "./MentalHealth";

export default function Section8() {
  return (
    <section className="section8-container">
      <div className="section8-wrapper">
        <div className="member-img">
          <img src="/kima.jpg" />
        </div>

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
