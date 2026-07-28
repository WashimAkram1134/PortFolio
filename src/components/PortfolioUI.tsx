"use client";

import styles from "../app/page.module.css";
import { 
  User, 
  Grid3x3, 
  Mail, 
  Download,
  Star,
  ArrowRight,
  ArrowUpRight,
  FileText,
  Cpu, ScanEye, Globe, Server, Code2, BrainCircuit, Layers, Zap, Microscope
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), { ssr: false });

import React, { useState } from "react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={18} className={styles.badgeIcon} />,
  ScanEye: <ScanEye size={18} className={styles.badgeIcon} />,
  Globe: <Globe size={18} className={styles.badgeIcon} />,
  Server: <Server size={18} className={styles.badgeIcon} />,
  Code2: <Code2 size={18} className={styles.badgeIcon} />,
  BrainCircuit: <BrainCircuit size={18} className={styles.badgeIcon} />,
  Layers: <Layers size={18} className={styles.badgeIcon} />,
  Zap: <Zap size={18} className={styles.badgeIcon} />,
  Microscope: <Microscope size={18} className={styles.badgeIcon} />
};

export default function PortfolioUI({ skills, projects, publications }: { skills: any[], projects: any[], publications: any[] }) {
  const [showEmail, setShowEmail] = useState(false);
  const roleSkills = skills.filter(s => s.category === "Role");
  const techSkills = skills.filter(s => s.category === "Technology");

  return (
    <main className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}></div>
        
        <div className={styles.navLinks}>
          <Link href="#about" className={styles.navLink}>
            <User size={18} className={styles.navLinkIcon} />
            <span>About</span>
          </Link>
          <Link href="#experience" className={styles.navLink}>
            <Grid3x3 size={18} className={styles.navLinkIcon} />
            <span>Experience</span>
          </Link>
          <Link href="#contact" className={styles.navLink}>
            <Mail size={18} className={styles.navLinkIcon} />
            <span>Contact</span>
          </Link>
        </div>

        <div className={styles.socialLinks}>
          <Link href="https://github.com/WashimAkram1134" target="_blank" className={styles.socialIcon}>
            <GithubIcon size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/washim-akram-a60a72361/" target="_blank" className={styles.socialIcon}>
            <LinkedinIcon size={24} />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className={styles.hero} id="about"
        initial="hidden" animate="visible" variants={fadeUpVariant}
      >
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.nameHighlight}>Washim Akram</span>
        </h1>
        
        <h2 className={styles.subtitle}>
          AI Engineer <span>•</span> ML Engineer <span>•</span> Software Engineer
        </h2>
        
        <p className={styles.description}>
          I build intelligent systems that automate workflows, 
          power user experiences, and leverage AI innovation.
        </p>

        <div className={styles.heroActions}>
          <Link href="#experience">
            <button className={styles.primaryBtn}>
              <Grid3x3 size={20} />
              View Projects
            </button>
          </Link>
          <a href="/resume.pdf" download="Washim_Akram_Resume.pdf" className={styles.secondaryBtn}>
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </motion.section>

      {/* Badges Section */}
      <motion.section 
        className={styles.badgesContainer}
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
      >
        <div className={styles.badgeRow}>
          {roleSkills.map(skill => (
            <div key={skill.name} className={styles.badge}>
              {iconMap[skill.icon]} {skill.name}
            </div>
          ))}
        </div>
        
        <div className={styles.badgeRow}>
          {techSkills.map(skill => (
            <div key={skill.name} className={styles.badge}>
              {iconMap[skill.icon]} {skill.name}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <section className={styles.experienceSection} id="experience">
        <motion.h2 
          className={styles.sectionTitle}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        >
          Experience
        </motion.h2>
        <motion.p 
          className={styles.sectionDesc}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        >
          A collection of my key projects and research work that showcase 
          my skills and passion for building intelligent solutions.
        </motion.p>

        <motion.div 
          className={styles.featuredHeader}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        >
          <div className={styles.featuredTitle}>
            <div className={styles.featuredIconWrapper}>
              <Star size={20} />
            </div>
            Featured Projects
          </div>
          <Link href="#" className={styles.viewAll}>
            View All Projects <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div key={project.id} className={styles.projectCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              <div className={styles.projectImage}>
                <Image src={project.image_url} alt={project.title} width={500} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} priority={index === 0} />
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectTitleRow}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  {project.is_featured && <span className={styles.featuredBadge}>Featured</span>}
                </div>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech_stack.map((tech: string) => (
                    <span key={tech} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <Link href={project.live_url || "#"} className={styles.projectLink}>Live Demo <ArrowUpRight size={14}/></Link>
                  <Link href={project.github_url || "#"} className={styles.projectLink}>GitHub <ArrowUpRight size={14}/></Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lower Grid (Research & Github) */}
        <div className={styles.lowerGrid}>
          {/* Research Box */}
          {publications && publications.length > 0 && (
            <motion.div className={styles.infoCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconWrapper}><FileText size={20} color="var(--primary)"/></div>
                Research & Publication
              </div>
              <div style={{ maxHeight: '300px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.5rem' }}>
                {publications.map((pub, idx) => (
                  <div key={idx} className={styles.publicationBox}>
                    <div className={styles.pubTitleRow}>
                      <div className={styles.pubTitle}>{pub.title}</div>
                      <span className={pub.status === 'Ongoing' ? styles.ongoingBadge : styles.completedBadge}>
                        {pub.status}
                      </span>
                    </div>
                    <div className={styles.pubDetail}>Tech: {pub.tech}</div>
                    <div className={styles.pubDetail}>Metrics: {pub.metrics}</div>
                    <Link href={pub.url || "#"} className={styles.projectLink} style={{marginTop: '1rem'}}>
                      View Details <ArrowUpRight size={14}/>
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Github Stats */}
          <motion.div className={styles.infoCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <div className={styles.cardHeader}>
              <GithubIcon size={24} />
              Live GitHub Statistics
            </div>
            
            {/* The Live Calendar */}
            <div style={{ marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              <GitHubCalendar 
                username="WashimAkram1134" 
                colorScheme="light"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
              />
            </div>

            <Link href="https://github.com/WashimAkram1134" target="_blank" className={styles.projectLink}>
              View GitHub Profile <ArrowUpRight size={14}/>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection} id="contact">
        <motion.h2 
          className={styles.contactTitle}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        >
          Let&apos;s Work Together
        </motion.h2>
        <motion.p 
          className={styles.contactDesc}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        >
          I&apos;m always excited to collaborate, innovate, and build meaningful solutions.
          Whether you have a project, a job opportunity, or just want to connect —
          let&apos;s talk!
        </motion.p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <motion.a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=washimakram013099@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            onClick={() => setShowEmail(true)}
          >
            <Mail size={18} />
            Get in Touch
          </motion.a>
          {showEmail && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 600 }}
            >
              washimakram013099@gmail.com
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div>© 2026 Washim Akram. All rights reserved.</div>
      </footer>
    </main>
  );
}
