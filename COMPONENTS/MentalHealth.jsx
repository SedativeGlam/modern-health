import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

export default function MentalHealth({
  className,
  header1,
  header2,
  text,
  name,
  rank,
}) {
  return (
    <div className={`mental-health ${className}`}>
      <h3>{header1}</h3>
      <h2>{header2}</h2>
      <p className="text">{text}</p>
      <h4>{name}</h4>
      <p className="pos">{rank}</p>

      <div className="btn">
        Watch Now
        <IoMdPlayCircle className="play-circle" />
      </div>
    </div>
  );
}
