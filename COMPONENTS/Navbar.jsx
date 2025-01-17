import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiLineVerticalThin } from "react-icons/pi";
import Accordion from "./Accordion";
import { TiDeleteOutline } from "react-icons/ti";
import { BsCalendarFill } from "react-icons/bs";
import Button from "./Button";
import NavAndFooterLinks from "./NavAndFooterLinks";

export default function Navbar({
  logo,

  className,
}) {
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className={`menu-details ${isModalOpen ? "open" : "closed"}`}>
        <div className="delete-icon">
          <TiDeleteOutline
            style={{ fontSize: "40px", cursor: "pointer" }}
            onClick={closeNavModal}
          />
        </div>
        <div className="menu-grid">
          <NavAndFooterLinks className="nav-modal-links"></NavAndFooterLinks>

          <div className="nav-modal-right">
            <h2>How can we help?</h2>
            <p>
              It's time to experience personalized mental health care to improve
              employee and family well-being. Whether you are an HR
              representative, benefits consultant, or provider, you can request
              a demo with Modern Health. Let's begin the journey to a thriving
              workforce.
            </p>

            <Accordion className="nav-modal-accordion"></Accordion>

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
        </div>
      </div>

      <nav className={`navbar ${className} ${isVisible ? "show-topnav" : ""}`}>
        <div className="md-health-logo">
          <img src={logo} />
        </div>

        <div className="nav-right">
          <div className="dropdown-menu">
            <div className="dropdown-toggle" onClick={toggle}>
              <FaUserCircle />
              <RiArrowDropDownLine style={{ fontSize: "30px" }} />

              <PiLineVerticalThin />

              {isOpen ? null : (
                <ul>
                  <li>Members</li>
                  <li>Admins</li>
                  <li>Providers</li>
                </ul>
              )}
            </div>

            <div className="menu" onClick={openNavModal}>
              <h4>
                Menu <span>+</span>
              </h4>
            </div>
          </div>

          <Button className="nav-btn">Let's Talk</Button>
        </div>
      </nav>
    </div>
  );
}
