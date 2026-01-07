import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Mentorship from "../components/Mentorship";
import Contact from "../components/Contact";
import styles from "./page.module.css";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Mentorship />
      <Contact />

      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>
            Built with <Heart size={14} className={styles.heart} /> using Next.js & Framer Motion
          </p>
          <div className={styles.socialsFooter}>
            <a href="https://github.com/varunjoshi91" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/varunjoshi91/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:hello@varunjoshi.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
          <p className={styles.copyright}>© 2026 Varun Joshi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
