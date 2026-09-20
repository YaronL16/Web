# Yaron Lavi — Portfolio & Platform Engineering Showcase

Modern portfolio website for **Yaron Lavi** (DevOps & Platform Engineer | B.Sc. Computer Science Student).

Built with React 18, Vite, Tailwind CSS, Lucide React, and automated GitHub Actions CI/CD for GitHub Pages.

---

## ✏️ How to Edit Content (No React/Code Diving Required)

All text, projects, skills, terminal commands, and links can be edited in a single file located in the root of the repository:

👉 **[`portfolio.config.js`](./portfolio.config.js)**

### Quick Editing Options:
1. **Directly on GitHub in your browser:**
   - Go to [github.com/YaronL16/Web](https://github.com/YaronL16/Web)
   - Click [`portfolio.config.js`](./portfolio.config.js) and click the pencil icon ✏️ (or press `.` to open GitHub Web Editor).
   - Edit any text, add a project, or update skills.
   - Click **Commit changes...** $\rightarrow$ **Commit directly to the `main` branch**.
   - GitHub Actions will automatically rebuild and deploy the site in ~35 seconds!

2. **Locally in your editor:**
   - Edit `portfolio.config.js`.
   - Run `git commit -am "update content" && git push`.

---

## ⚙️ Content File Reference (`portfolio.config.js`)

| Section | What You Can Edit |
| :--- | :--- |
| `personal` | Name, title, handle, bio, headline, email, GitHub and LinkedIn links |
| `metrics` | Hero metric cards (values, labels, accent colors) |
| `terminal` | Shell username, host, welcome messages, quick run buttons, and commands (`whoami`, `skills`, `projects`, `status`, `contact`, or add new ones) |
| `projects` | List of project cards (title, category, status, description, bullet highlights, tags) |
| `skillCategories` | Skill filter tabs (e.g. All, Orchestration, GitOps, Observability, Languages) |
| `skills` | List of technical stacks (name, category, level, emoji/icon) |
| `personalHighlights` | Hobbies & craft cards (title, tagline, icon, description) |
| `footer` | Footer credit line and status message |

---

## 🚀 CI/CD & Deployment

- **Pipeline:** Remote automated build in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)
- **Runner:** `ubuntu-latest` (Node.js 20 $\rightarrow$ `npm install` $\rightarrow$ `npm run build` $\rightarrow$ `deploy-pages`)
- **Hosting:** GitHub Pages

---

## 📐 Spec-Driven Development (SDD)

This project strictly adheres to **Spec-Driven Development**. Every feature, architectural decision, data schema, and terminal interaction is formally documented in specifications before implementation:

- 📑 **[specs/README.md](./specs/README.md)** — SDD Manifesto, Index, and Principles
- 📋 **[specs/01-product-spec.md](./specs/01-product-spec.md)** — Requirements, Personas, and Non-Goals
- 🏛️ **[specs/02-architecture-spec.md](./specs/02-architecture-spec.md)** — System Architecture, Hierarchy, and Delivery Pipeline
- 📄 **[specs/03-data-schema-spec.md](./specs/03-data-schema-spec.md)** — Formal Schema & TypeScript Interfaces for `portfolio.config.js`
- 💻 **[specs/04-terminal-engine-spec.md](./specs/04-terminal-engine-spec.md)** — Shell State Machine & Command Execution Rules
- 🗺️ **[specs/05-tasks-and-roadmap.md](./specs/05-tasks-and-roadmap.md)** — Completed Milestones & Prioritized Backlog
