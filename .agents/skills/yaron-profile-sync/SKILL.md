---
name: yaron-profile-sync
description: >-
  Use this skill whenever editing, updating, summarizing, or adding content, biography details, work experience, projects, skills, certifications, or professional history about Yaron Lavi (the portfolio author/owner) in portfolio.config.js or documentation. Guides reading Yaron's LinkedIn profile (https://www.linkedin.com/in/yaron-lavi16/) for verified details while strictly enforcing the complete omission of any military, IDF, or defense force affiliations.
---

# Yaron Profile & Content Sync Skill

Use this skill when modifying, updating, or expanding biographical data, professional experience, projects, technical skills, or resume details for **Yaron Lavi**, the owner of this portfolio repository.

---

## 1. Primary Source of Truth: LinkedIn

When gathering or verifying Yaron's professional background, education, work experience, certifications, and technical domains:

* **Official Profile URL:** [https://www.linkedin.com/in/yaron-lavi16/](https://www.linkedin.com/in/yaron-lavi16/)
* **Access Protocol:**
  - Standard programmatic HTTP fetches to LinkedIn often return HTTP `999` due to platform anti-scraping protections.
  - Use browser navigation tools (such as Chrome DevTools MCP or `/browser`) or web search queries when retrieving live profile details.
  - If access is blocked or unavailable, ask the user to provide or confirm the specific details from their LinkedIn profile.

---

## 2. Non-Negotiable Invariants & Topic Boundaries

### 🚫 Complete Omission of Military & Defense Affiliations
* **NEVER** include, mention, or introduce any military service, Israel Defense Forces (IDF), army branches, units, ranks, or defense force affiliations in:
  - Website copy and hero sections
  - Project descriptions and highlights
  - Metrics and skills badges
  - Terminal engine commands and outputs
  - Documentation, markdown files, and commit messages
* **Omission Rule:** If any military or defense experience appears on LinkedIn or external profiles, **completely skip and omit it**. Focus exclusively on civilian software engineering, platform engineering, DevOps, cloud-native architectures, open-source projects, and academic education.

### 🧩 Content Decoupling Invariant
* **NEVER** hardcode user content, bio details, projects, skills, or terminal commands inside `src/App.jsx`.
* **ALWAYS** declare and edit content in [`portfolio.config.js`](file:///Users/yaron/work/git/Web/portfolio.config.js). `src/App.jsx` serves strictly as a presentation controller.

### 🚫 Zero Local Install Footprint
* **NEVER** run `npm install`, `yarn`, `pnpm`, or local build commands (`npm run build`, `vite build`).
* Remote GitHub Actions (`.github/workflows/deploy.yml`) handles all dependency resolution and asset compilation.

---

## 3. Workflow Checklist for Editing Content

1. **Check LinkedIn Details:** Look up relevant roles, tech stacks, or project context from [https://www.linkedin.com/in/yaron-lavi16/](https://www.linkedin.com/in/yaron-lavi16/).
2. **Filter Out Military Content:** Ensure zero military/IDF/defense mentions exist in the draft.
3. **Update `portfolio.config.js`:** Map new or updated details into the declarative data structures in `portfolio.config.js`:
   - `personal`: Name, handle, role, education, email, links, headline, bio.
   - `metrics`: Stat highlights.
   - `terminal.customCommands`: Interactive CLI commands.
   - `skills`: Categorized technical competencies.
   - `projects`: Highlighted work and architectures.
4. **Update Documentation / Specs:** If adding new schema fields, document them in [`specs/03-data-schema-spec.md`](file:///Users/yaron/work/git/Web/specs/03-data-schema-spec.md).
5. **Verify Syntax:** Ensure `portfolio.config.js` retains valid JavaScript syntax without introducing local dependencies.
