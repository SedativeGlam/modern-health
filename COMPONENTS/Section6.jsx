import {useState} from "react";
import Accordion2 from "./Accordion2";

export default function Section6() {
  return (
    <div className="sec6-container">
      <div className="products">
        <img src="/top-pick.png" width="600px" />
      </div>

      <div className="personalized-health">
        <h1>Personalized health care at scale</h1>
        <p>
          Modern Health provides a robust suite of mental health care offerings
          to keep employees happy, healthy, and motivated. Here's where the
          journey begins.
        </p>

        <Accordion2
          num="1"
          header="Tell us what you need"
          text="We take a personalized approach to self-assessment, prioritizing how
        members prefer to receive care. This allows us to structure a plan that
        best suits each individual member."
        />

        <Accordion2
          num="2"
          header="Get connected to care"
          text="Using Stepped Care methodology, members can expect unique guidance based on preferences and levels of need. Members around the globe can access culturally centered care in their preferred language."
        />

        <Accordion2
          num="3"
          header="Assess and adapt"
          text="We know things change, and we’re here to support each member along the way. Members can check in to track changes in their well-being or adjust what they’d like to focus on, whenever they want."
        />
      </div>
    </div>
  );
}
