"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>
                        Let's Build <span className="gradient-text">Something Great</span>
                    </h2>

                    <p className={styles.description}>
                        Whether you're looking for a Staff Engineer to lead UI architecture,
                        want to discuss frontend at scale, or just want to connect —
                        I'm always excited to hear from fellow engineers and builders.
                    </p>

                    <div className={styles.cta}>
                        <a href="mailto:hello@varunjoshi.com" className="btn-primary">
                            <Mail size={20} />
                            Get in Touch
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className={styles.socials}>
                        <a
                            href="https://www.linkedin.com/in/varunjoshi91/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            <Linkedin size={24} />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/varunjoshi91"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            <Github size={24} />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="mailto:hello@varunjoshi.com"
                            className={styles.socialLink}
                        >
                            <Mail size={24} />
                            <span>Email</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
