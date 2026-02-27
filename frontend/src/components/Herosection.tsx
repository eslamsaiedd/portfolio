import { NavBar } from "./NavBar";
import { motion } from "motion/react"
import Motor from "./motorAnimation/Motor";
import Moto from "./moto/Moto";
import styles from './HeroSection.module.css'
import '../App.css'
const container = {
  hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

export default function HeroSection() {

  return (
    <div style={{width:"100%"}}>

      <NavBar/>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={item} className={styles.hookText}>
          <motion.div className={styles.paddingGlobal}>
            DESIGN WITH A
            <span className={styles.secondLineTextHook}>
              HUMAN TOUCH
            </span>
          </motion.div>
          <Motor/>
        </motion.div>


         {/* <motion.div variants={item}> */}

         
          {/* <Moto/> */}
        {/* </motion.div> */}
        
        
      </motion.div>
    </div>
  );
}
