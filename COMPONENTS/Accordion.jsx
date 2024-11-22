import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Accordion({
  drpDColor,
  listColor,
  question,
  accordionBg,
  dropDownBg,
  fontSize,
  paddingL,
  paddingR,
}) {
  const [isAccordionOpen, setIsAccordionOpen] = useState("false");

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const listItems = [
    "I'm looking to support my employees",
    "I'm a consultant looking to support my clients",
    "I'm a provider interested in modern health",
    "I'm a health plan interested in mental health benefits for our employers and members",
    "I'm looking for personal support",
  ];

  return (
    <div className="accordion" style={{ backgroundColor: accordionBg }}>
      <div
        className="drop-down"
        onClick={toggleAccordion}
        style={{
          backgroundColor: dropDownBg,
          paddingLeft: paddingL,
          paddingRight: paddingR,
        }}
      >
        <p style={{ color: question }}>How can we help?</p>
        <RiArrowDropDownLine style={{ fontSize: fontSize, color: drpDColor }} />
      </div>

      {isAccordionOpen
        ? null
        : listItems.map((item, i) => (
            <ul>
              <li key={i}>
                <a href="#" style={{ color: listColor }}>
                  {item}
                </a>
              </li>
            </ul>
          ))}
    </div>
  );
}
