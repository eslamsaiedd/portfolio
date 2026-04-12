// import { NavBar } from "../../Header/NavBar";
// import { motion } from "motion/react"
// import Motor from "../../motorAnimation/Motor";
// import styles from './HeroSection.module.css'
// import { useEffect, useState } from "react";
// import peaks from "../../../../assets/layered-peaks-haikei.svg";
// import { TypeAnimation } from "react-type-animation";

// const container = {
//   hidden: {},
//     show: { transition: { staggerChildren: 0.2 } },
// };


// const scrollHide = {
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
//   hidden: {
//     opacity: 0,
//     transition: { duration: 0.3, ease: "easeInOut" },
//   },
// } as const;

// export default function HeroSection() {


//   const [hide, setHide] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setHide(true);
//       } else {
//         setHide(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (

//       <motion.div
//       variants={container}
//       className="sectionPadding mainBackgroundColor"
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.1 }}
//       id="Home"
//       > 
//         <NavBar/>

//         <motion.div variants={scrollHide}
//           initial="visible"
//           animate={hide ? "hidden" : "visible"}
//          >
            

//           <motion.div className={`${styles.paddingGlobal} ${styles.hookText}`}>

            
//             <div style={{display:"flex", flexDirection:"column"}}>
//               <span><span className={styles.inlineSpan}> I'm</span> Eslam</span>
//               <span style={{zIndex:"111"}}>
//                 <span className={styles.inlineSpan}>I'm a </span>
//                 <TypeAnimation
//                   sequence={[
//                     " Frontend Developer", 2000,
//                     " React Developer", 2000,
//                     " UI Enthusiast", 2000,
//                   ]}
//                   speed={20}
//                   repeat={Infinity}
//                 />
//               </span>

//             </div>
//             <div className={styles.subTitle}>
//               Frontend React expert 
//               <br />
//               crafting fast growth-focused UX experiences.
//             </div>

//             <div className={styles.actionBtnWrapper}>

//               <button className={styles.contactButton}>
//                 <a href="https://wa.me/201118136788" target="_blank">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#000000" style={{opacity:1}}><path  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/></svg>
//                   Get in touch
//                 </a>
//               </button>

//               <button className={styles.projectsButton}>
//                 <a href="#Work">
//                   Browse Projects
//                 </a>
//               </button>

//             </div>


//             <img className={styles.wave} src={peaks} alt="wave background" />
//           </motion.div>
          
//           <Motor/>
//         </motion.div>
//       </motion.div>
//   );
// }

import { NavBar } from "../../Header/NavBar";
import { motion } from "motion/react";
import Motor from "../../motorAnimation/Motor";
import styles from "./HeroSection.module.css";
import { useEffect, useState } from "react";
import peaks from "../../../../assets/layered-peaks-haikei.svg";
import { TypeAnimation } from "react-type-animation";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

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
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHide(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      variants={container}
      className="sectionPadding mainBackgroundColor"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      id="Home"
    >
      <NavBar />

      <motion.div
        variants={scrollHide}
        initial="visible"
        animate={hide ? "hidden" : "visible"}
      >
        <motion.div className={`${styles.paddingGlobal} ${styles.hookText}`}>

          {/* Watermark */}
          <div className={styles.bgText} aria-hidden="true">ESLAM</div>

          {/* Eyebrow */}
          <p className={styles.eyebrow}>Frontend Developer — Cairo, Egypt</p>

          {/* Main headline */}
          <div className={styles.headlineBlock}>
            <span>
              <span className={styles.inlineSpan}>I'm </span>Eslam
            </span>
            <span>
              <span className={styles.inlineSpan}>I'm a </span>
              <TypeAnimation
                sequence={[
                  " Frontend Developer", 2000,
                  " React Developer",    2000,
                  " UI Enthusiast",      2000,
                ]}
                speed={20}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* Subtitle */}
          <div className={styles.subTitle}>
            Frontend React expert
            <br />
            crafting fast growth-focused UX experiences.
          </div>

          {/* Availability */}
          <div className={styles.availableTag}>
            <span className={styles.availableDot} />
            Available for freelance &amp; remote work
          </div>


          {/* CTA buttons */}
          <div className={styles.actionBtnWrapper}>
            <button className={styles.contactButton}>
              <a href="https://wa.me/201118136788" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#000000">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/>
                </svg>
                Get in touch
              </a>
            </button>
            <button className={styles.projectsButton}>
              <a href="#Work">Browse Projects</a>
            </button>
          </div>


          <img className={styles.wave} src={peaks} alt="" aria-hidden="true" />

        </motion.div>
          <Motor />
      </motion.div>
    </motion.div>
  );
}