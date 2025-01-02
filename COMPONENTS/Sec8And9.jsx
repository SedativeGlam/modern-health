import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

export default function Sec8And9({
  header1,
  header2,
  text,
  name,
  rank,
  color1,
  color2,
  color3,
}) {
  return (
    <div className="sec-8-9-container">
      <div className="flex-right" style={{ color: color1 }}>
        <h3 style={{ color: color2 }}>{header1}</h3>
        <h2 style={{ color: color3 }}>{header2}</h2>
        <p className="text">{text}</p>
        <h4>{name}</h4>
        <p className="pos">{rank}</p>

        <div className="btn" style={{ borderColor: color2 }}>
          Watch Now
          <IoMdPlayCircle style={{ fontSize: "21px", color: color2 }} />
        </div>
      </div>
    </div>
  );
}
