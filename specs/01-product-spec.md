# Spec 01: Product & Requirements Specification

## 1. Vision & Purpose

The portfolio serves as the primary technical representation and engineering showcase for **Yaron Lavi** (DevOps & Platform Engineer | B.Sc. Computer Science Student).

Rather than an ordinary static resume website, the platform functions as an interactive, production-grade cloud-native demonstration embodying:
- Declarative systems thinking and GitOps methodologies.
- Transparent, spec-driven engineering practices.
- Deep competencies in Kubernetes, OpenShift, policy enforcement, disaster recovery, and telemetry.

---

## 2. Target Personas

| Persona | Motivation | Key Evaluation Criteria |
| :--- | :--- | :--- |
| **Staff / Principal Platform Engineers** | Assessing architectural rigor and distributed systems depth. | Real-world problem solving (disaster recovery, multi-cluster GitOps, admission policies). |
| **Engineering Managers / Tech Leads** | Evaluating technical breadth, velocity, and communication. | Code cleanliness, automation maturity, and adherence to modern development practices. |
| **Open-Source Collaborators** | Finding shared platform interests and tooling synergies. | Observability stacks, Kubernetes operator paradigms (`kro`, `Kanister`), and clean documentation. |

---

## 3. Core Requirements

### 3.1 Top Transparency Disclaimer Banner
- **Requirement:** A stylish, self-aware banner positioned above the header acknowledging the use of AI while highlighting mastery over spec-driven development and agentic workflows.
- **Copy Target:** *"Yeah, obviously this was built with AI — nobody writes boilerplate frontend in 2026. On the bright side, I actually know spec-driven development and agentic workflows."*
- **Visuals:** Dark carbon background with amber/cyan gradient glow and robot icon (`Bot`). Dismissible via close button.

### 3.2 Hero Section
- **Identity & Focus:** Yaron Lavi — DevOps & Platform Engineer & B.Sc. Computer Science Student.
- **Value Proposition:** Declarative systems, Kubernetes, OpenShift, GitOps, zero-trust infrastructure, and telemetry.
- **Key Metrics Row:** 4 scannable telemetry cards highlighting core architectural focus areas.

### 3.3 Interactive Terminal Component
- **Node Simulation:** Emulate a Unix shell session (`yaron@platform-node-01:~$`).
- **Commands Supported:**
  - `whoami`: Engineer identity and specialization.
  - `skills`: Categorized technical toolchain summary.
  - `projects`: Summary of featured engineering systems.
  - `status`: Simulated cluster telemetry and policy sync state.
  - `contact`: Connectivity endpoints and communication links.
  - `help`: Dynamic list of all registered commands.
  - `clear`: Reset terminal scrollback.
- **Interactivity:** Interactive command prompt with submit button and quick-action chips for one-click command execution.

### 3.4 Key Engineering Projects
- **Featured Systems:**
  1. **Echo:** OpenShift Database Backup & Disaster Recovery orchestrator utilizing `kro`, `Kanister`, and S3.
  2. **Multi-Cluster GitOps:** Scaled platform control plane using Helm, ArgoCD ApplicationSets, and Kyverno policy enforcement.
  3. **AmanDate:** High-performance full-stack web application with FastAPI and React.
  4. **Voyager:** Telemetry and observability framework with Prometheus, Loki, Grafana, and Mimir.
- **Card Metadata:** Project category, production grade status, architecture overview, bullet highlights, and technology tags.

### 3.5 Categorized Technical Stacks
- Filterable tabs: `All Skills`, `Orchestration & Cloud`, `GitOps & IaC`, `Observability & Telemetry`, `Languages & Core`.
- Skills represented with proficiency levels and icon indicators.

### 3.6 Personal Passions & Craft
- Contextual showcase of disciplines outside software:
  - Calisthenics & Ring Workouts (progressive overload, physical discipline).
  - Mixology & Batched Cocktails (precision infusions, clarification, culinary balance).
  - Rock Piano (creative improvisation, progressive rock harmony, rhythm).

### 3.7 Contact & Feedback
- One-click copy email button with interactive toast confirmation ("Copied to clipboard!").
- Direct mailto link and GitHub profile link.

---

## 4. Strict Constraints & Non-Goals

### 4.1 Constraints
- **Zero Local Footprint:** `node_modules` and local build artifacts (`dist/`) MUST NOT exist on local developer machines. All resolution and bundling is executed exclusively inside remote GitHub Actions runners.
- **Content Decoupling:** All display copy, links, projects, and skills MUST reside in a declarative configuration file (`portfolio.config.js`) so that updates never touch React components.
- **Topic Boundaries:** Strictly no military or defense force affiliations across all copy, code, comments, or terminal outputs.

### 4.2 Non-Goals
- Complex multi-page routing (SPA anchor navigation meets all UX requirements with zero latency).
- Heavy external dependencies (avoid bloated UI component libraries).
- Server-side runtime dependencies (pure client-side static bundle served via GitHub Pages edge CDN).
