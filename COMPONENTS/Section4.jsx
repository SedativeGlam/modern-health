import { useRef } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

export default function Section4() {
  const sec4CardValues = [
    {
      video:
        "blob:https://play.vidyard.com/24d721ac-dcc5-4eba-8a81-4b2c0a4e0ec7",
      logo: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c7a489cc0a4a6eb83ea_rsm-logo.png",
      span: "Global Wellbeing Manager Rick Edgerton",
      text: "discusses business impact, productivity, turnover, burnout, how associates deliver service, how people show-up to work, stigma, recruiting, retention, value to people, higher morale",
    },
    {
      video:
        "blob:https://play.vidyard.com/3f671dd1-94ac-41e8-9bf3-7d88bb592b37",
      logo: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c79cf782057fc465897_kraken-logo.png",
      span: "Wellbeing Manager Ingrid Henderson",
      text: "discusses Pathways, 1:1 coaching, work life balance, ease of use, educate for healthy habits, and clinical research on choice.",
    },
    {
      video:
        "blob:https://play.vidyard.com/8bf48e27-5ad3-4903-b2e4-14e2fae6e52d",
      logo: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c81c0f47825f5abd52d_live-nation-logo.png",
      span: "Global Head of Benefits Emily Monroe",
      text: "discusses divisive events, what to look for in mental health solutions, promotes Circles, 1:1 care, being proactive.",
    },
    {
      video:
        "blob:https://play.vidyard.com/844ae6ea-683a-4fec-90c8-a3ac2dbd58cf",
      logo: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c79a1b3e6bc766c618d_impact-logo.png",
      span: "CPO Michelle Denman",
      text: "shares value realization (personal and business), global differentiation, utilization, employer brand",
    },
    {
      video:
        "blob:https://play.vidyard.com/de11a0de-4a7a-4a41-834c-c66215f50b3b",
      logo: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c79ef0ee5754adce913_netsmart-logo.png",
      span: "CPO Wendy Hill",
      text: "discusses holistic well-being and integration with performance management, employee life cycle and life events",
    },
  ];

  const cardsWrapperRef = useRef(null);
  const scrollAmount = 1000;

  const nextSlide = () => {
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollLeft += scrollAmount;
    }
  };

  const prevSlide = () => {
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollLeft -= scrollAmount;
    }
  };

  return (
    <div className="sec4-container">
      <h3>Testimonials</h3>
      <div className="scroll-wrap">
        <p>Hear directly from our customers</p>
        <div className="forward-backward">
          <div className="arrow-wrap">
            <IoMdArrowBack className="backward-arrow" onClick={prevSlide} />
          </div>
          <div className="arrow-wrap">
            <IoMdArrowForward className="forward-arrow" onClick={nextSlide} />
          </div>
        </div>
      </div>

      <div className="sec4-cards-wrapper" ref={cardsWrapperRef}>
        {sec4CardValues.map((item, i) => (
          <div className="sec4-cards" key={i}>
            <video width="100%" controls>
              <source src={item.video} type="video/mp4" />
            </video>

            <div className="logo-text">
              <img src={item.logo} />
              <p>
                <span>{item.span}</span> {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
