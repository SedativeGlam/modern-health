import { useState } from "react";
import Accordion2 from "./Accordion2";

export default function Section6() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (i) => {
    setOpenAccordion((prev) => (prev === i ? i : i));
  };

  const accordionDetails = [
    {
      num: "1",
      header: "Tell us what you need",
      text: "We take a personalized approach to self-assessment, prioritizing how members prefer to receive care. This allows us to structure a plan that best suits each individual member.",
      bgImage: "url('/product-01.png')",
      bgImage2: "url('/top-pick.png')",
    },

    {
      num: "2",
      header: "Get connected to care",
      text: "Using Stepped Care methodology, members can expect unique guidance based on preferences and levels of need. Members around the globe can access culturally centered care in their preferred language.",
      bgImage: "url('/Product-screens-02.png')",
    },

    {
      num: "3",
      header: "Assess and adapt",
      text: "We know things change, and we're here to support each member along the way. Members can check in to track changes in their well-being or adjust what they'd like to focus on, whenever they want.",
      bgImage: "url('/Product-screen-03.png')",
    },
  ];

  return (
    <div className="sec6-container">
      <div className="products">
        <div
          className="products-1"
          style={{
            backgroundImage:
              openAccordion !== null
                ? accordionDetails[openAccordion].bgImage
                : "none",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "100vh",
          }}
        ></div>

        <div
          className="products-2"
          style={{
            backgroundImage:
              openAccordion !== null
                ? accordionDetails[openAccordion].bgImage2
                : "none",
            backgroundRepeat: "no-repeat",
            position: "relative",
            left: "200px",
            bottom: "755px",
            width: "380px",
            height: "100vh",
            backgroundSize: "cover",
          }}
        ></div>

        {openAccordion === 0 && (
          <ul className="top-picks">
            <li>Anxiety</li>
            <li>Low Mood</li>
            <li>New Job</li>
            <li>Communication</li>
            <li>Mindfullness</li>
            <li>Professional Growth</li>
            <li>Burnout</li>
            <li>Healthy Diet</li>
            <li>Parenting & Family</li>
            <li>Exercise</li>
          </ul>
        )}
      </div>

      <div className="personalized-health">
        <h1>Personalized health care at scale</h1>
        <p className="text">
          Modern Health provides a robust suite of mental health care offerings
          to keep employees happy, healthy, and motivated. Here's where the
          journey begins.
        </p>
        <div className="accordion-wrap">
          {accordionDetails.map((item, i) => (
            <Accordion2
              key={i}
              num={item.num}
              header={item.header}
              text={item.text}
              isOpen={openAccordion === i}
              toggleAccordion={toggleAccordion}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
