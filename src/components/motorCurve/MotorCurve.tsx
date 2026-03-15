

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import motorImg from "../../../assets/ChatGPT_Image_21_فبراير_2026__08_22_07_م-removebg-preview.png";
import fire from "../../../assets/fire.gif";
import './MotorCurve.css';

export default function MotorCurve() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset:["start 80%", "end 20%"],
  });

  const multiplier = 0.9; 

  const distance = useSpring(
    useTransform(scrollYProgress, (v) => `${Math.min(v * multiplier, 1) * 100}%`),
    { stiffness: 90, damping: 30 }
  );


  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="wrapper">

        {/* الخط المتقطع */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            right: -150,
            top: 0,
            width: 300,
            height: 800,
          }}
          viewBox="0 0 346 874"
        >
          <path
            d="M345.25 0.999268C294.798 20.0112 308.241 28.3893 160.465 28.3893C12.6887 28.3893 1.24999 108.561 1.24999 156.188V873.999"
            stroke="#999"
            strokeDasharray="15 8"
            fill="none"
          />
        </svg>

        <motion.div
          className="motorWrapper"
          style={{
            offsetDistance: distance,
          }}
        >
          <motion.img
            src={motorImg}
            className="motorAnimation"
            style={{ x: useTransform(scrollYProgress, [0, 1], ["0px", "30px"]) }}
          />
          <img src={fire} className="backFire" />
        </motion.div>

      </div>
    </section>
  );
}