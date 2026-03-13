
import { motion } from "framer-motion";
import MotorCurve from "../../motorCurve/MotorCurve";
import styles from "./About.module.css";

const container = {
  hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

export function AboutMe() { 

    return (
        <section id="About" className={`${styles.wrapper} sectionPadding`} >
            <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            style={{display:"flex", width:"100%"}} >

                <motion.div 
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={styles.textSide}>
                    <h2 className={styles.sectionTitle}>Who is Eslam?</h2>
                    <p>My name is Eslam Saied born in 2006</p>
                    <p>I'm a passionate Front-End Developer who started learning programming as a hobby and quickly fell in love with building things on the web.
                        {/* I'm a passionate Front-End Developer who started learning programming as a hobby and quickly fell in love with building things on the web. */}
                    </p>
                    <p>Currently studying and continuously improving my skills in modern web technologies.</p>
                    <p>I enjoy turning ideas into interactive and visually appealing web experiences.</p>
                    <p>Always curious to learn new tools, experiment with animations, and create better user experiences.</p>
                </motion.div>

                <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }} 
                className={styles.animationSide}>
                    <MotorCurve/> 
                </motion.div>
            </motion.div>
        </section>
    )
}

// put animation for motor here and some thing about me 