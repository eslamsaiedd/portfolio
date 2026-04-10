
import { motion } from "motion/react";
import MotorCurve from "../../motorCurve/MotorCurve";
import styles from "./About.module.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

const skills = ["React", "TypeScript", "Framer Motion", "Three.js", "CSS Modules", "Vite"];

const stats = [
  { value: "1+", label: "Years experience" },
  { value: "10+", label: "Projects built" },
];

export function AboutMe() {
  return (
    <section id="About" className={`${styles.wrapper} sectionPadding`}>
      <div className={styles.bgText} aria-hidden="true">ABOUT</div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={styles.grid}
      >
        {/* Left — text + stats + cards */}
        <motion.div variants={item} className={styles.textSide}>
            {/* <div></div> */}
          <p className={styles.eyebrow}>About me</p>
          <h2 className={styles.sectionTitle}>
            I build things <br />
            <span className={styles.accent}>people love</span> to use.
          </h2>
          <p className={styles.bio}>
            Frontend React developer focused on fast, growth-driven UX. I turn
            ideas into polished, performant interfaces.
          </p>
          <p className={styles.bio}>Always learning. Always building.</p>

          <div className={styles.skills}>
            {skills.map((s) => (
              <span key={s} className={styles.skillTag}>{s}</span>
            ))}
          </div>

          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.value} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <p className={styles.infoTitle}>Based in Egypt</p>
                <p className={styles.infoSub}>Open to remote work</p>
              </div>
            </div>

            {/* <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <p className={styles.infoTitle}>Available for hire</p>
                <p className={styles.infoSub}>Open to opportunities</p>
              </div>
            </div> */}
          </div>
        </motion.div>

        {/* Right — motor animation only */}
        <motion.div variants={item} className={styles.animationSide}>
          <MotorCurve />
        </motion.div>
      </motion.div>
    </section>
  );
}