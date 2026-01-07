"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { Code2, Server, Cloud, Layers, Users } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: Code2,
        skills: [
            { name: "React", level: "expert" },
            { name: "TypeScript", level: "expert" },
            { name: "JavaScript", level: "expert" },
            { name: "HTML5/CSS3", level: "expert" },
            { name: "Angular", level: "advanced" },
            { name: "Next.js", level: "advanced" },
        ],
    },
    {
        title: "Backend & Systems",
        icon: Server,
        skills: [
            { name: "GoLang", level: "advanced" },
            { name: "PHP/Hack", level: "advanced" },
            { name: "GraphQL", level: "expert" },
            { name: "Java", level: "intermediate" },
            { name: "SQL", level: "advanced" },
            { name: "C++", level: "intermediate" },
        ],
    },
    {
        title: "Infrastructure",
        icon: Cloud,
        skills: [
            { name: "Docker", level: "advanced" },
            { name: "Kubernetes", level: "advanced" },
            { name: "CICD Pipelines", level: "expert" },
            { name: "Unit Testing", level: "expert" },
            { name: "E2E Testing", level: "advanced" },
        ],
    },
    {
        title: "Architecture",
        icon: Layers,
        skills: [
            { name: "UI Architecture", level: "expert" },
            { name: "System Design", level: "expert" },
            { name: "Micro-frontends", level: "expert" },
            { name: "Platform Infrastructure", level: "advanced" },
            { name: "Performance Optimization", level: "expert" },
        ],
    },
    {
        title: "Leadership",
        icon: Users,
        skills: [
            { name: "Technical Strategy", level: "expert" },
            { name: "Mentorship", level: "expert" },
            { name: "Cross-functional Leadership", level: "expert" },
            { name: "Code Reviews", level: "expert" },
            { name: "Technical Documentation", level: "advanced" },
        ],
    },
];

const levelColors = {
    expert: "var(--accent-primary)",
    advanced: "var(--accent-secondary)",
    intermediate: "var(--accent-tertiary)",
};

export default function Skills() {
    return (
        <section id="skills" className={`section ${styles.skills}`}>
            <div className="container">
                <motion.h2
                    className="gradient-text section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Skills & Expertise
                </motion.h2>

                <div className={styles.grid}>
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={category.title}
                            className={`${styles.category} glass-card`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.categoryHeader}>
                                <category.icon size={24} className={styles.categoryIcon} />
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>

                            <div className={styles.skillsList}>
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className={styles.skill}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                        <span
                                            className={styles.skillLevel}
                                            style={{ color: levelColors[skill.level] }}
                                        >
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.techCloud}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className={styles.techCloudLabel}>Full Tech Stack:</p>
                    <div className={styles.techTags}>
                        {["React", "TypeScript", "JavaScript", "GoLang", "PHP/Hack", "GraphQL",
                            "Docker", "Kubernetes", "Angular", "Next.js", "Node.js", "SQL",
                            "Storybook", "Jest", "Webpack", "Vite", "Git", "Figma"].map((tech) => (
                                <span key={tech} className="tag">{tech}</span>
                            ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
