import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiLineVerticalThin } from "react-icons/pi";
import Accordion from "./Accordion";

export default function Navbar({
  logo,
  BgColor,
  userColor,
  dropDLineColor,
  vertLineColor,
  navLinkColor,
}) {
  const [isOpen, setIsOpen] = useState("false");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <div className="menu-details">
        <h2>How can we help?</h2>
        <p>
          It's time to experience personalized mental health care to improve
          employee and family well-being. Whether you are an HR representative,
          benefits consultant, or provider, you can request a demo with Modern
          Health. Let's begin the journey to a thriving workforce.
        </p>
        <Accordion
          drpDColor="#fff"
          listColor="#fff"
          question="#fff"
          accordionBg="#3250a3"
          dropDownBg="#556fb8"
        />

        <RiArrowDropDownLine />
      </div> */}

      <nav style={{ backgroundColor: BgColor }}>
        <div className="md-health-logo">
          <img src={logo} />
        </div>

        <div className="nav-right">
          <div className="dropdown-toggle" onClick={toggle}>
            <FaUserCircle style={{ color: userColor }} />
            <RiArrowDropDownLine
              style={{ fontSize: "30px", color: dropDLineColor }}
            />

            {isOpen ? null : (
              <ul>
                <li>Members</li>
                <li>Admins</li>
                <li>Providers</li>
              </ul>
            )}
          </div>

          <PiLineVerticalThin style={{ color: vertLineColor }} />

          <div className="menu">
            <h4 style={{ color: navLinkColor }}>
              Menu <span>+</span>
            </h4>
          </div>

          <button>Let's talk</button>
        </div>
      </nav>
    </div>
  );
}
