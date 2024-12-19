import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

export default function Sec8And9({
  header1,
  header2,
  text,
  name,
  position,
  color,
  title1Color,
  title2Color,
}) {
  return (
    <div className="sec-8-9-container">
      <div className="flex-right" style={{ color }}>
        <h3>{header1}</h3>
        <h2>{header2}</h2>
        <p className="text">{text}</p>
        <h4>{name}</h4>
        <p className="pos">{position}</p>

        <div className="btn">
          <p className="watch">Watch Now</p>
          <IoMdPlayCircle style={{ fontSize: "21px" }} />
        </div>
      </div>
    </div>
  );
}
