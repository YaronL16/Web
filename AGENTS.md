# AGENTS.md — System Instructions & Guardrails for AI Coding Agents

> **To any AI coding assistant or autonomous agent working in this repository:**  
> Read this document in full before proposing or executing changes. It defines the core invariants, operational rules, and development methodologies governing this codebase.

---

## 1. Core Invariants (Non-Negotiable Guardrails)

### 🚫 1.1 Zero Local Install & Build Footprint
- **NEVER** run `npm install`, `yarn`, `pnpm`, or download dependencies locally.
- **NEVER** run local build or bundle commands (`npm run build`, `vite build`).
- **NEVER** create or leave a `node_modules/` or `dist/` directory in the local workspace.
- **Why:** The repository is architected for hermetic, remote-only execution. All dependency resolution, bundling, and asset generation occur strictly inside the remote GitHub Actions runner (`.github/workflows/deploy.yml`).

### 🚫 1.2 Topic Boundaries & Profile Ground Truth
- **NEVER** include or introduce any military, IDF, or defense force affiliations anywhere in the website copy, code, documentation, or terminal outputs.
- **Source of Truth for User Details:** Consult Yaron's LinkedIn profile at [`https://www.linkedin.com/in/yaron-lavi16/`](https://www.linkedin.com/in/yaron-lavi16/) for accurate professional background, roles, education, and skills.
- **Workspace Skill:** Activate and follow [`.agents/skills/yaron-profile-sync/SKILL.md`](./.agents/skills/yaron-profile-sync/SKILL.md) whenever drafting or editing bio and portfolio content.

### 🧩 1.3 Content Decoupling
- **NEVER** hardcode user content, bio details, projects, skills, or terminal commands inside `src/App.jsx`.
- **ALWAYS** declare and edit content in [`portfolio.config.js`](./portfolio.config.js). `src/App.jsx` is strictly a presentation controller.

---

## 2. Development Methodology: Spec-Driven Development (SDD)

This repository follows **Spec-Driven Development**. The [`specs/`](./specs/) directory contains the definitive specifications for the platform:

| Spec File | Purpose |
| :--- | :--- |
| [`specs/01-product-spec.md`](./specs/01-product-spec.md) | Product vision, target personas, and functional requirements. |
| [`specs/02-architecture-spec.md`](./specs/02-architecture-spec.md) | Component tree, Vite dynamic base path, and CI/CD delivery pipeline. |
| [`specs/03-data-schema-spec.md`](./specs/03-data-schema-spec.md) | Formal TypeScript interfaces and schema contracts for `portfolio.config.js`. |
| [`specs/04-terminal-engine-spec.md`](./specs/04-terminal-engine-spec.md) | Interactive shell state machine and command execution pipeline. |
| [`specs/05-tasks-and-roadmap.md`](./specs/05-tasks-and-roadmap.md) | Prioritized backlog, implementation status, and acceptance criteria. |
| [`specs/06-agent-orchestration-spec.md`](./specs/06-agent-orchestration-spec.md) | Multi-agent orchestration topology, persona contracts, handover state machine, and audit gates. |

### 2.1 Multi-Agent Orchestration Model
Autonomous coding agents operating in this repository execute as a 4-persona pipeline:
1. **Spec Architect Agent:** Formulates requirements and updates `specs/`.
2. **Compliance & Guardrail Auditor Agent:** Gatekeeper validating all 4 core invariants (no military affiliations, profile accuracy, hermetic execution, content decoupling). Uses [`.agents/skills/guardrail-compliance-auditor/SKILL.md`](./.agents/skills/guardrail-compliance-auditor/SKILL.md).
3. **Implementation Engineer Agent:** Executes declarative code/config edits strictly conforming to the spec.
4. **Verification & Delivery Agent:** Performs non-destructive static checks and tracks remote CI/CD deployment.

See [`.agents/skills/sdd-orchestrator/SKILL.md`](./.agents/skills/sdd-orchestrator/SKILL.md) and [`specs/06-agent-orchestration-spec.md`](./specs/06-agent-orchestration-spec.md) for execution details.

### Rule: Spec First
Before implementing any architectural change, new section, or data schema modification:
1. Verify alignment with the existing specifications.
2. Update the relevant markdown specification in `specs/` as part of your pull request or commit.

---

## 3. Repository Architecture Map

```
/
├── portfolio.config.js        # Declarative single source of truth for all content
├── AGENTS.md                  # Operational manual for AI agents (this file)
├── README.md                  # User-facing overview, editing guide, and SDD index
├── index.html                 # HTML shell referencing /src/main.jsx
├── package.json               # Pure dependency declaration (built in CI only)
├── vite.config.js             # Vite configuration with dynamic GitHub Pages base path
├── tailwind.config.js         # Carbon dark theme & custom styling tokens
├── postcss.config.js          # PostCSS processor configuration
├── .gitignore                 # Ignores node_modules, dist, OS files
│
├── .agents/
│   └── skills/
│       ├── yaron-profile-sync/
│       │   └── SKILL.md       # Ground truth profile sync & non-negotiable guardrails
│       ├── sdd-orchestrator/
│       │   └── SKILL.md       # Multi-agent SDD orchestration & subagent execution
│       └── guardrail-compliance-auditor/
│           └── SKILL.md       # Automated invariant & compliance audit gate
│
├── .github/workflows/
│   └── deploy.yml             # Remote GitHub Actions build & deploy pipeline
│
├── specs/                     # Spec-Driven Development documentation suite
│   ├── README.md              # SDD Index & manifesto
│   ├── 01-product-spec.md     # Product requirements
│   ├── 02-architecture-spec.md# Architecture & CI/CD pipeline
│   ├── 03-data-schema-spec.md # Data contracts & schema
│   ├── 04-terminal-engine-spec.md # Shell engine specification
│   ├── 05-tasks-and-roadmap.md# Roadmap & task backlog
│   └── 06-agent-orchestration-spec.md # Multi-agent orchestration specification
│
└── src/
    ├── main.jsx               # React DOM root entrypoint
    ├── index.css              # Tailwind base, utilities, and custom scrollbars
    ├── portfolio.config.js    # Local re-export of root portfolio.config.js
    └── App.jsx                # Modular presentation controller
```

---

## 4. Git & Deployment Protocol

1. **Commit Messages:** Follow conventional commits:
   - `feat:` for new capabilities or components
   - `docs:` for documentation or specification updates
   - `fix:` for bug fixes
   - `refactor:` for code refactoring without behavior change
2. **Automated Push to `main`:** Upon passing Phase 4 verification and compliance checks, the agent MUST automatically execute `git add`, `git commit`, and `git push origin main`. Pushing to `main` automatically triggers `.github/workflows/deploy.yml` on GitHub Actions.
3. **Delivery Verification:**
   - Confirm push completion to remote `main`.
   - Verify workflow status via GitHub API or the Actions tab.
   - Verify live assets on `https://yaronl16.github.io/Web/` return HTTP 200 without runtime console errors.
