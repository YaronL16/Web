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
    education: "B.Sc. Computer Science • The College of Management Academic Studies (Expected 2028)",
    email: "lavyaron@gmail.com",
    github: "https://github.com/YaronL16",
    linkedin: "https://www.linkedin.com/in/yaron-lavi16/",
    statusBadge: "DevOps & Platform Engineer • B.Sc. Computer Science Student",
    headline: "Architecting resilient, declarative cloud-native platforms.",
    bio: "Specializing in Kubernetes, OpenShift, GitOps, and policy-driven distributed systems. Bridging developer velocity with high-assurance platform reliability, disaster recovery automation, and telemetry.",
  },

  // Key stats / metric highlights displayed under hero
  metrics: [
    {
      value: "15+ HA Clusters",
      label: "Production Multi-Cluster Fleet",
      accent: "text-cyan-400",
    },
    {
      value: "$300K+ Saved",
      label: "In-House kro & Kanister DR Platform",
      accent: "text-emerald-400",
    },
    {
      value: "100+ Devs",
      label: "Azure to AWS GitOps Migration",
      accent: "text-purple-400",
    },
    {
      value: "70% Footprint",
      label: "Telemetry Compute Optimization",
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
    quickButtons: ["whoami", "skills", "projects", "certs", "speaking", "status", "contact", "clear"],
    // Commands and their terminal output
    commands: {
      whoami: `Yaron Lavi — DevOps & Platform Engineer
B.Sc. Computer Science Student @ The College of Management Academic Studies (Expected 2028)
Specializing in Kubernetes, OpenShift, GitOps, declarative systems, and platform infrastructure.`,

      skills: `CONTAINER & PLATFORM     : Kubernetes, OpenShift, RKE2, Helm, Docker, kro, Kanister
GITOPS & CI/CD           : ArgoCD, Argo Workflows, GitHub Actions, Azure DevOps, Jenkins, Kyverno
CLOUD & IAC              : AWS, Azure, Terraform, Ansible, Vault, VMware vSphere, NetApp, Linux
OBSERVABILITY & LOGGING  : Prometheus, Grafana, Mimir, Loki, Zabbix
LANGUAGES & SCRIPTING    : Go, Python, Bash`,

      projects: `[1] Echo               : OpenShift DB Backup & DR orchestrator (kro, Kanister, S3)
[2] Multi-Cluster GitOps: Enterprise GitOps control plane (Helm, ArgoCD, Kyverno)
[3] KubeAI LLM Platform: Self-hosted inference on OpenShift with NVIDIA MIG GPU partitioning
[4] AmanDate           : Full-stack platform (FastAPI, React, Docker)
[5] Voyager            : Cloud-native observability stack (Prometheus, Loki, Grafana, Mimir)`,

      certs: `• Microsoft Certified: Azure Solutions Architect Expert (AZ-305)
• Microsoft Certified: Azure Administrator Associate (AZ-104)
• Microsoft Certified: Azure Developer Associate (AZ-204)`,

      speaking: `• Red Hat Open Tech Event (2026) : Technical Speaker
  Topic: OpenShift multi-tenancy, workload isolation & declarative GitOps governance at scale
  Link : https://lnkd.in/p/duEa7mqq`,

      status: `System State: OK
Cluster: k8s-prod-us-east-1
Nodes: 15+ Ready | Control Plane: Healthy (100%)
GitOps Sync: Synced (ArgoCD v2.11)
Kyverno Policies: 42 Enforced | 0 Violations`,

      contact: `Email   : lavyaron@gmail.com
GitHub  : https://github.com/YaronL16
LinkedIn: https://www.linkedin.com/in/yaron-lavi16/
Status  : Open to platform & infrastructure engineering conversations`,
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
      id: "kubeai",
      title: "KubeAI LLM Inference Platform",
      category: "AI Infrastructure & GPU Orchestration",
      status: "Production Deployed",
      description:
        "Self-hosted large language model inference platform engineered with KubeAI on OpenShift. Features hardware-level GPU partitioning via NVIDIA Multi-Instance GPU (MIG) to serve concurrent foundation models with high compute density and strict latency guarantees.",
      highlights: [
        "NVIDIA MIG hardware slicing maximizing multi-tenant GPU compute density",
        "Declarative model lifecycles and autoscaling using KubeAI custom resources",
        "Low-latency inference routing with Prometheus telemetry and alerting integration",
      ],
      tags: ["OpenShift", "KubeAI", "NVIDIA MIG", "Kubernetes", "PyTorch", "vLLM", "Prometheus"],
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

  // Cloud & Industry Certifications
  certifications: [
    {
      name: "Azure Solutions Architect Expert",
      code: "AZ-305",
      issuer: "Microsoft",
      icon: "☁️",
    },
    {
      name: "Azure Administrator Associate",
      code: "AZ-104",
      issuer: "Microsoft",
      icon: "🛡️",
    },
    {
      name: "Azure Developer Associate",
      code: "AZ-204",
      issuer: "Microsoft",
      icon: "⚡",
    },
  ],

  // Technical Speaking Engagements
  speaking: [
    {
      event: "Red Hat Open Tech Event",
      year: "2026",
      role: "Technical Speaker",
      topic: "OpenShift Multi-Tenancy & Declarative GitOps Governance at Scale",
      link: "https://lnkd.in/p/duEa7mqq",
      description:
        "Delivered a technical presentation on OpenShift multi-tenancy architectures, workload isolation, and declarative GitOps governance at scale to industry engineers and platform leaders.",
    },
  ],

  // Skill Categories for the Filter Bar
  skillCategories: [
    { id: "all", name: "All Skills" },
    { id: "orchestration", name: "Orchestration & Platform" },
    { id: "gitops", name: "GitOps & CI/CD" },
    { id: "cloud", name: "Cloud & Infrastructure" },
    { id: "observability", name: "Observability & Telemetry" },
    { id: "languages", name: "Languages & Core" },
  ],

  // Skills List
  skills: [
    { name: "Kubernetes", category: "orchestration", level: "Advanced", icon: "☸️" },
    { name: "OpenShift", category: "orchestration", level: "Advanced", icon: "🔴" },
    { name: "RKE2", category: "orchestration", level: "Advanced", icon: "🤠" },
    { name: "Docker", category: "orchestration", level: "Advanced", icon: "🐳" },
    { name: "kro", category: "orchestration", level: "Intermediate", icon: "⚙️" },
    { name: "Kanister", category: "orchestration", level: "Advanced", icon: "📦" },
    { name: "ArgoCD", category: "gitops", level: "Advanced", icon: "🐙" },
    { name: "Argo Workflows", category: "gitops", level: "Advanced", icon: "🔄" },
    { name: "Helm", category: "gitops", level: "Advanced", icon: "⎈" },
    { name: "GitHub Actions", category: "gitops", level: "Advanced", icon: "⚡" },
    { name: "Kyverno", category: "gitops", level: "Advanced", icon: "🛡️" },
    { name: "Terraform", category: "cloud", level: "Advanced", icon: "🌍" },
    { name: "Ansible", category: "cloud", level: "Advanced", icon: "📜" },
    { name: "AWS", category: "cloud", level: "Advanced", icon: "☁️" },
    { name: "Azure", category: "cloud", level: "Advanced", icon: "🔷" },
    { name: "VMware vSphere", category: "cloud", level: "Advanced", icon: "🖥️" },
    { name: "NetApp", category: "cloud", level: "Intermediate", icon: "💾" },
    { name: "Linux", category: "cloud", level: "Advanced", icon: "🐧" },
    { name: "Vault", category: "cloud", level: "Proficient", icon: "🔐" },
    { name: "Azure DevOps", category: "gitops", level: "Proficient", icon: "🚀" },
    { name: "Jenkins", category: "gitops", level: "Proficient", icon: "🏗️" },
    { name: "Prometheus", category: "observability", level: "Advanced", icon: "🔥" },
    { name: "Grafana", category: "observability", level: "Advanced", icon: "📊" },
    { name: "Loki", category: "observability", level: "Advanced", icon: "🪵" },
    { name: "Mimir", category: "observability", level: "Intermediate", icon: "📈" },
    { name: "Zabbix", category: "observability", level: "Advanced", icon: "📡" },
    { name: "Go", category: "languages", level: "Proficient", icon: "🔷" },
    { name: "Python", category: "languages", level: "Advanced", icon: "🐍" },
    { name: "Bash", category: "languages", level: "Advanced", icon: "🐚" },
  ],

  // Personal Highlights & Passions Outside Tech
  personalHighlights: [
    {
      title: "Photography",
      tagline: "Visual storytelling",
      iconName: "Camera",
      accent: "from-rose-500/20 to-pink-500/10 border-rose-500/30",
      description: "Street, architecture, and landscape composition focusing on perspective, geometry, and natural light.",
    },
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
      title: "Rock Piano",
      tagline: "Keys & improvisation",
      iconName: "Music2",
      accent: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
      description: "Classic rock, progressive grooves, rhythm flow, and keyboards improvisation.",
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
