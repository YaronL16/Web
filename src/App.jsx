import React, { useState, useEffect, useRef } from 'react'
import {
  Terminal as TerminalIcon,
  Server,
  Shield,
  Cloud,
  Activity,
  Cpu,
  Copy,
  Check,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Layers,
  Sparkles,
  Code2,
  Database,
  Radio,
  Dumbbell,
  GlassWater,
  Music2,
  ChevronRight,
  Send,
  RefreshCw,
  Eye,
  CheckCircle2,
  Boxes,
  Bot,
  Workflow,
  X,
  Languages,
  Globe,
  Camera,
  Award,
  Presentation
} from 'lucide-react'

// Import all editable portfolio content from root portfolio.config.js
import { portfolioConfig } from './portfolio.config.js'

// Dynamic icon resolver for personal highlights & tools
const ICON_MAP = {
  Dumbbell,
  GlassWater,
  Music2,
  Languages,
  Globe,
  Camera,
  Terminal: TerminalIcon,
  Server,
  Shield,
  Cloud,
  Activity,
  Cpu,
  Code2,
  Database,
  Radio,
  Boxes,
  Sparkles,
  Layers,
  Workflow,
  Bot
}

export default function App() {
  const {
    disclaimerBanner,
    personal,
    metrics = [],
    terminal,
    projectsSubtitle,
    projects = [],
    certifications = [],
    speaking = [],
    skillCategories = [],
    skills = [],
    personalHighlights = [],
    spokenLanguages = [],
    footer
  } = portfolioConfig

  const [bannerDismissed, setBannerDismissed] = useState(false)
  const BannerIcon = ICON_MAP[disclaimerBanner?.icon] || Workflow
  const [activeCategory, setActiveCategory] = useState(
    () => skillCategories[0]?.id || 'orchestration'
  )
  const [terminalHistory, setTerminalHistory] = useState(() =>
    (terminal?.welcomeText || []).map((text) => ({ type: 'system', text }))
  )
  const [terminalInput, setTerminalInput] = useState('')
  const [copied, setCopied] = useState(false)
  const terminalBodyRef = useRef(null)

  const email = personal?.email || 'lavi.yaron16@gmail.com'
  const promptString = `${terminal?.user || 'yaron'}@${terminal?.host || 'platform-node-01'}:~$`

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase()
    const newEntry = { type: 'input', text: cmdStr }

    let response = []

    if (trimmed === 'clear') {
      setTerminalHistory([])
      return
    }

    if (trimmed === '') {
      response = []
    } else if (trimmed === 'help') {
      const customCmdList = Object.keys(terminal?.commands || {})
        .map((c) => `  • ${c.padEnd(10, ' ')} : Show ${c} details`)
        .join('\n')

      response = [
        {
          type: 'output',
          text: `Available platform commands:
${customCmdList}
  • clear      : Flush terminal scrollback buffer`
        }
      ]
    } else if (terminal?.commands && terminal.commands[trimmed]) {
      response = [
        {
          type: 'output',
          text: terminal.commands[trimmed]
        }
      ]
    } else {
      response = [
        {
          type: 'error',
          text: `bash: command not found: "${trimmed}". Type "help" to inspect valid commands.`
        }
      ]
    }

    setTerminalHistory((prev) => [...prev, newEntry, ...response])
  }

  const onTerminalSubmit = (e) => {
    e.preventDefault()
    if (!terminalInput.trim()) return
    handleCommand(terminalInput)
    setTerminalInput('')
  }

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [terminalHistory])

  const currentCategory =
    skillCategories.find((c) => c.id === activeCategory) ||
    skillCategories[0] || { id: 'orchestration', name: 'Container & Platform' }

  const activeCategorySkills = skills.filter((s) => s.category === currentCategory.id)
  const primarySkills = activeCategorySkills.filter((s) => s.primary !== false)
  const secondarySkills = activeCategorySkills.filter((s) => s.primary === false)

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[130px] rounded-full" />
        <div className="absolute top-[40rem] -left-40 w-[500px] h-[500px] bg-emerald-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-[80rem] -right-40 w-[600px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      {/* Top Disclaimer Banner */}
      {disclaimerBanner?.enabled && !bannerDismissed && (
        <aside
          aria-label="Transparency Notice"
          className="relative z-50 bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-emerald-500/10 border-b border-cyan-500/25 backdrop-blur-md px-4 py-2 text-xs"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-semibold tracking-wide shrink-0 shadow-sm shadow-amber-500/10">
                <BannerIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>{disclaimerBanner?.badge || 'ORCHESTRATOR AGENT'}</span>
              </span>
              <p className="text-slate-300 font-sans leading-snug whitespace-pre-line text-balance">
                <span className="text-slate-100 font-medium">{disclaimerBanner.text}</span>
              </p>
            </div>
            <button
              onClick={() => setBannerDismissed(true)}
              className="text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800/60 transition shrink-0"
              aria-label="Dismiss banner"
              title="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#07090e]/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center font-bold text-slate-950 font-mono text-base shadow-lg shadow-cyan-500/20">
              YL
            </div>
            <div>
              <span className="font-bold tracking-tight text-white block text-sm sm:text-base">
                {personal.name}
              </span>
              <span className="text-[11px] text-cyan-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {personal.handle}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#terminal" className="hover:text-cyan-400 transition-colors">
              Terminal
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            {(certifications.length > 0 || speaking.length > 0) && (
              <a href="#credentials" className="hover:text-cyan-400 transition-colors">
                Credentials
              </a>
            )}
            <a href="#highlights" className="hover:text-cyan-400 transition-colors">
              Highlights
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={copyEmail}
              className="hidden sm:flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-24">
        {/* Hero Section */}
        <section className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>{personal.statusBadge}</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Architecting resilient, declarative{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                cloud-native platforms.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-normal">
              {personal.bio}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          {metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl pt-2">
              {metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                  <div className={`text-2xl font-bold font-mono ${m.accent || 'text-cyan-400'}`}>
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Quick CTA */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#terminal"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20 text-sm"
            >
              <TerminalIcon className="w-4 h-4" />
              Launch Interactive Shell
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium hover:bg-slate-800 hover:border-slate-700 transition text-sm"
            >
              <Boxes className="w-4 h-4 text-slate-400" />
              View Key Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 font-medium hover:text-white transition text-sm"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              Connect
            </a>
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 font-medium hover:text-cyan-400 hover:border-slate-700 transition text-sm"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                LinkedIn
              </a>
            )}
          </div>
        </section>

        {/* Interactive Terminal Section */}
        <section id="terminal" className="space-y-4 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">Interactive Platform Shell</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono">Quick Run:</span>
              <div className="flex gap-1.5 flex-wrap">
                {(terminal?.quickButtons || ['whoami', 'skills', 'projects', 'status', 'clear']).map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => handleCommand(cmd)}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-700 text-cyan-300 border border-slate-700/60 transition"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0b0f17] border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
            {/* Terminal Window Chrome */}
            <div className="bg-[#101622] px-4 py-3 border-b border-slate-800/90 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs text-slate-400 ml-2 select-none">
                  {terminal?.user || 'yaron'}@{terminal?.host || 'platform-node-01'}:~
                </span>
              </div>
              <div className="text-[11px] text-slate-500 hidden sm:block">zsh • UTF-8</div>
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalBodyRef}
              className="p-4 sm:p-6 space-y-3 min-h-[300px] max-h-[420px] overflow-y-auto"
            >
              {terminalHistory.map((item, index) => (
                <div key={index} className="leading-relaxed">
                  {item.type === 'system' && (
                    <div className="text-slate-400 text-xs">{item.text}</div>
                  )}
                  {item.type === 'input' && (
                    <div className="flex items-center gap-2 text-slate-100">
                      <span className="text-cyan-400 font-semibold select-none">{promptString}</span>
                      <span>{item.text}</span>
                    </div>
                  )}
                  {item.type === 'output' && (
                    <pre className="text-slate-300 text-xs sm:text-sm whitespace-pre-wrap pl-2 border-l border-slate-800 py-1 font-mono">
                      {item.text}
                    </pre>
                  )}
                  {item.type === 'error' && (
                    <div className="text-rose-400 text-xs sm:text-sm pl-2 border-l border-rose-800/60 py-1 font-mono">
                      {item.text}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Terminal Command Input Form */}
            <form
              onSubmit={onTerminalSubmit}
              className="bg-[#0e131d] px-4 py-3 border-t border-slate-800 flex items-center gap-2"
            >
              <span className="text-cyan-400 font-semibold select-none text-xs sm:text-sm">
                {promptString}
              </span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder={`type a command (try 'whoami', 'skills', 'projects', 'help')...`}
                className="flex-1 bg-transparent border-none outline-none text-slate-100 text-xs sm:text-sm font-mono placeholder:text-slate-600 focus:ring-0"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="submit"
                className="text-slate-400 hover:text-cyan-300 p-1.5 transition rounded hover:bg-slate-800"
                title="Send Command"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Architecture & Delivery</div>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Key Engineering Projects</h2>
            </div>
            {projectsSubtitle && (
              <p className="text-sm text-slate-400 max-w-md">
                {projectsSubtitle}
              </p>
            )}
          </div>

          <div className={`grid grid-cols-1 ${projects.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 p-6 transition-all duration-200 flex flex-col justify-between hover:bg-slate-900/80 shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Highlights:</div>
                      <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/70">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-slate-400 border border-slate-800/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categorized Skills Section */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Technical Domains</div>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Platform Toolchain & Stacks</h2>
            </div>
            {/* Section Switcher Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition ${
                    activeCategory === category.id
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Domain Section Container */}
          <div className="rounded-2xl bg-slate-900/30 border border-slate-800/90 p-6 sm:p-8 space-y-6">
            {/* Section Metadata Header */}
            <div className="space-y-1.5 pb-4 border-b border-slate-800/70">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                  {currentCategory.badge || 'Core Domain'}
                </span>
                <span className="text-sm font-bold text-white tracking-tight">
                  {currentCategory.name}
                </span>
              </div>
              {currentCategory.description && (
                <p className="text-xs text-slate-400 leading-relaxed max-w-2xl font-sans">
                  {currentCategory.description}
                </p>
              )}
            </div>

            {/* Core & Primary Toolchain */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono text-cyan-400/90 uppercase tracking-wider">
                Core Specialization & Production Stacks
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {primarySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between hover:bg-slate-900/90 transition shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl" role="img" aria-label={skill.name}>
                        {skill.icon}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white">{skill.name}</div>
                        <div className="text-[11px] font-mono text-cyan-300/80 font-medium">{skill.level}</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
                  </div>
                ))}
              </div>
            </div>

            {/* Supporting Tools & Secondary Systems (Downplayed) */}
            {secondarySkills.length > 0 && (
              <div className="pt-4 border-t border-slate-800/60 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Supporting Tooling & Secondary Systems
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
                    Ecosystem
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {secondarySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/50 flex items-center justify-between hover:border-slate-700/60 transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base opacity-75" role="img" aria-label={skill.name}>
                          {skill.icon}
                        </span>
                        <div>
                          <div className="text-xs font-medium text-slate-300">{skill.name}</div>
                          <div className="text-[10px] font-mono text-slate-400">{skill.level}</div>
                        </div>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Certifications & Public Speaking */}
        {(certifications.length > 0 || speaking.length > 0) && (
          <section id="credentials" className="space-y-8 scroll-mt-24">
            <div className="border-b border-slate-800/80 pb-4">
              <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Validation & Community</div>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Certifications & Public Speaking</h2>
              <p className="text-sm text-slate-400 max-w-xl mt-1">
                Industry-recognized cloud architecture credentials and technical community presentations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Certifications Card */}
              {certifications.length > 0 && (
                <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 space-y-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/60">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-base font-bold text-white tracking-tight">Cloud Certifications</h3>
                  </div>
                  <div className="space-y-3">
                    {certifications.map((cert, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl" role="img" aria-label={cert.name}>
                            {cert.icon || '📜'}
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-white">{cert.name}</div>
                            <div className="text-[11px] font-mono text-slate-400">{cert.issuer}</div>
                          </div>
                        </div>
                        <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
                          {cert.code}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Public Speaking Card */}
              {speaking.length > 0 && (
                <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/60">
                      <Presentation className="w-5 h-5 text-emerald-400" />
                      <h3 className="text-base font-bold text-white tracking-tight">Public Speaking</h3>
                    </div>
                    <div className="space-y-4 mt-4">
                      {speaking.map((talk, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-mono text-emerald-400 font-semibold">{talk.event}</span>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                              {talk.year}
                            </span>
                          </div>
                          <div className="text-sm font-bold text-white">{talk.topic}</div>
                          <p className="text-xs text-slate-300 leading-relaxed font-sans">{talk.description}</p>
                          {talk.link && (
                            <a
                              href={talk.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition pt-1"
                            >
                              <span>View Event Post</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Beyond the Terminal: Hobbies & Languages */}
        <section id="highlights" className="space-y-8 scroll-mt-24">
          <div className="border-b border-slate-800/80 pb-4">
            <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Beyond the Terminal</div>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Interests & Languages</h2>
            <p className="text-sm text-slate-400 max-w-xl mt-1">
              Disciplines and linguistic interests that keep me curious, sharp, and well-rounded.
            </p>
          </div>

          {/* Clean, Punchy Hobbies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personalHighlights.map((item, index) => {
              const Icon = ICON_MAP[item.iconName] || Sparkles
              return (
                <div
                  key={index}
                  className="rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 p-5 flex flex-col justify-between space-y-3 transition duration-150 hover:bg-slate-900/70"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-300 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                      <div className="text-[11px] font-mono text-slate-400">{item.tagline}</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Languages & Proficiencies */}
          {spokenLanguages.length > 0 && (
            <div className="rounded-xl bg-[#090d14] border border-slate-800/90 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Languages & Proficiencies</div>
                  <div className="text-[11px] font-mono text-slate-400">Spoken & Written Communication</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {spokenLanguages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 hover:border-slate-700 transition"
                  >
                    <span className={`w-2 h-2 rounded-full ${lang.dotColor || 'bg-cyan-400'}`} />
                    <span className="font-semibold text-white">{lang.language}</span>
                    <span className="text-slate-400 font-mono text-[11px]">— {lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#0d1421] to-slate-900 border border-slate-800 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
            
            <div className="space-y-2 max-w-xl mx-auto">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Let's Connect</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to elevate your platform?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you want to discuss declarative Kubernetes infrastructure, disaster recovery orchestration, or good drinks — my inbox is always open.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20 text-sm w-full sm:w-auto justify-center"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition font-mono text-sm w-full sm:w-auto justify-center"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : email}</span>
              </button>

              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition font-medium text-sm w-full sm:w-auto justify-center"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}

              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/30 transition font-medium text-sm w-full sm:w-auto justify-center"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>

            {/* Toast popup */}
            {copied && (
              <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 px-4 py-2.5 rounded-xl shadow-2xl font-mono text-xs flex items-center gap-2 animate-bounce">
                <Check className="w-4 h-4" />
                <span>Email address copied to clipboard!</span>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 mt-20 py-8 bg-[#05070a] text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {personal.name}.</span>
            <span>•</span>
            <span className="text-slate-400">{footer?.credit || 'DevOps & Platform Engineering'}</span>
          </div>
          <div className="flex items-center gap-4">
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {footer?.systemStatus || 'Automated CI/CD via GitHub Pages'}
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
