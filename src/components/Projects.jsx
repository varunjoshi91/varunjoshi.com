"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { Folder, ExternalLink, Github, Zap, Users, Settings, GitBranch } from "lucide-react";

const projects = [
    {
        title: "Regulation Onboarding Platform",
        icon: Zap,
        description: "Engineered a framework that collapsed development timelines from 40 weeks to 1.5 weeks — a 96% reduction. Enabled rapid compliance implementation across Meta's advertising platform.",
        impact: "96% faster time-to-market",
        tech: ["React", "TypeScript", "GraphQL", "PHP/Hack"],
        type: "Meta",
    },
    {
        title: "Advertiser Verification System",
        icon: Users,
        description: "Re-architected Meta's verification systems to support 1M+ weekly advertisers. Built scalable infrastructure handling massive concurrent loads with sub-second response times.",
        impact: "1M+ weekly users",
        tech: ["React", "Distributed Systems", "GraphQL"],
        type: "Meta",
    },
    {
        title: "Templatized Service Generator",
        icon: Settings,
        description: "Created an innovative code generation service in GoLang that automates boilerplate creation, significantly reducing engineering effort and ensuring consistency across projects.",
        impact: "Saved 100s of engineering hours",
        tech: ["GoLang", "Code Generation", "Templates"],
        type: "VMware",
    },
    {
        title: "CICD Pipeline Infrastructure",
        icon: GitBranch,
        description: "Led DevOps initiative to set up complete CICD pipeline infrastructure for the vSphere UI project. Automated testing, builds, and deployments for large-scale enterprise application.",
        impact: "Full automation pipeline",
        tech: ["Docker", "Kubernetes", "Jenkins", "Scripts"],
        type: "VMware",
    },
    {
        title: "This Portfolio",
        icon: Folder,
        description: "A modern, high-performance portfolio built with Next.js 16. Features premium glassmorphism design, dark/light themes, Framer Motion animations, and static export for GitHub Pages.",
        impact: "Open Source",
        tech: ["Next.js", "React", "Framer Motion", "CSS"],
        type: "Personal",
        links: {
            github: "https://github.com/varunjoshi91/varunjoshi.com",
        },
    },
];

export default function Projects() {
    return (
        <section id="projects" className={`section container ${styles.projects}`}>
            <motion.h2
                className="gradient-text section-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                Things I've Built
            </motion.h2>

            <div className={styles.grid}>
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        className={`${styles.card} glass-card`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardHeader}>
                            <project.icon size={32} className={styles.projectIcon} />
                            <div className={styles.links}>
                                <span className={styles.type}>{project.type}</span>
                                {project.links?.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link" className={styles.link}>
                                        <Github size={20} />
                                    </a>
                                )}
                                {project.links?.external && (
                                    <a href={project.links.external} target="_blank" rel="noopener noreferrer" aria-label="External Link" className={styles.link}>
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className={styles.title}>{project.title}</h3>
                        <p className={styles.description}>{project.description}</p>

                        <div className={styles.impact}>
                            <Zap size={14} />
                            <span>{project.impact}</span>
                        </div>

                        <ul className={styles.techList}>
                            {project.tech.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
