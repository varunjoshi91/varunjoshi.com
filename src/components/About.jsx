"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import { Zap, Users, Gauge, Shield } from "lucide-react";

const impactPillars = [
    {
        icon: Zap,
        title: "Velocity at Scale",
        metric: "96%",
        description: "Reduced development timelines from 40 weeks to 1.5 weeks with a regulation onboarding framework.",
    },
    {
        icon: Users,
        title: "Massive Reach",
        metric: "1M+",
        description: "Weekly advertisers supported by verification systems I architected at Meta.",
    },
    {
        icon: Gauge,
        title: "Performance Architecture",
        metric: "85%",
        description: "Load time improvements achieved through critical path re-engineering.",
    },
    {
        icon: Shield,
        title: "Risk & Resilience",
        metric: "$500M",
        description: "High-risk revenue secured through risk mitigation platforms I designed.",
    },
];

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <motion.h2
                    className="gradient-text section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className={styles.content}>
                    <motion.div
                        className={styles.story}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className={styles.intro}>
                            I solve problems where <strong>technical complexity meets massive scale</strong>.
                            With 11+ years across Meta and VMware, my focus has evolved from building
                            features to architecting the foundational platforms that allow entire
                            engineering organizations to move faster and more securely.
                        </p>

                        <p>
                            At Meta, I operate at the intersection of performance, regulation, and
                            developer experience. I don't just optimize apps; I build the systems
                            that protect hundreds of millions in revenue and transform development
                            cycles from months into days.
                        </p>

                        <p>
                            While I'm primarily a <strong>UI architecture specialist</strong>, I'm a
                            full-stack engineer at heart. From setting up CICD pipelines to creating
                            templatized code generators in GoLang, I thrive on challenges that expand
                            my impact beyond the frontend.
                        </p>

                        <div className={styles.philosophy}>
                            <span className={styles.quoteIcon}>"</span>
                            <p>
                                UIs can make or break great applications.
                                A great UX is the key to a successful product.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.pillars}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={styles.pillarsTitle}>Core Impact</h3>
                        <div className={styles.pillarGrid}>
                            {impactPillars.map((pillar, i) => (
                                <motion.div
                                    key={pillar.title}
                                    className={`${styles.pillarCard} glass-card`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.pillarHeader}>
                                        <pillar.icon size={24} className={styles.pillarIcon} />
                                        <span className={styles.pillarMetric}>{pillar.metric}</span>
                                    </div>
                                    <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                                    <p className={styles.pillarDesc}>{pillar.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
