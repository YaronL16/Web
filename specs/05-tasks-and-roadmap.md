# Spec 05: Task Breakdown & Architectural Roadmap

## 1. Completed Milestones

- [x] **Milestone 1: Clean Remote-Only Foundation**
  - Scaffolded React 18, Vite 5, Tailwind CSS, and Lucide React.
  - Configured dynamic base path for GitHub Pages deployment.
  - Implemented GitHub Actions CI/CD (`.github/workflows/deploy.yml`) with zero local dependencies.
- [x] **Milestone 2: Content Decoupling & Centralization**
  - Decoupled all portfolio data, projects, skills, metrics, and commands into [`portfolio.config.js`](../portfolio.config.js).
  - Documented editing workflows for non-developers and GitHub web editor.
- [x] **Milestone 3: Top Transparency & Disclaimer Banner**
  - Created self-aware, humorous disclaimer banner honoring spec-driven development and modern agentic engineering.
  - Integrated amber/cyan glow badge with robot icon and dismiss functionality.
- [x] **Milestone 4: Spec-Driven Development (SDD) Formalization**
  - Authored comprehensive specifications across product, architecture, schema, terminal, and roadmap.
- [x] **Milestone 5: Agent Workspace Skill (`yaron-profile-sync`)**
  - Created `.agents/skills/yaron-profile-sync/SKILL.md` establishing LinkedIn (`https://www.linkedin.com/in/yaron-lavi16/`) as the source of truth for author details.
  - Formally integrated strict non-negotiable guardrail prohibiting any military or IDF affiliations across portfolio content.
  - Linked skill into `AGENTS.md` system guidelines and repository architecture map.

---

## 2. Active Backlog & Future Capabilities

| Priority | Task ID | Description | Spec Ref | Status |
| :---: | :--- | :--- | :---: | :---: |
| **P1** | `FEAT-001` | **Command History Navigation:** Allow users to use Up/Down arrow keys in the interactive terminal to cycle through past entered commands. | `04-terminal` | `PLANNED` |
| **P2** | `FEAT-002` | **Resume Download Button:** Add a downloadable PDF resume link in the hero section and a `resume` terminal command that triggers the download. | `01-product` | `PLANNED` |
| **P2** | `FEAT-003` | **Search / Filter in Projects:** Allow live instant search across project titles, tags, and architectures. | `02-arch` | `PLANNED` |
| **P3** | `FEAT-004` | **Theme Toggle:** Optional carbon-dark to terminal-monochrome theme toggle. | `02-arch` | `CONSIDERING` |

---

## 3. Verification & Acceptance Protocol

For any new task or feature implementation:
1. **Spec First:** The feature must have documented acceptance criteria in `specs/`.
2. **Local Zero-Install Rule:** Under no circumstances should `npm install` or local build tools be invoked.
3. **Remote Automation Verification:** Commits pushed to `main` must pass GitHub Actions runner build and deploy jobs cleanly.
4. **End-to-End Live Check:** Live deployment on `https://yaronl16.github.io/Web/` must be verified via HTTP response codes and browser checks.
