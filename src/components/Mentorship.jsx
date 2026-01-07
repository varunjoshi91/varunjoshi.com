"use client";

import { motion } from "framer-motion";
import styles from "./Mentorship.module.css";
import { Heart, Quote, TrendingUp, Users } from "lucide-react";

const testimonials = [
    {
        quote: "Varun is a very talented and technically sound professional who knows how to get the job done. He manages to strike a good balance between work and leisure.",
        author: "Yajur Brar",
        role: "Lead Auditor for ISO 9001, ISO 45001 & ISO 17025 | Trainer for Management Systems & Soft Skills",
    },
    {
        quote: "Varun is Motivated and enthusiastic. Love to explore new things.",
        author: "Rahul Kumar",
        role: "Development Lead | Driving Innovation with AI Strategies",
    },
];

const mentorshipStats = [
    { icon: Users, value: "10+", label: "Engineers Mentored" },
    { icon: TrendingUp, value: "5+", label: "Career Promotions Enabled" },
    { icon: Heart, value: "100%", label: "Passion for Growth" },
];

export default function Mentorship() {
    return (
        <section id="mentorship" className={`section ${styles.mentorship}`}>
            <div className="container">
                <motion.h2
                    className="gradient-text section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Growing Engineers
                </motion.h2>

                <motion.p
                    className={styles.intro}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    I thrive in high-ambiguity environments where I can lead cross-functional teams,
                    mentor the next generation of engineers, and turn 'impossible' technical debt
                    into competitive advantages. My team reaches out to me for guidance on career
                    growth, technical decisions, and navigating complex organizational challenges.
                </motion.p>

                <motion.div
                    className={styles.stats}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    {mentorshipStats.map((stat, i) => (
                        <div key={i} className={styles.statCard}>
                            <stat.icon size={24} className={styles.statIcon} />
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

                <div className={styles.testimonials}>
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.testimonialCard} glass-card`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Quote size={32} className={styles.quoteIcon} />
                            <p className={styles.quote}>{testimonial.quote}</p>
                            <div className={styles.author}>
                                <span className={styles.authorName}>{testimonial.author}</span>
                                <span className={styles.authorRole}>{testimonial.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
