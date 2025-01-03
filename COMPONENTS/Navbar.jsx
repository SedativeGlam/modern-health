import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiLineVerticalThin } from "react-icons/pi";
import Accordion from "./Accordion";
import { TiDeleteOutline } from "react-icons/ti";
import { BsCalendarFill } from "react-icons/bs";

export default function Navbar({
  logo,
  BgColor,
  userColor,
  dropDLineColor,
  vertLineColor,
  navLinkColor,
}) {
  const [isOpen, setIsOpen] = useState("false");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNavModal = () => {
    setIsModalOpen(false);
  };

  const openNavModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      {isModalOpen && (
        <div className="menu-details">
          <div className="menu-header">
            <h2>How can we help?</h2>
            <TiDeleteOutline
              style={{ fontSize: "40px", cursor: "pointer" }}
              onClick={closeNavModal}
            />
          </div>

          <p>
            It's time to experience personalized mental health care to improve
            employee and family well-being. Whether you are an HR
            representative, benefits consultant, or provider, you can request a
            demo with Modern Health. Let's begin the journey to a thriving
            workforce.
          </p>

          <Accordion
            drpDColor="#fff"
            listColor="#fff"
            question="#fff"
            accordionBg="#3250a3"
            dropDownBg="#556fb8"
            fontSize="80px"
            questionFont="18px"
          />

          <div className="meeeting-schedule">
            <hr />
            <h3>Rather skip the form?</h3>
            <h4>Let's schedule a meeting at your convenience now!</h4>

            <button className="schedule">
              Schedule a Demo
              <BsCalendarFill style={{ fontSize: "14px" }} />
            </button>
          </div>
        </div>
      )}

      <nav
        className="navbar"
        style={{
          backgroundColor: BgColor,
        }}
      >
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

          <div className="menu" onClick={openNavModal}>
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
