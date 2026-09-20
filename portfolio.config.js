/**
 * =============================================================================
 * YARON LAVI — PORTFOLIO CONFIGURATION & CONTENT
 * =============================================================================
 * 
 * Edit your portfolio content directly in this file!
 * No need to modify React components or JSX source code.
 * 
 * Simply edit the text, lists, or links below and push to GitHub.
 * GitHub Actions will automatically rebuild and deploy your changes.
 * =============================================================================
 */

export const portfolioConfig = {
  // Top Disclaimer Banner
  disclaimerBanner: {
    enabled: true,
    badge: "SPEC-DRIVEN DEV",
    text: "Yeah, obviously this was built with AI — nobody writes boilerplate frontend in 2026. On the bright side, I actually know spec-driven development and agentic workflows.",
  },

  // Personal & Header Information
  personal: {
    name: "Yaron Lavi",
    handle: "platform-engineer",
    role: "DevOps & Platform Engineer",
    education: "B.Sc. Computer Science Student",
    email: "lavi.yaron16@gmail.com",
    github: "https://github.com/YaronL16",
    linkedin: "https://www.linkedin.com/in/yaron-lavi/",
    statusBadge: "DevOps & Platform Engineer • B.Sc. Computer Science Student",
    headline: "Architecting resilient, declarative cloud-native platforms.",
    bio: "Specializing in Kubernetes, OpenShift, GitOps, and policy-driven distributed systems. Bridging developer velocity with high-assurance platform reliability, disaster recovery automation, and telemetry.",
  },

  // Key stats / metric highlights displayed under hero
  metrics: [
    {
      value: "Multi-Cluster",
      label: "GitOps & Policy Automation",
      accent: "text-cyan-400",
    },
    {
      value: "Zero DR Drill",
      label: "Automated kro & Kanister DR",
      accent: "text-emerald-400",
    },
    {
      value: "FastAPI + React",
      label: "Modern Full-Stack Delivery",
      accent: "text-purple-400",
    },
    {
      value: "Telemetry",
      label: "Prometheus, Loki, Mimir",
      accent: "text-amber-400",
    },
  ],

  // Interactive Terminal Configuration
  terminal: {
    user: "yaron",
    host: "platform-node-01",
    nodeVersion: "v1.28.4",
    welcomeText: [
      "Initializing cloud platform session... Connected to platform-node-01.local [v1.28.4]",
      'Type "help" to inspect available commands or click quick action chips above.',
    ],
    // Quick action buttons displayed above terminal
    quickButtons: ["whoami", "skills", "projects", "status", "contact", "clear"],
    // Commands and their terminal output
    commands: {
      whoami: `Yaron Lavi — DevOps & Platform Engineer | CS Undergrad
Specializing in Kubernetes, OpenShift, GitOps, declarative systems, and platform infrastructure.`,

      skills: `PLATFORM & ORCHESTRATION : Kubernetes, OpenShift, kro, Kanister
GITOPS & IAC             : Helm, ArgoCD, Kyverno, Terraform, Ansible, Vault
OBSERVABILITY & LOGGING  : Prometheus, Grafana, Loki, Mimir
LANGUAGES & SCRIPTING    : Go, Python, Bash`,

      projects: `[1] Echo               : OpenShift DB Backup & DR orchestrator (kro, Kanister, S3)
[2] Multi-Cluster GitOps: Enterprise GitOps control plane (Helm, ArgoCD, Kyverno)
[3] AmanDate           : Full-stack platform (FastAPI, React, Docker)
[4] Voyager            : Cloud-native observability stack (Prometheus, Loki, Grafana, Mimir)`,

      status: `System State: OK
Cluster: k8s-prod-us-east-1
Nodes: 12 Ready | Control Plane: Healthy (100%)
GitOps Sync: Synced (ArgoCD v2.11)
Kyverno Policies: 42 Enforced | 0 Violations`,

      contact: `Email  : lavi.yaron16@gmail.com
GitHub : https://github.com/YaronL16
Status : Open to platform & infrastructure engineering conversations`,
    },
  },

  // Key Engineering Projects
  projects: [
    {
      id: "echo",
      title: "Echo",
      category: "Disaster Recovery & Orchestration",
      status: "Production Grade",
      description:
        "OpenShift Database Backup & Disaster Recovery orchestrator built with kro (Kubernetes Resource Orchestrator), Kanister, and S3-compatible storage. Features automated multi-tenant snapshot lifecycles, declarative retention policies, and cross-cluster recovery verification.",
      highlights: [
        "Declarative multi-tenant backup scheduling via custom ResourceGraph definitions",
        "Application-consistent database hooks using Kanister blueprints",
        "Automated disaster recovery drill validations with zero production impact",
      ],
      tags: ["OpenShift", "Kubernetes", "kro", "Kanister", "S3", "Go", "Helm"],
    },
    {
      id: "gitops",
      title: "Multi-Cluster GitOps",
      category: "Platform Architecture & Security",
      status: "Active Control Plane",
      description:
        "Enterprise multi-cluster GitOps control plane utilizing ArgoCD ApplicationSets, Helm charts, and Kyverno policy-as-code admission control to enforce declarative drift remediation, zero-trust RBAC, and automated tenant workload deployments.",
      highlights: [
        "Dynamic cluster registration and configuration distribution via ApplicationSets",
        "Automated policy-as-code enforcement and mutate/validate webhooks via Kyverno",
        "Hermetic secret decoupling with HashiCorp Vault injection",
      ],
      tags: ["ArgoCD", "Helm", "Kyverno", "Kubernetes", "GitOps", "Vault"],
    },
    {
      id: "amandate",
      title: "AmanDate",
      category: "Full-Stack Application",
      status: "Completed",
      description:
        "High-performance full-stack web application engineered with a FastAPI asynchronous backend and React frontend. Encapsulates structured RESTful APIs, optimized data access patterns, and automated containerized CI/CD delivery pipelines.",
      highlights: [
        "Asynchronous query handling and schema-validated serialization with Pydantic",
        "Interactive, responsive modern UI with Tailwind CSS component architecture",
        "Containerized multi-stage Docker builds with automated verification",
      ],
      tags: ["FastAPI", "React", "Python", "Docker", "PostgreSQL", "Tailwind CSS"],
    },
    {
      id: "voyager",
      title: "Voyager",
      category: "Cloud-Native Observability",
      status: "Maintained",
      description:
        "End-to-end cloud-native telemetry and observability framework unifying Prometheus metric scraping, Loki distributed log aggregation, Grafana visualization, and Mimir long-term metric storage across distributed Kubernetes clusters.",
      highlights: [
        "Multi-tenant log correlation linking Loki traces with Prometheus alerting rules",
        "Custom Grafana operations dashboards tracking cluster SLIs/SLOs and latency",
        "High-availability horizontal metric tiering with Grafana Mimir",
      ],
      tags: ["Prometheus", "Grafana", "Loki", "Mimir", "OpenTelemetry", "Kubernetes"],
    },
  ],

  // Skill Categories for the Filter Bar
  skillCategories: [
    { id: "all", name: "All Skills" },
    { id: "orchestration", name: "Orchestration & Cloud" },
    { id: "gitops", name: "GitOps & IaC" },
    { id: "observability", name: "Observability & Telemetry" },
    { id: "languages", name: "Languages & Core" },
  ],

  // Skills List
  skills: [
    { name: "Kubernetes", category: "orchestration", level: "Advanced", icon: "☸️" },
    { name: "OpenShift", category: "orchestration", level: "Advanced", icon: "🔴" },
    { name: "kro", category: "orchestration", level: "Intermediate", icon: "⚙️" },
    { name: "Kanister", category: "orchestration", level: "Advanced", icon: "📦" },
    { name: "Helm", category: "gitops", level: "Advanced", icon: "⎈" },
    { name: "ArgoCD", category: "gitops", level: "Advanced", icon: "🐙" },
    { name: "Kyverno", category: "gitops", level: "Advanced", icon: "🛡️" },
    { name: "Terraform", category: "gitops", level: "Proficient", icon: "🌍" },
    { name: "Ansible", category: "gitops", level: "Proficient", icon: "📜" },
    { name: "Vault", category: "gitops", level: "Intermediate", icon: "🔐" },
    { name: "Prometheus", category: "observability", level: "Advanced", icon: "🔥" },
    { name: "Grafana", category: "observability", level: "Advanced", icon: "📊" },
    { name: "Loki", category: "observability", level: "Advanced", icon: "🪵" },
    { name: "Mimir", category: "observability", level: "Intermediate", icon: "📈" },
    { name: "Go", category: "languages", level: "Proficient", icon: "🔷" },
    { name: "Python", category: "languages", level: "Advanced", icon: "🐍" },
    { name: "Bash", category: "languages", level: "Advanced", icon: "🐚" },
  ],

  // Personal Highlights & Passions Outside Tech
  personalHighlights: [
    {
      title: "Calisthenics",
      tagline: "Bodyweight training",
      iconName: "Dumbbell",
      accent: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
      description: "Bodyweight strength, gymnastic rings, and progressive leverage training.",
    },
    {
      title: "Mixology & Good Drinks",
      tagline: "Flavor profiling",
      iconName: "GlassWater",
      accent: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
      description: "Crafting well-balanced drinks, exploring spirits, and relaxed hosting.",
    },
    {
      title: "Rock Piano & Guitar",
      tagline: "Keys & strings",
      iconName: "Music2",
      accent: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
      description: "Classic rock, progressive grooves, rhythm flow, and improvisation.",
    },
    {
      title: "Language Learning",
      tagline: "Active curiosity",
      iconName: "Languages",
      accent: "from-purple-500/20 to-indigo-500/10 border-purple-500/30",
      description: "Active interest in learning new languages, phonetics, and cultural idioms.",
    },
  ],

  // Spoken Languages & Proficiencies
  spokenLanguages: [
    { language: "Hebrew", level: "Native", dotColor: "bg-emerald-400" },
    { language: "English", level: "Fluent", dotColor: "bg-cyan-400" },
    { language: "French", level: "Working proficiency", dotColor: "bg-blue-400" },
    { language: "Italian", level: "Conversational", dotColor: "bg-amber-400" },
  ],

  // Footer text
  footer: {
    credit: "DevOps & Platform Engineering",
    systemStatus: "Automated CI/CD via GitHub Pages",
  },
}
