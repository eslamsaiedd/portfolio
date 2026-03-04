
// import styles from "./Work.module.css";
// import '../../../App.css';
// import image from '../../../../assets/blob-scene-haikei-removebg-preview.png';

// export function Work() { 

//     return (
//         <div className={`${styles.background} sectionPadding`}> 

//             <div className={styles.headline}>Projects<span className={styles.numberOfProjects}>(3)</span></div>
            
//             <div className={styles.wrapper}>

//                 <a href="#" className={styles.wrapperContent}>
//                     <div className={styles.content}>

//                         <img className={styles.wrapperImg} src={image} alt="" />
                        
//                         {/* headline / name this project */}
//                         <div className={styles.nameProject}> Stepup Academy</div>
//                         <br />
//                         {/* what tools did i use */}
//                         <div style={{display:"flex", gap:"10px", color:"#000"}}>
//                             <div className={styles.toolsProject}> React</div>
//                             <div className={styles.toolsProject}> TypeScript</div>
//                             <div className={styles.toolsProject}> Tailwind CSS</div>
//                         </div>
//                     </div>
//                 </a>

//                 <a href="#" className={styles.wrapperContent}>
//                     <div className={styles.content}>

//                         <img className={styles.wrapperImg} src={image} alt="" />
                        
//                         {/* headline / name this project */}
//                         <div className={styles.nameProject}> Stepup Academy</div>
//                         <br />
//                         {/* what tools did i use */}
//                         <div style={{display:"flex", gap:"10px", color:"#000"}}>
//                             <div className={styles.toolsProject}> React</div>
//                             <div className={styles.toolsProject}> TypeScript</div>
//                             <div className={styles.toolsProject}> Tailwind CSS</div>
//                         </div>
//                     </div>
//                 </a>
//             </div>

//         </div>
//     )
// }


import styles from "./Work.module.css";
import "../../../App.css";
import image from "../../../../assets/blob-scene-haikei-removebg-preview.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Work() {
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Stepup Academy",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      image: image
    },
    {
      id: 2,
      title: "Chat App",
      tools: ["React", "Node.js", "Socket.io"],
      image: image
    },
    {
      id: 3,
      title: "E-commerce",
      tools: ["React", "Redux", "Stripe"],
      image: image
    }
  ]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={sectionRef} className={styles.fakeScrollSection}>
      <div className={styles.stickyContainer}>
        <div className={`${styles.background} sectionPadding`}>
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
                <a key={item.id} href="#" className={styles.wrapperContent}>
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
        </div>
      </div>
    </section>
  );
}