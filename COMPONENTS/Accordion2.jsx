import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Accordion2({
  num,
  header,
  text,
  isOpen,
  toggleAccordion,
  index,
}) {
  return (
    <div className="accordion-2">
      <div className="drop-down-2" onClick={() => toggleAccordion(index)}>
        <div className="num-header">
          <h4>{num}</h4>
          <h3>{header}</h3>
        </div>

        <RiArrowDropDownLine style={{ fontSize: "35px" }} />
      </div>

      <div
        style={{
          maxHeight: isOpen ? "100%" : "0px",
          overflow: "hidden",
          transition: isOpen ? "max-height 0.5s ease-in" : "",
        }}
      >
        <p className="accordion-text">{text}</p>
      </div>
    </div>
  );
}
