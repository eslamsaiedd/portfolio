
import { useEffect, useState } from "react";
import motorImage from "../../../assets/ChatGPT_Image_21_فبراير_2026__08_22_07_م-removebg-preview.png";
import fire from "../../../assets/fire.gif";
import "./Motor.css";

export default function Motor() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="scene">
      <div className={`motor-wrapper ${start ? "animate" : "hidden"}`}>
        <img className="motor" src={motorImage} alt="motorcycle" />
        <img className="backfire" src={fire} alt="fire" />
      </div>
    </div>
  );
}

