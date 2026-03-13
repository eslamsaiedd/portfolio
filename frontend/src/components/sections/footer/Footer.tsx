
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MoveRight } from "lucide-react"
import styles from "./Footer.module.css"

export default function Footer() {
    
    return (
        <motion.div
            className={styles.wrapper}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* for logo */}
            <div className={styles.logo}>E.S.</div>

            {/* links */}
            <div className={styles.linksWrapper}>
                <div className={styles.pageLinks}>
                    <a href="#Home">
                        <MoveRight className={styles.icon} size={13} />
                        <div>Home</div>
                    </a>

                    <a href="#Work">
                        <MoveRight className={styles.icon} size={13} />
                        <div>Work</div>
                    </a>

                    <a href="#About">
                        <MoveRight className={styles.icon} size={13} />
                        <div>About</div>
                    </a>
                </div>

                <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/in/eslam-saeed-b72bb4316/">
                        <div className={styles.boxForIcon}>
                            <Linkedin size={13} />
                        </div>
                        <div>Linkedin</div>
                    </a>

                    <a href="https://github.com/eslamsaiedd">
                        <div className={styles.boxForIcon}>
                            <Github size={13} />
                        </div>
                        <div>Github</div>
                    </a>

                    <a href="#">
                        <div className={styles.boxForIcon}>
                            <Mail size={13} />
                        </div>
                        <div>Email</div>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}