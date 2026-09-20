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
    badge: "YARON (HUMAN)",
    icon: "User",
    text: "Yeah, obviously this was built with AI — nobody writes boilerplate frontend in 2026.\nOn the bright side, I actually know spec-driven development and agentic workflows.",
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
    bio: "Specializing in Kubernetes, OpenShift, GitOps, and cloud-native infrastructure. Bridging developer velocity with platform reliability, disaster recovery automation, and telemetry.",
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
      label: "Complete DevOps Workflow Migration",
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
    shell: "yaronsh",
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

      skills: `CONTAINER & PLATFORM : Kubernetes, OpenShift, Helm, Docker, RKE2 | Secondary: Kanister, kro
GITOPS & CI/CD       : ArgoCD, Argo Workflows, GitHub Actions | Secondary: Azure DevOps, Jenkins
CLOUD & IAC          : AWS, Azure, Terraform, Ansible, Linux | Secondary: VMware vSphere, Vault, NetApp
OBSERVABILITY        : Prometheus, Grafana, Loki, Mimir | Secondary: Zabbix (familiar)
LANGUAGES & SCRIPTING: Python, Bash, Go`,

      projects: `[1] Echo                   : OpenShift DB Backup & DR orchestrator (kro, Kanister, S3)
[2] Multi-Cluster GitOps   : Enterprise GitOps control plane (Helm, ArgoCD, ApplicationSets)
[3] Developer Platform     : Automated self-service tenant provisioning (Terraform, Vault, Keycloak)`,

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
Workload Health: 100% | Zero Drift`,

      contact: `Email   : lavyaron@gmail.com
GitHub  : https://github.com/YaronL16
LinkedIn: https://www.linkedin.com/in/yaron-lavi16/
Status  : Open to platform & infrastructure engineering conversations`,

      yaronsh: `yaronsh v1.0.0 (x86_64-platform-node-01)
