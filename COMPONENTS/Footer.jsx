import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import NavAndFooterLinks from "./NavAndFooterLinks";

export default function Footer() {
  return (
    <section>
      <div className="footer-top">
        <div className="badge-and-logo">
          <img className="logo" src="/ModernHealth-logo-main.svg" />
          <div className="badge">
            <img className="badge-1" src="/GooglePlay-badge.png" />
            <img className="badge-2" src="/AppStore-badge.png" />
          </div>
        </div>
        <hr />

        <div className="footer-links">
          <div className="platforms">
            <p>
              The comprehensive mental health care platform for enterprises
              around the world
            </p>

            <div className="social-media">
              <IoLogoLinkedin className="icon" style={{ fontSize: "30px" }} />
              <RiTwitterXFill className="icon" style={{ fontSize: "25px" }} />
              <FaSquareInstagram
                className="icon"
                style={{ fontSize: "25px" }}
              />
            </div>
          </div>

          <NavAndFooterLinks className="grid-links"></NavAndFooterLinks>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2024 Modern Life, Inc. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Compliance</a>
          <div className="vert-line"></div>
          <a href="#">Privacy</a>
          <div className="vert-line"></div>
          <a href="#">HIPAA Notice</a>
          <div className="vert-line"></div>
          <a href="#">Security</a>
          <div className="vert-line"></div>
          <a href="#">Terms of Use</a>
          <div className="vert-line"></div>
          <a href="#">System Status</a>
          <div className="vert-line"></div>
          <a href="#">Cookie Preferences</a>
        </div>
      </div>
    </section>
  );
}
