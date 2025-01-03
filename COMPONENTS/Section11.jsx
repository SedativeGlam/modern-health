import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Section11() {
  const footerLinksData = [
    {
      title: "Who we serve",
      li1: "Employers",
      li2: "Consultants",
      li3: "Members",
      li4: "Providers",
      li5: "Health Plans",
    },

    {
      title: "Solutions",
      li1: "Workplace tools",
      li2: "Economic value",
      li3: "Global coverage",
      li4: "Pathways",
    },

    {
      title: "Resources",
      li1: "Blog",
      li2: "Case studies",
      li3: "Events",
    },

    {
      title: "About us",
      li1: "Careers",
      li2: "DEIB",
      li3: "Press",
    },

    {
      title: "Contact us",
      li1: "Talk to a consultant",
      li2: "650 California St.Floor 7 San Francisco, CA94108 Office 07-128",
    },
  ];

  return (
    <section>
      <div className="footer-top">
        <div className="badge-and-logo">
          <img className="logo" src="/Modern-logo.png" />
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

          <div className="links">
            {footerLinksData.map((item, i) => (
              <ul key={i}>
                <h3>{item.title}</h3>

                {[item.li1, item.li2, item.li3, item.li4, item.li5]
                  .filter(Boolean)
                  .map((listItems, index) => (
                    <li key={index}>{listItems}</li>
                  ))}
              </ul>
            ))}
          </div>
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