Architecture: Declarative Platform Shell
Session     : Active (PID: 1337, TTY: /dev/pts/0)
Type "help" to list available platform inspection commands.`,
    },
  },

  // Key Engineering Projects
  projectsSubtitle:
    "Selected production platforms spanning automated disaster recovery, multi-cluster GitOps control planes, and self-service developer infrastructure.",
  projects: [
    {
      id: "echo",
      title: "Echo",
      category: "Disaster Recovery & Orchestration",
      status: "Production Grade",
      description:
        "OpenShift Database Backup & Disaster Recovery orchestrator built with kro (Kubernetes Resource Orchestrator), Kanister, and S3-compatible storage. Features automated multi-tenant snapshot lifecycles, declarative retention schedules, and cross-cluster recovery verification.",
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
      category: "Platform Architecture & GitOps",
      status: "Active Control Plane",
      description:
        "Enterprise multi-cluster GitOps control plane utilizing ArgoCD ApplicationSets, Helm charts, and declarative Kubernetes controllers to automate drift remediation, zero-trust RBAC, and multi-tenant workload deployments.",
      highlights: [
        "Dynamic cluster registration and configuration distribution via ApplicationSets",
        "Automated drift remediation and declarative workload validation across cluster fleets",
        "Hermetic secret decoupling with HashiCorp Vault injection",
      ],
      tags: ["ArgoCD", "Helm", "Kubernetes", "GitOps", "ApplicationSets", "Vault"],
    },
    {
      id: "developer-platform",
      title: "Self-Service Developer Platform",
      category: "Internal Developer Platform & Automation",
      status: "Production Deployed",
      description:
        "Automated self-service developer platform powered by custom Terraform modules and GitOps workflows. Streamlines multi-tenant workspace provisioning across Kubernetes, GitHub, ArgoCD, Harbor registry, HashiCorp Vault, and Keycloak SSO to accelerate service bootstrapping.",
      highlights: [
        "End-to-end automated tenant bootstrapping across Git repositories, CI/CD, and Kubernetes namespaces",
        "Zero-trust secrets decoupling and centralized identity governance via Vault and Keycloak",
        "Reduced developer environment provisioning lead time from days to minutes",
      ],
      tags: ["Terraform", "Kubernetes", "ArgoCD", "Vault", "Keycloak", "Harbor", "GitHub Actions"],
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

  // Skill Categories & Dedicated Domain Sections
  skillCategories: [
    {
      id: "orchestration",
      name: "Container & Platform",
      badge: "Core Orchestration",
      description: "Enterprise Kubernetes infrastructure, OpenShift multi-tenancy, and production container engines.",
    },
    {
      id: "gitops",
      name: "GitOps & CI/CD",
      badge: "Automated Delivery",
      description: "Declarative continuous delivery, automated deployment pipelines, and workflow automation.",
    },
    {
      id: "cloud",
      name: "Cloud & Infrastructure",
      badge: "IaC & Multi-Cloud",
      description: "Terraform automation, multi-cloud AWS/Azure architecture, and enterprise virtualization.",
    },
    {
      id: "observability",
      name: "Observability & Telemetry",
      badge: "Metrics & Logs",
      description: "Prometheus scraping, Loki distributed log aggregation, and Grafana telemetry dashboards.",
    },
    {
      id: "languages",
      name: "Languages & Core",
      badge: "Systems & Scripting",
      description: "Infrastructure automation, CLI utilities, and high-performance backend scripting.",
    },
  ],

  // Skills List with Core vs Secondary Tool Categorization
  skills: [
    // Container & Platform
    { name: "Kubernetes", category: "orchestration", level: "Advanced", icon: "☸️", primary: true },
    { name: "OpenShift", category: "orchestration", level: "Advanced", icon: "🔴", primary: true },
    { name: "Helm", category: "orchestration", level: "Advanced", icon: "⎈", primary: true },
    { name: "Docker", category: "orchestration", level: "Advanced", icon: "🐳", primary: true },
    { name: "RKE2", category: "orchestration", level: "Advanced", icon: "🤠", primary: true },
    { name: "Kanister", category: "orchestration", level: "Proficient", icon: "📦", primary: false },
    { name: "kro", category: "orchestration", level: "Proficient", icon: "⚙️", primary: false },

    // GitOps & CI/CD
    { name: "ArgoCD", category: "gitops", level: "Advanced", icon: "🐙", primary: true },
    { name: "Argo Workflows", category: "gitops", level: "Advanced", icon: "🔄", primary: true },
    { name: "GitHub Actions", category: "gitops", level: "Advanced", icon: "⚡", primary: true },
    { name: "Kyverno", category: "gitops", level: "Advanced", icon: "🛡️", primary: false },
    { name: "Azure DevOps", category: "gitops", level: "Intermediate", icon: "🚀", primary: false },
    { name: "Jenkins", category: "gitops", level: "Intermediate", icon: "🏗️", primary: false },

    // Cloud & Infrastructure
    { name: "AWS", category: "cloud", level: "Proficient", icon: "☁️", primary: true },
    { name: "Azure", category: "cloud", level: "Advanced", icon: "🔷", primary: true },
    { name: "Terraform", category: "cloud", level: "Advanced", icon: "🌍", primary: true },
    { name: "Ansible", category: "cloud", level: "Advanced", icon: "📜", primary: true },
    { name: "Linux", category: "cloud", level: "Advanced", icon: "🐧", primary: true },
    { name: "VMware vSphere", category: "cloud", level: "Proficient", icon: "🖥️", primary: false },
    { name: "Vault", category: "cloud", level: "Proficient", icon: "🔐", primary: false },
    { name: "NetApp", category: "cloud", level: "Proficient", icon: "💾", primary: false },

    // Observability & Telemetry
    { name: "Prometheus", category: "observability", level: "Advanced", icon: "🔥", primary: true },
    { name: "Grafana", category: "observability", level: "Advanced", icon: "📊", primary: true },
    { name: "Loki", category: "observability", level: "Advanced", icon: "🪵", primary: true },
    { name: "Mimir", category: "observability", level: "Intermediate", icon: "📈", primary: false },
    { name: "Zabbix", category: "observability", level: "Intermediate", icon: "📡", primary: false },

    // Languages & Core
    { name: "Python", category: "languages", level: "Advanced", icon: "🐍", primary: true },
    { name: "Bash", category: "languages", level: "Advanced", icon: "🐚", primary: true },
    { name: "Go", category: "languages", level: "Proficient", icon: "🔷", primary: true },
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
