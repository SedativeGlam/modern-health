import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Accordion({ className, iconColor }) {
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
    <div className={`accordion ${className}`}>
      <div className="drop-down" onClick={toggleAccordion}>
        <p>How can we help?</p>
        <RiArrowDropDownLine style={{ fontSize: "35px", color: iconColor }} />
      </div>

      {!isAccordionOpen && (
        <ul>
          {listItems.map((item, i) => (
            <li key={i}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
