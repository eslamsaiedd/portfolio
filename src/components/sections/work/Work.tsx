
// import styles from "./Work.module.css";
// import "../../../App.css";
// import image from "../../../../assets/Screenshot (25)-B1GOzr0T.png";
// import ipTrackerImage from "../../../../assets/Sticker (1).png";
// import eCommerceSinglePage from "../../../../assets/single-page.png";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const container = {
//   hidden: {},
//     show: { transition: { staggerChildren: 0.2 } },
// };

// const item = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// } as const;


// export function Work() {
//   const sectionRef = useRef(null);

//   const projects = [
//     {
//       id: 1,
//       href: "https://www.stepup-academy.org/",
//       title: "Stepup Academy",
//       tools: ["React", "TypeScript", "Tailwind CSS"],
//       image: image
//     },
//     {
//       id: 2,
//       href: "https://ipaddresstracker-ver1.netlify.app/",
//       title: "IP Address Tracker",
//       tools: ["React", "TypeScript", "Tailwind CSS"],
//       image:  ipTrackerImage
//     },
//     {
//       id: 3,
//       href: "https://single-page-sneakers-store.netlify.app/",
//       title: "E-commerce Website",
//       tools: ["HTML", "CSS", "JavaScript"],
//       image: eCommerceSinglePage
//     }
//   ]

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   })

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

//   return (
//     <section id="Work" ref={sectionRef} className={styles.fakeScrollSection}>
//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.1 }}
//         className={styles.stickyContainer}
//        >
//         <motion.div
//         variants={item}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.1 }}
//         className={`${styles.background} `}>
//           <div className={styles.headline}>
//             Projects
//             <span className={styles.numberOfProjects}>({projects.length})</span>
//           </div>

//           <div className={styles.horizontalWrapper}>
//             <motion.div
//               className={styles.cardsRow}
//               style={{ x }}
//             >
//               {projects.map((item) => (
//                 <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.wrapperContent}>
//                   <div className={styles.content}>
//                     <img className={styles.wrapperImg} src={item.image} alt="" />
                    
//                     <div className={styles.infoWrapper}>
//                       <div className={styles.nameProject}>
//                         {item.title}
//                       </div>

//                       <div className={styles.toolsWrapper}>
//                           {item.tools.map((tool, index) => (
//                             <div key={index} className={styles.toolsProject}>{tool}</div>
//                           ))}
//                       </div>
//                     </div>

//                   </div>
//                 </a>
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

import styles from "./Work.module.css";
import "../../../App.css";
import image from "../../../../assets/Screenshot (25)-B1GOzr0T.png";
import ipTrackerImage from "../../../../assets/Sticker (1).png";
import eCommerceSinglePage from "../../../../assets/single-page.png";
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
  const isMobile = window.innerWidth <= 768;

  const projects = [
    {
      id: 1,
      href: "https://www.stepup-academy.org/",
      title: "Stepup Academy",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      image: image,
    },
    {
      id: 2,
      href: "https://ipaddresstracker-ver1.netlify.app/",
      title: "IP Address Tracker",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      image: ipTrackerImage,
    },
    {
      id: 3,
      href: "https://single-page-sneakers-store.netlify.app/",
      title: "E-commerce Website",
      tools: ["HTML", "CSS", "JavaScript"],
      image: eCommerceSinglePage,
    },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });


  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "-68%" : "-60%"]
  );

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
          className={styles.background}
        >
          <div className={styles.bgText} aria-hidden="true">PROJECTS</div>

          <div className={styles.headline}>
            Projects
            <span className={styles.numberOfProjects}>({projects.length})</span>
          </div>

          <div className={styles.horizontalWrapper}>
            <motion.div className={styles.cardsRow} style={{ x }}>
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.wrapperContent}
                >
                  <div className={styles.content}>
                    <img
                      className={styles.wrapperImg}
                      src={project.image}
                      alt=""
                    />
                    <div className={styles.infoWrapper}>
                      <div className={styles.nameProject}>{project.title}</div>
                      <div className={styles.toolsWrapper}>
                        {project.tools.map((tool, index) => (
                          <div key={index} className={styles.toolsProject}>
                            {tool}
                          </div>
                        ))}
                      </div>
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