import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Accordion2({ num, header, text }) {
  return (
    <div className="accordion-2">
      <div className="drop-down-2">
        <h4>{num}</h4>
        <h3>{header}</h3>
        <RiArrowDropDownLine
          style={{ fontSize: "35px", marginLeft: "190px" }}
        />
      </div>
      <p className="accordion-text">{text}</p>
    </div>
  );
}
