import React from "react";

export default function NavAndFooterLinks({ className }) {
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
    <div className={`links ${className}`}>
      {footerLinksData.map((item, i) => (
        <ul key={i}>
          <h3>{item.title}</h3>
          <div className="anchor-tags">
            {[item.li1, item.li2, item.li3, item.li4, item.li5]
              .filter(Boolean)
              .map((listItems, index) => (
                <a key={index} href="#">
                  {listItems}
                </a>
              ))}
          </div>
        </ul>
      ))}
    </div>
  );
}
