"use client";

import Link from 'next/link';
import { content } from '@/app/data/content';
import { Button } from '@/app/components/ui/Button';
import { Card, CardContent } from '@/app/components/ui/Card';
import { Section } from '@/app/components/ui/Section';
import { Bubble } from '@/app/components/Bubble';
import { motion, Variants, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Database, Cloud, Terminal } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Create parallax transforms for different depth layers
  const x1 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-30, 30]);
  const y1 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-30, 30]);

  const x2 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [20, -20]);
  const y2 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [20, -20]);

  const x3 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-15, 15]);
  const y3 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [15, -15]);

  const x4 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [40, -40]);
  const y4 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-40, 40]);

  // Extended Bubbles (x5-x12)
  const x5 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-25, 25]);
  const y5 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [10, -10]);

  const x6 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [35, -35]);
  const y6 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [30, -30]);

  const x7 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-50, 50]);
  const y7 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-20, 20]);

  const x8 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [20, -20]);
  const y8 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [45, -45]);
  
  const x9 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-45, 45]);
  const y9 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [15, -15]);

  const x10 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [30, -30]);
  const y10 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-35, 35]);

  const x11 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-20, 20]);
  const y11 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-25, 25]);

  const x12 = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [45, -45]);
  const y12 = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <Section className="flex flex-col items-start justify-center min-h-[85vh] gap-8 pt-32 pb-24 relative overflow-hidden">
        {/* Animated Antigravity Decorative Dots */}
        <motion.div style={{ x: x1, y: y1 }} className="absolute top-20 right-10 z-20">
          <Bubble color="#EA4335" size={12} opacity={0.8} duration={5} floatY={[0, -20, 0]} floatX={[0, 10, 0]} />
        </motion.div>
        <motion.div style={{ x: x2, y: y2 }} className="absolute top-40 left-0 z-20">
          <Bubble color="#4285F4" size={16} opacity={0.6} delay={1} duration={7} floatY={[0, 20, 0]} floatX={[0, -15, 0]} />
        </motion.div>
        <motion.div style={{ x: x3, y: y3 }} className="absolute bottom-10 right-1/4 z-20">
          <Bubble color="#34A853" size={14} opacity={0.7} delay={2} duration={6} floatY={[0, -15, 0]} floatX={[0, -10, 0]} />
        </motion.div>
        <motion.div style={{ x: x4, y: y4 }} className="absolute top-1/2 left-10 z-20">
          <Bubble color="#FBBC05" size={10} opacity={0.9} delay={3} duration={8} floatY={[0, 15, 0]} floatX={[0, 20, 0]} />
        </motion.div>
        
        {/* Additional Animated Antigravity Decorative Dots */}
        <motion.div style={{ x: x5, y: y5 }} className="absolute bottom-40 left-1/4 z-20">
          <Bubble color="#EA4335" size={8} opacity={0.7} delay={1.5} duration={7.5} floatY={[0, 15, 0]} floatX={[0, -15, 0]} />
        </motion.div>
        <motion.div style={{ x: x6, y: y6 }} className="absolute top-1/4 right-1/3 z-20">
          <Bubble color="#4285F4" size={16} opacity={0.5} delay={0.5} duration={6.5} floatY={[0, -25, 0]} floatX={[0, 20, 0]} />
        </motion.div>
        <motion.div style={{ x: x7, y: y7 }} className="absolute bottom-20 left-10 z-20">
          <Bubble color="#34A853" size={14} opacity={0.65} delay={2.5} duration={5.5} floatY={[0, 20, 0]} floatX={[0, 10, 0]} />
        </motion.div>
        <motion.div style={{ x: x8, y: y8 }} className="absolute top-32 right-1/4 z-20">
          <Bubble color="#FBBC05" size={10} opacity={0.85} delay={1.2} duration={8.5} floatY={[0, -10, 0]} floatX={[0, -20, 0]} />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={STAGGER}
          className="space-y-4 relative z-10 w-full"
        >
          <motion.h1
            variants={FADE_UP}
            className="text-5xl md:text-7xl font-semibold tracking-tighter text-foreground"
          >
            Hi, I&apos;m {content.profile.name}.
          </motion.h1>
          <motion.p
            variants={FADE_UP}
            className="text-2xl md:text-3xl text-muted-foreground font-normal max-w-2xl tracking-tight"
          >
            {content.profile.tagline}
          </motion.p>

          <motion.div variants={FADE_UP} className="flex flex-col gap-6 max-w-2xl mt-8">
            {content.profile.bio.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <p className="text-lg font-medium text-foreground">
              {content.profile.callToAction}
            </p>
          </motion.div>

          <motion.div variants={FADE_UP} className="flex gap-4 pt-8 mt-4 relative z-20">
            <Link href="/contact" className="relative group inline-block">
              {/* Premium Background Glow */}
              <div className="absolute -inset-0.5 bg-[#4285F4] rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
              
              <Button size="lg" className="relative rounded-full px-8 bg-background border-border border text-foreground font-semibold tracking-wide hover:bg-muted/50 transition-colors">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator - Theme Aware & Responsive */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: theme === 'light' ? 1 : 0.5 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-0 right-0 hidden lg:flex flex-col items-center gap-2 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-foreground/50 flex justify-center p-1"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 rounded-full bg-[#4285F4]"
              />
            </motion.div>
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-foreground/50">Scroll</span>
          </motion.div>
        )}
      </Section>

      <Section id="experience" className="py-12 relative flex flex-col items-center">
        <div className="space-y-24 max-w-3xl w-full">

          {/* Professional Summary */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-[#202124] border-b border-gray-200 pb-2 mb-6 flex items-center gap-2">
              <Terminal className="text-[#4285F4] w-6 h-6" /> Professional Summary
            </h2>
            <p className="text-lg leading-relaxed text-[#5F6368]">
              Software Engineer with 5+ years of experience building scalable, secure, and high-performance applications. Experienced in microservices architecture, backend systems, distributed services, and cloud-native deployments. Skilled in Java, AWS, Docker, Kubernetes, and CI/CD pipelines, with a focus on designing reliable and scalable backend platforms.
            </p>
          </motion.div> */}

          {/* Technical Skills w/ Bubbles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Extended Bubbles Section 1 */}
            <motion.div style={{ x: x5, y: y5 }} className="absolute -top-10 -left-10 md:-left-20 z-20">
              <Bubble color="#EA4335" size={8} opacity={0.7} delay={1.5} duration={7.5} floatY={[0, 15, 0]} floatX={[0, -15, 0]} />
            </motion.div>
            <motion.div style={{ x: x6, y: y6 }} className="absolute -bottom-10 -right-5 md:-right-16 z-20">
              <Bubble color="#4285F4" size={16} opacity={0.5} delay={0.5} duration={6.5} floatY={[0, -25, 0]} floatX={[0, 20, 0]} />
            </motion.div>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground border-b border-border pb-2 mb-6 flex items-center gap-2">
              <Code2 className="text-[#34A853] w-6 h-6" /> Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { category: 'Languages', skills: ['Java', 'Python', 'JavaScript'], icon: <Code2 className="w-5 h-5 text-muted-foreground" /> },
                { category: 'Backend & APIs', skills: ['Spring Boot', 'gRPC', 'Flask', 'REST'], icon: <Terminal className="w-5 h-5 text-muted-foreground" /> },
                { category: 'Cloud & Infra', skills: ['AWS', 'Docker', 'Kubernetes', 'EKS'], icon: <Cloud className="w-5 h-5 text-muted-foreground" /> },
                { category: 'DevOps & CI/CD', skills: ['GitHub Actions', 'ArgoCD'], icon: <Database className="w-5 h-5 text-muted-foreground" /> },
                { category: 'Databases', skills: ['PostgreSQL', 'MySQL'], icon: <Database className="w-5 h-5 text-muted-foreground" /> },
              ].map((group, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card rounded-2xl p-5 border border-transparent hover:border-border transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {group.icon}
                    <h3 className="font-semibold text-foreground">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-background text-foreground border border-border/50 font-medium text-sm rounded-full shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Experience (Timeline) w/ Bubbles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Extended Bubbles Section 2 */}
            <motion.div style={{ x: x7, y: y7 }} className="absolute top-1/4 -left-12 md:-left-24 z-20">
              <Bubble color="#34A853" size={14} opacity={0.65} delay={2.5} duration={5.5} floatY={[0, 20, 0]} floatX={[0, 10, 0]} />
            </motion.div>
            <motion.div style={{ x: x8, y: y8 }} className="absolute inset-y-1/2 -right-8 md:-right-20 z-20">
              <Bubble color="#FBBC05" size={10} opacity={0.85} delay={1.2} duration={8.5} floatY={[0, -10, 0]} floatX={[0, -20, 0]} />
            </motion.div>
            <motion.div style={{ x: x9, y: y9 }} className="absolute bottom-1/4 -left-8 md:-left-16 z-20">
              <Bubble color="#EA4335" size={12} opacity={0.75} duration={6} floatY={[0, -20, 0]} floatX={[0, 15, 0]} />
            </motion.div>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground border-b border-border pb-2 mb-8 flex items-center gap-2">
              <Briefcase className="text-[#EA4335] w-6 h-6" /> Experience
            </h2>

            <div className="relative border-l-2 border-border ml-3 space-y-12">

              {/* FICO */}
              <motion.div whileHover={{ x: 5 }} className="relative pl-8 group">
                <div className="absolute w-4 h-4 rounded-full bg-[#EA4335] -left-[9px] top-1.5 ring-4 ring-background group-hover:scale-125 transition-transform" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">Software Engineer 2 <span className="text-muted-foreground font-medium">| FICO</span></h3>
                  <span className="text-sm font-semibold tracking-widest text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full uppercase border border-border/50">Mar 2025 – Present</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-1">📍 Bengaluru, India</p>
                <div className="bg-card rounded-2xl p-6 group-hover:shadow-md transition-shadow border border-border/50">
                  <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground leading-relaxed">
                    <li>Engineered scalable backend microservices to support high-throughput, mission-critical production workloads.</li>
                    <li>Orchestrated containerized application deployments leveraging Docker and Kubernetes in robust cloud-native environments.</li>
                    <li>Collaborated tightly with principal architects and product squads to design and deliver future-proof backend platforms.</li>
                    <li>Drove critical system reliability and performance improvements via deep architectural refactoring and rigorous load testing.</li>
                    <li>Integrated diverse backend services with REST APIs, high-volume messaging queues, relational databases, and third-party SaaS platforms.</li>
                    <li>Built and maintained zero-downtime CI/CD pipelines for automated testing, build, and seamless deployment.</li>
                  </ul>
                </div>
              </motion.div>

              {/* OpenText */}
              <motion.div whileHover={{ x: 5 }} className="relative pl-8 group">
                <div className="absolute w-4 h-4 rounded-full bg-border -left-[9px] top-1.5 ring-4 ring-background group-hover:bg-[#4285F4] transition-colors" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">Software Engineer 2 <span className="text-muted-foreground font-medium">| OpenText</span></h3>
                  <span className="text-sm font-semibold tracking-widest text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full uppercase border border-border/50">Jan 2024 – Feb 2025</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-1">📍 Bengaluru, India</p>
                <div className="bg-card rounded-2xl p-6 group-hover:shadow-md transition-shadow border border-border/50">
                  <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground leading-relaxed">
                    <li>Developed and scaled complex features for the flagship Enterprise Content Manager platform.</li>
                    <li>Optimized critical frontend and backend services to substantially enhance product capabilities and user retention.</li>
                    <li>Partnered with global cross-functional teams to reliably deliver enterprise-grade scalable solutions to enterprise clients.</li>
                  </ul>
                </div>
              </motion.div>

              {/* Epsilon */}
              <motion.div whileHover={{ x: 5 }} className="relative pl-8 group">
                <div className="absolute w-4 h-4 rounded-full bg-border -left-[9px] top-1.5 ring-4 ring-background group-hover:bg-[#34A853] transition-colors" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">Software Engineer <span className="text-muted-foreground font-medium">| Epsilon</span></h3>
                  <span className="text-sm font-semibold tracking-widest text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full uppercase border border-border/50">Jan 2021 – Jan 2024</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-1">📍 Bengaluru, India</p>
                <div className="bg-card rounded-2xl p-6 group-hover:shadow-md transition-shadow border border-border/50">
                  <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground leading-relaxed">
                    <li>Built extremely scalable full-stack data applications using Angular, Python (Flask/FastAPI), and deep PostgreSQL integrations.</li>
                    <li>Spearheaded deployments of containerized data aggregation applications utilizing Docker and Kubernetes clusters.</li>
                    <li>Architected deep API integrations and backend interconnects to enhance core platform functionality and user insights.</li>
                    <li>Conducted rigorous QA testing, deeply technical debugging sessions, and query performance optimizations to ensure 99.9% uptime.</li>
                  </ul>
                </div>
              </motion.div>

              {/* KLA */}
              <motion.div whileHover={{ x: 5 }} className="relative pl-8 group">
                <div className="absolute w-4 h-4 rounded-full bg-border -left-[9px] top-1.5 ring-4 ring-background group-hover:bg-[#FBBC05] transition-colors" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">Software Engineer Intern <span className="text-muted-foreground font-medium">| KLA</span></h3>
                  <span className="text-sm font-semibold tracking-widest text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full uppercase border border-border/50">May 2020 – Jun 2020</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-1">📍 Chennai, India</p>
                <div className="bg-card rounded-2xl p-6 group-hover:shadow-md transition-shadow border border-border/50">
                  <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground leading-relaxed">
                    <li>Developed DUPLICA, an innovative Visual Studio extension built to accurately detect duplicate code segments recursively across extremely large codebases.</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education w/ Bubbles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Extended Bubbles Section 3 */}
            <motion.div style={{ x: x10, y: y10 }} className="absolute -top-5 -right-6 md:-right-12 z-20">
              <Bubble color="#4285F4" size={16} opacity={0.55} delay={0.8} duration={7} floatY={[0, 25, 0]} floatX={[0, -20, 0]} />
            </motion.div>
            <motion.div style={{ x: x11, y: y11 }} className="absolute top-1/2 -left-10 md:-left-16 z-20">
              <Bubble color="#FBBC05" size={14} opacity={0.8} delay={2.1} duration={5.8} floatY={[0, -15, 0]} floatX={[0, 10, 0]} />
            </motion.div>
            <motion.div style={{ x: x12, y: y12 }} className="absolute -bottom-8 right-1/4 z-20">
              <Bubble color="#34A853" size={10} opacity={0.6} delay={3.4} duration={8.2} floatY={[0, 15, 0]} floatX={[0, 25, 0]} />
            </motion.div>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground border-b border-border pb-2 mb-8 flex items-center gap-2">
              <GraduationCap className="text-[#FBBC05] w-6 h-6" /> Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-card rounded-2xl p-6 border border-border/50 transition-colors">
                <h3 className="text-lg font-bold text-foreground">Master of Computer Applications (MCA)</h3>
                <p className="text-muted-foreground mt-2 mb-4">National Institute of Technology Karnataka, Surathkal</p>
                <span className="text-sm font-semibold tracking-widest text-muted-foreground font-mono bg-background px-3 py-1 rounded-full border border-border uppercase">2018 – 2021</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="bg-card rounded-2xl p-6 border border-border/50 transition-colors">
                <h3 className="text-lg font-bold text-foreground">Bachelor of Science (B.Sc)</h3>
                <p className="text-muted-foreground mt-2 mb-4">University of Delhi</p>
                <span className="text-sm font-semibold tracking-widest text-muted-foreground font-mono bg-background px-3 py-1 rounded-full border border-border uppercase">2014 – 2017</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </Section>
    </div>
  );
}
