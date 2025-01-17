import { useRef } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

export default function Slides({ title, text, children }) {
  const cardsWrapperRef = useRef(null);
  const scrollAmount = 600;
  const mobileScrollAmount = 300;

  const nextSlide = () => {
    const scrollDistance =
      window.innerWidth <= 767 ? mobileScrollAmount : scrollAmount;

    if (cardsWrapperRef.current) {
      const totalWidth = cardsWrapperRef.current.scrollWidth;
      const containerWidth = cardsWrapperRef.current.clientWidth;
      const currentScroll = cardsWrapperRef.current.scrollLeft;

      if (currentScroll + containerWidth >= totalWidth) {
        cardsWrapperRef.current.scrollLeft = 0;
      } else {
        cardsWrapperRef.current.scrollLeft += scrollDistance;
      }
    }
  };

  const prevSlide = () => {
    const scrollDistance =
      window.innerWidth <= 768 ? mobileScrollAmount : scrollAmount;

    if (cardsWrapperRef.current) {
      const currentScroll = cardsWrapperRef.current.scrollLeft;
      if (currentScroll <= 0) {
        const totalWidth = cardsWrapperRef.current.scrollWidth;
        cardsWrapperRef.current.scrollLeft = totalWidth;
      } else {
        cardsWrapperRef.current.scrollLeft -= scrollDistance;
      }
    }
  };

  return (
    <section className="slides-wrapper">
      <h3>{title}</h3>
      <div className="scroll-wrap">
        <p>{text}</p>
        <div className="forward-backward">
          <div className="arrow-wrap">
            <IoMdArrowBack className="backward-arrow" onClick={prevSlide} />
          </div>
          <div className="arrow-wrap">
            <IoMdArrowForward className="forward-arrow" onClick={nextSlide} />
          </div>
        </div>
      </div>

      <motion.div
        className="cards-wrapper"
        ref={cardsWrapperRef}
        style={{ display: "flex", gap: "1rem", overflowX: "auto" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
