
import styles from "./Work.module.css";
import "../../../App.css";
import image from "../../../../assets/Screenshot (25).png";
import screenShot from "../../../../assets/Screenshot (24).png";
import screenShotTwo from "../../../../assets/Screenshot (27).png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;


export function Work() {
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      href: "https://www.stepup-academy.org/",
      title: "Stepup Academy",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      image: image
    },
    {
      id: 2,
      href: "https://e-commerce-2020.netlify.app/",
      title: "E-commerce",
      tools: ["HTML", "css", "JavaScript"],
      image: screenShot
    },
    {
      id: 3,
      href: "https://cloning-emirates-airline-website.netlify.app/",
      title: "cloning emirates airline",
      tools: ["HTML", "CSS", "JavaScript"],
      image: screenShotTwo
    }
  ]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section id="Work" ref={sectionRef} className={styles.fakeScrollSection}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={styles.stickyContainer}
       >
        <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.background} sectionPadding`}>
          <div className={styles.headline}>
            Projects
            <span className={styles.numberOfProjects}>({projects.length})</span>
          </div>

          <div className={styles.horizontalWrapper}>
            <motion.div
              className={styles.cardsRow}
              style={{ x }}
            >
              {projects.map((item) => (
                <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.wrapperContent}>
                  <div className={styles.content}>
                    <img className={styles.wrapperImg} src={item.image} alt="" />
                    <div className={styles.nameProject}>
                      {item.title}
                    </div>

                    <div className={styles.toolsWrapper}>
                        {item.tools.map((tool, index) => (
                          <div key={index} className={styles.toolsProject}>{tool}</div>
                        ))}
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}