import { NavBar } from "../../Header/NavBar";
import { motion } from "motion/react"
import Motor from "../../motorAnimation/Motor";
import styles from './HeroSection.module.css'
import { useThemeContext } from "../../../context/ThemeContext";
import { Snowfall } from "react-snowfall/lib/Snowfall";
import { useEffect, useState } from "react";
import peaks from "../../../../assets/layered-peaks-haikei.svg";
const container = {
  hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const scrollHide = {
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
} as const;

export default function HeroSection() {

  const { isSnowfall, isDarkMode } = useThemeContext();

  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHide(true);
      } else {
        setHide(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

      <motion.div
      variants={container}
      className="sectionPadding"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      > 
        <NavBar/>

        <motion.div variants={scrollHide}
          initial="visible"
          animate={hide ? "hidden" : "visible"}
          className={` ${isDarkMode ? styles.dark : styles.light}`}>
            

          <motion.div className={`${styles.paddingGlobal} ${styles.hookText}`}>
            <div style={{display:"flex", flexDirection:"column"}}>
              <span><span className={styles.inlineSpan}> I'm</span> Eslam</span>
              <span><span className={styles.inlineSpan}>I'm a</span> FE Developer</span>
            </div>
            <div className={styles.subTitle}>
              Frontend React expert 
              <br />
              crafting fast growth-focused UX experiences.
            </div>
            <img className={styles.wave} src={peaks} alt="wave background" />
          </motion.div>
          
          <Motor/>
        </motion.div>
      </motion.div>
  );
}
