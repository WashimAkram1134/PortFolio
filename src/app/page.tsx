"use client";

import styles from "./page.module.css";
import { 
  User, 
  Grid3x3, 
  Mail, 
  Download,
  Cpu,
  ScanEye,
  Globe,
  Server,
  Code2,
  BrainCircuit,
  Layers,
  Zap,
  Microscope,
  Briefcase,
  Star,
  ArrowRight,
  ArrowUpRight,
  FileText
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>Washim <span className={styles.nameHighlight}>Akram</span></div>
        
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
          <Link href="https://linkedin.com/" target="_blank" className={styles.socialIcon}>
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
          AI Engineer <span>•</span> Machine Learning Researcher <span>•</span> Software Engineer
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
          <button className={styles.secondaryBtn}>
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </motion.section>

      {/* Badges Section */}
      <motion.section 
        className={styles.badgesContainer}
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
      >
        <div className={styles.badgeRow}>
          <div className={styles.badge}><Cpu size={18} className={styles.badgeIcon} /> AI Engineer</div>
          <div className={styles.badge}><ScanEye size={18} className={styles.badgeIcon} /> Computer Vision</div>
          <div className={styles.badge}><Globe size={18} className={styles.badgeIcon} /> GIS & Remote Sensing</div>
          <div className={styles.badge}><Server size={18} className={styles.badgeIcon} /> Backend Developer</div>
        </div>
        
        <div className={styles.badgeRow}>
          <div className={styles.badge}><Code2 size={18} className={styles.badgeIcon} /> Python</div>
          <div className={styles.badge}><BrainCircuit size={18} className={styles.badgeIcon} /> Machine Learning</div>
          <div className={styles.badge}><Layers size={18} className={styles.badgeIcon} /> Laravel</div>
          <div className={styles.badge}><Zap size={18} className={styles.badgeIcon} /> FastAPI</div>
          <div className={styles.badge}><Microscope size={18} className={styles.badgeIcon} /> Researcher</div>
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

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {/* Project 1 */}
          <motion.div className={styles.projectCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <div className={styles.projectImage}>
              <Image src="/images/ai based crop suitability.png" alt="AI Crop Suitability" width={500} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectTitleRow}>
                <h3 className={styles.projectTitle}>AI-Based Crop Suitability</h3>
                <span className={styles.featuredBadge}>Featured</span>
              </div>
              <p className={styles.projectDesc}>Predicting crop suitability using GIS, Remote Sensing and Historical Agricultural Data.</p>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>Python</span>
                <span className={styles.techBadge}>ML</span>
                <span className={styles.techBadge}>GIS</span>
                <span className={styles.techBadge}>Remote Sensing</span>
              </div>
              <div className={styles.projectLinks}>
                <Link href="#" className={styles.projectLink}>Live Demo <ArrowUpRight size={14}/></Link>
                <Link href="#" className={styles.projectLink}>GitHub <ArrowUpRight size={14}/></Link>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div className={styles.projectCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <div className={styles.projectImage}>
              <Image src="/images/campusbuddy.png" alt="CampusBuddy" width={500} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectTitleRow}>
                <h3 className={styles.projectTitle}>CampusBuddy</h3>
              </div>
              <p className={styles.projectDesc}>A university collaboration platform with routine, notes, community, alumni and question bank.</p>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>Laravel</span>
                <span className={styles.techBadge}>PHP</span>
                <span className={styles.techBadge}>MySQL</span>
                <span className={styles.techBadge}>Filament</span>
              </div>
              <div className={styles.projectLinks}>
                <Link href="#" className={styles.projectLink}>Live Demo <ArrowUpRight size={14}/></Link>
                <Link href="#" className={styles.projectLink}>GitHub <ArrowUpRight size={14}/></Link>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div className={styles.projectCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <div className={styles.projectImage}>
              <Image src="/images/renthub.png" alt="RentHub" width={500} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectTitleRow}>
                <h3 className={styles.projectTitle}>RentHub</h3>
              </div>
              <p className={styles.projectDesc}>Rental marketplace for vehicles, apartments, electronics, furniture, books and more.</p>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>Laravel</span>
                <span className={styles.techBadge}>PHP</span>
                <span className={styles.techBadge}>MySQL</span>
                <span className={styles.techBadge}>REST API</span>
              </div>
              <div className={styles.projectLinks}>
                <Link href="#" className={styles.projectLink}>Live Demo <ArrowUpRight size={14}/></Link>
                <Link href="#" className={styles.projectLink}>GitHub <ArrowUpRight size={14}/></Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lower Grid (Research & Github) */}
        <div className={styles.lowerGrid}>
          {/* Research Box */}
          <motion.div className={styles.infoCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrapper}><FileText size={20} color="var(--primary)"/></div>
              Research & Publication
            </div>
            <div className={styles.publicationBox}>
              <div className={styles.pubTitleRow}>
                <div className={styles.pubTitle}>Object Detection in Adverse Weather Using YOLO and Explainable AI</div>
                <span className={styles.completedBadge}>Completed</span>
              </div>
              <div className={styles.pubDetail}>Tech: YOLOv11, PyTorch, OpenCV, XAI</div>
              <div className={styles.pubDetail}>Metrics: mAP50, Precision, Recall, F1-score</div>
              <Link href="#" className={styles.projectLink} style={{marginTop: '1rem'}}>
                View Details <ArrowUpRight size={14}/>
              </Link>
            </div>
          </motion.div>

          {/* Github Stats */}
          <motion.div className={styles.infoCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <div className={styles.cardHeader}>
              <GithubIcon size={24} />
              GitHub Statistics
            </div>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Total Repositories</span>
                <span className={styles.statValue}>25+</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Total Commits</span>
                <span className={styles.statValue}>800+</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Contributions</span>
                <span className={styles.statValue}>500+</span>
              </div>
            </div>
            <Image src="/images/github.png" alt="Github Graph" width={500} height={100} className={styles.githubGraphImage} />
            <Link href="https://github.com/WashimAkram1134" target="_blank" className={styles.projectLink}>
              View GitHub Profile <ArrowUpRight size={14}/>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div>© 2026 Washim Akram. All rights reserved.</div>
        <div className={styles.footerRight}>
          Built with ❤️ using Next.js, CSS Modules & Framer Motion
        </div>
      </footer>
    </main>
  );
}
