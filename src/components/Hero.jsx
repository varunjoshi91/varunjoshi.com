"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.glowOrb} />
            <div className={styles.glowOrb2} />

            <div className={`container ${styles.container}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.greeting}>Hi there, I'm</span>
                </motion.div>

                <motion.h1
                    className={styles.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="gradient-text">Varun Joshi</span>
                </motion.h1>

                <motion.h2
                    className={styles.tagline}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    I architect <span className={styles.highlight}>UI systems</span> that scale to millions
                </motion.h2>

                <motion.p
                    className={styles.bio}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Staff Software Engineer at <strong>Meta</strong> with 11+ years of experience.
                    I solve problems where technical complexity meets massive scale — from
                    reducing development timelines by <span className={styles.metric}>96%</span> to
                    building systems serving <span className={styles.metric}>1M+ weekly users</span>.
                </motion.p>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a href="#contact" className="btn-primary">
                        Let's Connect
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <FileText size={18} />
                        Resume
                    </a>
                </motion.div>

                <motion.div
                    className={styles.socials}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <a href="https://github.com/varunjoshi91" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
                        <Github size={22} />
                    </a>
                    <a href="https://www.linkedin.com/in/varunjoshi91/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                        <Linkedin size={22} />
                    </a>
                    <a href="mailto:hello@varunjoshi.com" aria-label="Email" className={styles.socialLink}>
                        <Mail size={22} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className={styles.scrollDown}
                >
                    <ArrowDown className={styles.bounce} size={20} />
                    <span>Scroll to explore</span>
                </motion.div>
            </div>
        </section>
    );
}
