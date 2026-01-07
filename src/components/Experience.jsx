"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        company: "Meta",
        role: "Software Engineer",
        location: "San Francisco Bay Area",
        dates: "Jun 2021 – Present",
        duration: "4+ years",
        description: "Driving technical strategy at Meta's intersection of performance, regulation, and developer experience. Building systems that protect hundreds of millions in revenue and transform development cycles.",
        highlights: [
            "Set technical roadmap for regulation onboarding platform, achieving 96% time-to-market reduction",
            "Re-architected advertiser verification systems for 1M+ weekly users",
            "Scaled infrastructure to protect $500M+ in high-risk revenue",
            "Improved critical path load times by 85%, impacting global user retention",
        ],
        tech: ["React", "TypeScript", "GraphQL", "PHP/Hack", "Distributed Systems"],
    },
    {
        company: "VMware",
        role: "Senior Software Engineer",
        location: "Palo Alto, CA",
        dates: "Aug 2016 – Jun 2021",
        duration: "5 years",
        description: "Progressed from intern to Senior Engineer, driving full-stack initiatives and platform infrastructure. Led DevOps transformation and created innovative developer tooling.",
        highlights: [
            "Architected templatized service generator in GoLang, automating code generation",
            "Set up complete CICD pipeline infrastructure for vSphere UI project",
            "Led migration from legacy systems to modern React-based micro-frontends",
            "Key contributor to vSphere UI performance optimization",
        ],
        tech: ["React", "Angular", "GoLang", "TypeScript", "Docker", "Kubernetes"],
        progression: ["Intern → MTS 2 → MTS 3 → Senior"],
    },
    {
        company: "Infosys",
        role: "Senior Software Engineer",
        location: "India",
        dates: "Jul 2012 – Jun 2015",
        duration: "3 years",
        description: "Led development of web applications for enterprise clients, building expertise in frontend technologies and client-facing delivery.",
        highlights: [
            "Led development of web applications for Vodafone Group",
            "Built mobile-first experiences using XUI framework and jQuery",
            "Delivered high-quality solutions for enterprise clients",
        ],
        tech: ["JavaScript", "jQuery", "HTML5", "CSS3", "XUI"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className={`section container ${styles.experience}`}>
            <motion.h2
                className="gradient-text section-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                Where I've Worked
            </motion.h2>

            <div className={styles.timeline}>
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className={`${styles.card} glass-card`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.header}>
                            <div className={styles.titleGroup}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <span className={styles.company}>@ {exp.company}</span>
                            </div>
                            <span className={styles.duration}>{exp.duration}</span>
                        </div>

                        <div className={styles.meta}>
                            <div className={styles.metaItem}>
                                <Calendar size={14} />
                                <span>{exp.dates}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <MapPin size={14} />
                                <span>{exp.location}</span>
                            </div>
                        </div>

                        {exp.progression && (
                            <div className={styles.progression}>
                                {exp.progression.map((step, idx) => (
                                    <span key={idx} className={styles.progressionStep}>{step}</span>
                                ))}
                            </div>
                        )}

                        <p className={styles.description}>{exp.description}</p>

                        <ul className={styles.highlights}>
                            {exp.highlights.map((highlight, idx) => (
                                <li key={idx}>{highlight}</li>
                            ))}
                        </ul>

                        <div className={styles.techStack}>
                            {exp.tech.map((t) => (
                                <span key={t} className="tag">{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
