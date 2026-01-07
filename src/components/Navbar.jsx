"use client";

import { useTheme } from "../app/ThemeContext";
import styles from "./Navbar.module.css";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={styles.logo}
                    role="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    VJ
                </motion.div>

                <div className={styles.links}>
                    {["About", "Experience", "Skills", "Projects", "Contact"].map((item, i) => (
                        <motion.button
                            key={item}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className={styles.link}
                        >
                            {item}
                        </motion.button>
                    ))}

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className={styles.themeToggle}
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.button>
                </div>
            </div>
        </nav>
    );
}
