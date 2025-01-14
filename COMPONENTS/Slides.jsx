import { useRef } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

export default function Slides({ children }) {
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
    <section className="slides-wrapper">
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

      <div className="cards-wrapper" ref={cardsWrapperRef}>
        {children}
      </div>
    </section>
  );
}
