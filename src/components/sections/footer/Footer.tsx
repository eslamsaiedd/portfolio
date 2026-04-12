
// import { motion } from "framer-motion"
// import { Github, Linkedin, Mail, Instagram } from "lucide-react"
// import styles from "./Footer.module.css"

// export default function Footer() {
    
//     return (
//         <motion.footer
//             className={styles.wrapper}
//             initial={{ y: 200, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             viewport={{ once: true }}
//         >

//             <div className={styles.footerContent}>
//                 {/* hook and links */}
//                 <div className={styles.HookAndLinks}>

//                     <div className={styles.footerHook}>Get in touch</div>

//                     <div className={styles.linksWrapper}>

//                         <div className={styles.socialLinks}>
//                             <a href="https://www.linkedin.com/in/eslam-saeed-b72bb4316/">
//                                 <div className={styles.boxForIcon}>
//                                     <Linkedin size={13} />
//                                 </div>
//                                 <div>Linkedin</div>
//                             </a>

//                             <a href="https://www.linkedin.com/in/eslam-saeed-b72bb4316/">
//                                 <div className={styles.boxForIcon}>
//                                     <Instagram size={13} />
//                                 </div>
//                                 <div>Instagram</div>
//                             </a>

//                             <a href="https://github.com/eslamsaiedd">
//                                 <div className={styles.boxForIcon}>
//                                     <Github size={13} />
//                                 </div>
//                                 <div>Github</div>
//                             </a>

//                             <a href="#">
//                                 <div className={styles.boxForIcon}>
//                                     <Mail size={13} />
//                                 </div>
//                                 <div>Email</div>
//                             </a>
//                         </div>
//                     </div>

//                 </div>

//                 <a href="#Home" className={styles.logo}>E.S.</a>
//             </div>

//         </motion.footer>
//     )
// }


import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <motion.footer
      className={styles.wrapper}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className={styles.footerContent}>

        <div className={styles.bgText} aria-hidden="true">CONTACT</div>

        <a href="#Home" className={styles.logo}>E.S.</a>

        <div className={styles.HookAndLinks}>
          <div className={styles.footerHook}>Get in touch.</div>

          <div className={styles.linksWrapper}>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/eslam-saeed-b72bb4316/">
                <div className={styles.boxForIcon}><Linkedin size={13} /></div>
                <div>Linkedin</div>
              </a>
              <a href="#">
                <div className={styles.boxForIcon}><Instagram size={13} /></div>
                <div>Instagram</div>
              </a>
              <a href="https://github.com/eslamsaiedd">
                <div className={styles.boxForIcon}><Github size={13} /></div>
                <div>Github</div>
              </a>
              <a href="mailto:your@email.com">
                <div className={styles.boxForIcon}><Mail size={13} /></div>
                <div>Email</div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} Eslam Saeed — All rights reserved.
        </div>

      </div>
    </motion.footer>
  )
}