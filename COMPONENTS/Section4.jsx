import React from "react";
import { HiPlay } from "react-icons/hi2";
import Slides from "./Slides";

export default function Section4() {
  const sec4CardValues = [
    {
      imgDisplay:
        "https://cdn.vidyard.com/thumbnails/44648948/g2TUYnwdJibnr6Mq51HPiA.jpg",
      logo: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c7a489cc0a4a6eb83ea_rsm-logo.png",
      span: "Global Wellbeing Manager Rick Edgerton",
      text: "discusses business impact, productivity, turnover, burnout, how associates deliver service, how people show-up to work, stigma, recruiting, retention, value to people, higher morale",
    },
    {
      imgDisplay:
        "https://cdn.vidyard.com/thumbnails/44648927/d653ZHBs9C8Z9SuIkGmcOw.jpg",
      logo: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c79cf782057fc465897_kraken-logo.png",
      span: "Wellbeing Manager Ingrid Henderson",
      text: "discusses Pathways, 1:1 coaching, work life balance, ease of use, educate for healthy habits, and clinical research on choice.",
    },
    {
      imgDisplay:
        "https://cdn.vidyard.com/thumbnails/44648889/u6VwlgBBS6bdKRh_CIteeg.jpg",
      logo: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c81c0f47825f5abd52d_live-nation-logo.png",
      span: "Global Head of Benefits Emily Monroe",
      text: "discusses divisive events, what to look for in mental health solutions, promotes Circles, 1:1 care, being proactive.",
    },
    {
      imgDisplay:
        "https://cdn.vidyard.com/thumbnails/44648841/_4fB8gNg6Y4UxkJ21NT9Eg.jpg",
      logo: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c79a1b3e6bc766c618d_impact-logo.png",
      span: "CPO Michelle Denman",
      text: "shares value realization (personal and business), global differentiation, utilization, employer brand",
    },
    {
      imgDisplay:
        "https://cdn.vidyard.com/thumbnails/44648875/57APUzpE-QEihZCHYEkrsw.jpg",
      logo: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c79ef0ee5754adce913_netsmart-logo.png",
      span: "CPO Wendy Hill",
      text: "discusses holistic well-being and integration with performance management, employee life cycle and life events",
    },
  ];

  return (
    <section>
      <Slides className="sec4-cards-wrapper">
        {sec4CardValues.map((item, i) => (
          <div className="sec4-cards" key={i}>
            <div className="play-icon-wrap">
              <HiPlay className="play-icon" />
            </div>
            <video width="100%" poster={item.imgDisplay}>
              <source src="" type="video/mp4" />
            </video>
            <div className="logo-text">
              <img src={item.logo} />
              <p>
                <span>{item.span}</span> {item.text}
              </p>
            </div>
          </div>
        ))}
      </Slides>
    </section>
  );
}
