import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import {
  Briefcase,
  ShieldCheck,
  Terminal,
  MapPin,
  Clock,
  Menu,
  X,
  Mail,
  ExternalLink,
  FolderGit2,
  Sun,
  Moon,
  Download,
  ChevronUp,
} from "lucide-react";

// ─── Brand Icons ─────────────────────────────────────────────────────────────

function GitHubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── FadeIn component ─────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Typewriter component ─────────────────────────────────────────────────────

const TYPEWRITER_STRINGS = [
  "Aspiring SOC Analyst",
  "Cybersecurity Intern @ Log(N) Pacific",
  "B.S. Cybersecurity Student @ WGU",
];

function Typewriter({ strings, speed = 75 }: { strings: string[]; speed?: number }) {
  const [text, setText] = useState(strings[0]);
  const [loopIdx, setLoopIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[loopIdx % strings.length];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopIdx((i) => i + 1);
    } else {
      timer = setTimeout(
        () =>
          setText(
            isDeleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          ),
        isDeleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIdx, strings, speed]);

  return (
    <span>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle animate-pulse" />
    </span>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const experienceData = [
  {
    title: "Cyber Security Support Analyst Intern",
    company: "Log(N) Pacific",
    duration: "Mar 2025 – Present",
    location: "Remote",
    bullets: [
      "Conducted vulnerability scans, detailed reports, and PowerShell-based remediations — contributing to a 100% reduction in critical, 90% in high, and 76% in medium vulnerabilities for the server team",
      "Performed vulnerability assessments and risk prioritization using Tenable across Windows and Linux environments",
      "Executed secure configurations and compliance audits (DISA STIG) with Tenable to meet industry standards",
      "Automated remediation processes and STIG implementations via PowerShell to address critical vulnerabilities at scale",
    ],
  },
  {
    title: "AI Trainer – Handshake AI Fellowship",
    company: "Handshake AI",
    duration: "Jan 2026 – Present",
    location: "Remote",
    bullets: [
      "Develop and evaluate domain-specific prompts to assess large language model (LLM) performance",
      "Analyze LLM outputs for scientific accuracy, clarity, and depth in specialized subfields",
      "Contribute to improving AI understanding of complex topics through expert review and feedback",
      "Conduct independent research to support prompt development and evaluation tasks",
    ],
  },
];

const projectsData = [
  {
    title: "Vulnerability Management & Threat Hunting",
    tech: ["Tenable (Nessus)", "Azure VMs", "PowerShell", "Windows Server"],
    bullets: [
      "Designed enterprise vulnerability management program reducing vulnerabilities by 85% (34 → 5) across Windows Server infrastructure",
      "Developed PowerShell scripts for automated remediation of insecure protocols, weak ciphers, and privilege escalation vulnerabilities",
      "Established policy buy-in and coordinated with Change Advisory Board for deployment",
    ],
    github: "https://github.com/Tohru-art/Vulnerability-Management-Progran",
  },
  {
    title: "KQL Detection Library",
    tech: ["KQL", "Microsoft Sentinel", "Microsoft Defender for Endpoint", "MITRE ATT&CK"],
    bullets: [
      "Built a library of production-ready KQL detection rules for Microsoft Sentinel and MDE, each mapped to MITRE ATT&CK techniques",
      "Included inline query logic, severity recommendations, and environment-specific tuning notes for each rule",
      "Designed for SOC teams implementing threat detection across Microsoft cloud security ecosystems",
    ],
    github: "https://github.com/Tohru-art/kql-detection-library",
  },
  {
    title: "Personal Portfolio Website",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    bullets: [
      "Designed and launched a personal portfolio to showcase cybersecurity projects, certifications, and hands-on labs",
      "Integrated detailed breakdowns of technical skills and completed labs to highlight readiness for cybersecurity roles",
    ],
    github: "https://github.com/Tohru-art/Portfolio",
  },
];

const skillsData = [
  {
    category: "Programming & Scripting",
    items: ["Python", "Java", "JavaScript", "HTML", "CSS", "Bash"],
  },
  {
    category: "Security Tools",
    items: ["Microsoft Sentinel (SIEM)", "Defender for Endpoint (EDR)", "Tenable / Nessus", "KQL (Kusto Query Language)", "Microsoft Azure", "Git"],
  },
  {
    category: "Cybersecurity",
    items: ["Threat Detection", "Incident Response", "Vulnerability Management", "Security Controls", "Intrusion Detection", "Firewall Management"],
  },
  {
    category: "Operating Systems",
    items: ["Linux (Ubuntu)", "Windows", "macOS"],
  },
];

const certsData = [
  {
    name: "Security+",
    issuer: "CompTIA exam covering core blue team skills",
    status: "In Progress",
    color: "blue" as const,
  },
  {
    name: "CompTIA A+",
    issuer: "CompTIA foundational IT and hardware certification",
    status: "In Progress",
    color: "blue" as const,
  },
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Covers analyst skills, security tools, ethics, and attack impact",
    status: "Completed",
    color: "green" as const,
  },
  {
    name: "Google IT Support",
    issuer: "Coursera-backed cert for troubleshooting & support",
    status: "Completed",
    color: "green" as const,
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
];


// ─── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("");
  const [showTop, setShowTop] = useState(false);

  // Theme init
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  // Active nav section tracking
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Back-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <>
      <Head>
        <title>Will-Garlens Pierre | Cybersecurity Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Will-Garlens Pierre — B.S. Cybersecurity student at WGU, SOC Analyst Intern at Log(N) Pacific, and aspiring security professional."
        />
        <meta property="og:title" content="Will-Garlens Pierre | Cybersecurity Portfolio" />
        <meta
          property="og:description"
          content="B.S. Cybersecurity student at WGU, SOC Analyst Intern, aspiring security professional."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-[#111111] text-gray-900 dark:text-white font-sans transition-colors duration-300">

        {/* ── Sticky Nav ─────────────────────────────────────────────────── */}
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between h-16">
            <span
              className="text-xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              WP
            </span>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-gray-900 dark:text-white font-semibold"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Will-Garlens Pierre Resume.pdf"
                download
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
              >
                Resume <Download size={13} />
              </a>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-800 px-4 pb-4 bg-white dark:bg-[#111111]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Will-Garlens Pierre Resume.pdf"
                download
                className="block py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Resume ↓
              </a>
            </div>
          )}
        </nav>

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <header className="container mx-auto pt-12 pb-10 flex flex-col items-center text-center px-4">
          <FadeIn delay={0}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl scale-150" />
              <div className="relative p-[3px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
                <div className="w-32 h-32 relative rounded-full overflow-hidden">
                  <Image
                    src="/avatar-v2.png"
                    alt="Will-Garlens Pierre"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="mt-5">
            <h1
              className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Hi, I&apos;m Will-Garlens
            </h1>
          </FadeIn>

          <FadeIn delay={250} className="mt-2">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              <Typewriter strings={TYPEWRITER_STRINGS} />
            </p>
          </FadeIn>

          <FadeIn delay={350} className="mt-1">
            <p className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-1 justify-center">
              <MapPin size={14} /> Brooklyn, NY
            </p>
          </FadeIn>

          <FadeIn delay={400} className="mt-5">
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/Tohru-art"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <GitHubIcon size={22} />
              </a>
              <a
                href="https://linkedin.com/in/will-garlens-pierre"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <LinkedInIcon size={22} />
              </a>

              <a
                href="mailto:willgarlensp@gmail.com"
                aria-label="Email Will-Garlens"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={560} className="mt-6">
            <a
              href="/Will-Garlens Pierre Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              <Download size={15} /> Download Resume
            </a>
          </FadeIn>
        </header>

        {/* ── About ──────────────────────────────────────────────────────── */}
        <section id="about" className="bg-white dark:bg-[#111111] border-t border-gray-100 dark:border-gray-800/50 py-14 scroll-mt-16 transition-colors duration-300">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Right now, I work as a SOC Analyst Intern at Log(N) Pacific, where I handle threat
                detection, vulnerability management, and incident response on a daily basis. I have
                used tools such as Microsoft Sentinel, Tenable Nessus, and PowerShell to reduce
                vulnerabilities across Azure environments. That hands-on experience gave me a real
                appreciation for how important it is not just to find problems but to communicate
                them clearly to the people who can act on them. That is something I take seriously.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                Alongside my SOC work, I have been doing AI data annotation and model evaluation
                through a Handshake AI fellowship. That role requires a lot of structured thinking,
                attention to detail, and the ability to catch failure patterns that are easy to miss.
                I believe those same skills translate well to the compliance tracking and security
                operations work this internship involves.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── Projects ───────────────────────────────────────────────────── */}
        <section id="projects" className="bg-gray-50 dark:bg-black py-14 scroll-mt-16 transition-colors duration-300">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn>
              <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
                <FolderGit2 size={20} /> Projects
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((proj, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="h-full bg-white dark:bg-neutral-900/80 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm hover:-translate-y-1 transition-all duration-200 flex flex-col">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{proj.title}</h3>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {proj.tech.map((t) => (
                        <span key={t} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-2 flex-1">
                      {proj.bullets.map((b, j) => (
                        <li key={j} className="text-gray-600 dark:text-gray-300 text-sm flex gap-2">
                          <span className="text-blue-600 dark:text-blue-500 mt-0.5 shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                    >
                      <GitHubIcon size={14} /> View on GitHub
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ─────────────────────────────────────────────────── */}
        <section id="experience" className="bg-white dark:bg-[#111111] py-14 scroll-mt-16 transition-colors duration-300">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn>
              <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
                <Briefcase size={20} /> Experience
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {experienceData.map((exp, i) => (
                <FadeIn key={i} delay={i * 120}>
                  <div className="h-full bg-white dark:bg-neutral-900/80 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm hover:-translate-y-1 transition-all duration-200">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-0.5 text-sm">{exp.company}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-400 dark:text-gray-500 text-xs mt-2">
                      <span className="flex items-center gap-1"><Clock size={12} /> {exp.duration}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-gray-600 dark:text-gray-300 text-sm flex gap-2">
                          <span className="text-blue-600 dark:text-blue-500 mt-0.5 shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education + Certs ──────────────────────────────────────────── */}
        <section id="education" className="bg-gray-50 dark:bg-black py-14 scroll-mt-16 transition-colors duration-300">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10">
            <FadeIn>
              <div className="h-full bg-white dark:bg-neutral-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-5 flex items-center gap-2 text-gray-900 dark:text-white">
                  <Briefcase size={18} /> Education
                </h3>
                <div className="relative border-l border-gray-300 dark:border-gray-700 pl-5">
                  <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1 border-2 border-white dark:border-neutral-900" />
                  <time className="text-sm text-gray-400 dark:text-gray-500">Sep 2025 – In Progress</time>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mt-0.5">
                    Western Governors University
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">B.S. Cybersecurity and Information Assurance</p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs mt-2 leading-relaxed">
                    Secure Systems Analysis &amp; Design · Network &amp; Security · Digital Forensics ·
                    Web &amp; Cloud Security · Risk Management · Penetration Testing ·
                    Cryptography · Linux Foundations
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="h-full bg-white dark:bg-neutral-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-5 flex items-center gap-2 text-gray-900 dark:text-white">
                  <ShieldCheck size={18} /> Certifications &amp; Labs
                </h3>
                <ul className="space-y-3">
                  {certsData.map((cert, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-between gap-4 bg-gray-50 dark:bg-gray-800/50 px-3 py-2.5 rounded-lg"
                    >
                      <div>
                        <h4 className="text-gray-900 dark:text-white text-sm font-semibold">{cert.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{cert.issuer}</p>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${
                          cert.color === "green"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/70 dark:text-green-300"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/70 dark:text-blue-300"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Skills ─────────────────────────────────────────────────────── */}
        <section id="skills" className="bg-white dark:bg-[#111111] py-14 scroll-mt-16 transition-colors duration-300">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn>
              <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
                <Terminal size={20} /> Skills &amp; Tools
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.map((group, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="h-full bg-gradient-to-br from-gray-100 to-gray-50 dark:from-zinc-900 dark:to-gray-800/40 p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm hover:-translate-y-1 transition-all duration-200">
                    <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                      {group.category}
                    </h4>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="text-gray-700 dark:text-gray-300 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        <footer className="bg-white dark:bg-[#111111] border-t border-gray-200 dark:border-gray-800 py-10 transition-colors duration-300">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
              <span className="text-gray-900 dark:text-white font-medium">Will-Garlens Pierre</span>
              {" · "}
              <a href="mailto:willgarlensp@gmail.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                willgarlensp@gmail.com
              </a>
              <span className="block text-xs text-gray-400 dark:text-gray-600 mt-1">
                © {new Date().getFullYear()} All rights reserved
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Tohru-art" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <GitHubIcon size={18} />
              </a>
              <a href="https://linkedin.com/in/will-garlens-pierre" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <LinkedInIcon size={18} />
              </a>

            </div>
          </div>
        </footer>

        {/* ── Back to top ────────────────────────────────────────────────── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 ${
            showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>

      </div>
    </>
  );
}
