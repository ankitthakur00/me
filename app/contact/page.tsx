'use client';

import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import { Section } from '@/app/components/ui/Section';
import { Mail, Twitter, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Bubble } from '@/app/components/Bubble';

const contact = [
  {
    method: 'Email',
    link: 'mailto:contactankitthakur@gmail.com',
    label: 'contactankitthakur@gmail.com',
    icon: <Mail className="w-6 h-6" />,
    color: 'text-[#EA4335]',
  },
  {
    method: 'Twitter',
    link: 'https://twitter.com/ankitthakur00',
    label: '@ankitthakur00',
    icon: <Twitter className="w-6 h-6" />,
    color: 'text-[#1DA1F2]',
  },
  {
    method: 'GitHub',
    link: 'https://github.com/ankitthakur00',
    label: 'git/ankitthakur00',
    icon: <Github className="w-6 h-6" />,
    color: 'text-foreground',
  },
  {
    method: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ankitthakur00/',
    label: 'in/ankitthakur00',
    icon: <Linkedin className="w-6 h-6" />,
    color: 'text-[#4285F4]',
  },
];

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function InfoPage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const x1 = useTransform(smoothX, [0, 1920], [20, -20]);
  const y1 = useTransform(smoothY, [0, 1080], [10, -10]);
  const x2 = useTransform(smoothX, [0, 1920], [-30, 30]);
  const y2 = useTransform(smoothY, [0, 1080], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen relative overflow-hidden">
      {/* Decorative Bubbles */}
      <motion.div style={{ x: x1, y: y1 }} className="absolute top-20 right-[15%] pointer-events-none opacity-20 hidden md:block z-20">
        <Bubble color="#4285F4" size={256} opacity={0.2} floatY={[0, -20, 0]} floatX={[0, 10, 0]} duration={5} />
      </motion.div>
      <motion.div style={{ x: x2, y: y2 }} className="absolute bottom-40 left-[10%] pointer-events-none opacity-20 hidden md:block z-20">
        <Bubble color="#EA4335" size={192} opacity={0.2} floatY={[0, 20, 0]} floatX={[0, -15, 0]} duration={7} />
      </motion.div>

      <Section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={STAGGER}
            className="space-y-12"
          >
            <motion.div variants={FADE_UP}>
              <PageHeader title="Get In Touch" />
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4">
                Whether you have a question about backend architecture, want to collaborate on a project, or just want to say hi, I&apos;d love to hear from you.
              </p>
            </motion.div>

            <motion.div variants={FADE_UP} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {contact.map((item) => (
                <Link key={item.method} href={item.link} className="group">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-card border border-border/50 p-8 rounded-3xl group-hover:border-border group-hover:shadow-xl transition-all h-full flex items-start gap-6"
                  >
                    <div className={`p-4 rounded-2xl bg-background border border-border/40 ${item.color} group-hover:scale-110 transition-transform shadow-inner`}>
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <Title as="h2" variant="tertiary" className="text-foreground flex items-center gap-2">
                        {item.method}
                        <MessageCircle className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      </Title>
                      <p className="text-muted-foreground font-medium group-hover:text-primary transition-colors break-all">
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            <motion.div variants={FADE_UP} className="pt-12 border-t border-border flex flex-col items-center text-center space-y-4">
              <h3 className="text-3xl font-bold tracking-tight text-foreground">Let&apos;s build something great.</h3>
              <p className="text-muted-foreground max-w-lg">
                I am currently open to new opportunities and interesting projects in Bengaluru or remote.
              </p>
              <Link href="mailto:contactankitthakur@gmail.com" className="mt-4 inline-block">
                <button className="px-10 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-lg">
                  Shoot an Email
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
