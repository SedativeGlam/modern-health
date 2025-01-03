import React from "react";

export default function Section5() {
  const sec5Cards = [
    {
      icon: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66efa95b5d7aed0f3908c335_icon-replace-eap.png",
      title: "Replace your EAP with what works",
      text: "Traditional EAPs overpromise and underdeliver by only reaching 5% of workforces on average. ",
      span: "This leaves 95% untreated",
      textExt:
        "— driving hidden costs through claims, disability leave, and lost productivity.",
      button: "Learn More",
    },

    {
      icon: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66efa95b5d7aed0f3908c314_icon-sustain-care.png",
      title: "A truly sustainable care model",
      text: "Our comprehensive care philosophy offers a spectrum of solutions designed to generate meaningful outcomes and align with your business needs. We recognize that a ",
      span: "one-size-fits-all approach would be both costly and ineffective.",
      button: "Our Economic Value",
    },

    {
      icon: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66efa95bb53c1e60b783383b_icon-rooted-excellence.png",
      title: "Rooted in clinical excellence",
      text: "Our clinical team brings decades of combined expertise to the table. This wealth of experience shapes every aspect of our product – from the innovative content we create to the comprehensive approach to care that spans from ",
      span: "prevention to crisis intervention.",
      button: "Our Clinical Excellence",
    },

    {
      icon: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66efa95b73bfd85a683dad0f_icon-best-global.png",
      title: "The industry's most-selective provider network",
      text: "We uphold the highest standards in mental health care by accepting only ",
      span: "4% of providers.",
      textExt:
        "Our extensive and diverse network spans various specialties and cultural competencies, meeting the unique needs of your global workforce.",
      button: "Our Global Impact",
    },
  ];

  return (
    <section>
      <div className="bg">
        <div className="sec5-wrapper">
          <h3>Our Foundation</h3>
          <p className="header">The Modern Health Difference</p>

          <div className="card-wrapper">
            {sec5Cards.map((item, i) => (
              <div className="card" key={i}>
                <img src={item.icon} />
                <h2>{item.title}</h2>
                <p>
                  {item.text}
                  <span>{item.span}</span> {item.textExt}
                </p>
                <button>{item.button}</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-ext"></div>
    </section>
  );
}
