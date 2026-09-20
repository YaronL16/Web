---
name: guardrail-compliance-auditor
description: >-
  Use this skill to audit proposed code, specs, and portfolio content against the core invariants defined in AGENTS.md: zero military/IDF affiliations, profile accuracy against verified resume ground truth, zero local install/build footprint, and strict content decoupling to portfolio.config.js.
---

# Guardrail & Compliance Auditor Skill

Use this skill whenever auditing specifications, proposed changes, pull requests, or commits in the **Yaron Lavi Portfolio** repository.

This skill automates the **Compliance Gate** defined in [specs/06-agent-orchestration-spec.md](file:///Users/yaron/work/git/Web/specs/06-agent-orchestration-spec.md).

---

## 1. Automated Invariant Checklist

Before authorizing any code commit or deployment, run through all 4 checks:

```
[ ] Invariant 1: Topic Boundaries & Zero Military Affiliation
[ ] Invariant 2: Profile Ground Truth Verification
[ ] Invariant 3: Zero Local Footprint & Hermetic Execution
[ ] Invariant 4: Strict Content Decoupling
```

---

## 2. Audit Procedures

### 🚫 Check 1: Topic Boundaries & Zero Military Affiliation
* **Rule:** NEVER allow any military, Israel Defense Forces (IDF), army, unit, rank, or defense force affiliations across copy, code, comments, specs, or terminal outputs.
* **Audit Action:** Perform a case-insensitive search across newly drafted copy or modified files for prohibited stems:
  - `idf`, `military`, `army`, `defense force`, `armed forces`, `soldier`, `officer`, `unit 8200`, `c4i`, `matzpen`, `lotem`.
* **Remediation:** If found, **reject immediately**. Omit all military affiliations and restrict content exclusively to civilian software engineering, platform engineering, and academic achievements.

### 📋 Check 2: Profile Ground Truth Verification
* **Rule:** Professional background, education, and credentials must match verified civilian ground truth.
* **Audit Action:**
  1. Inspect [`.agents/skills/yaron-profile-sync/resources/resume.md`](file:///Users/yaron/work/git/Web/.agents/skills/yaron-profile-sync/resources/resume.md).
  2. Verify that roles (DevOps & Platform Engineer), education (B.Sc. Computer Science at The College of Management Academic Studies), and metrics match verified achievements.
* **Remediation:** Correct any fictionalized or hallucinated claims to align with the resume ground truth.

### 🚫 Check 3: Zero Local Footprint & Hermetic Execution
* **Rule:** `npm install`, `yarn`, `pnpm`, and local build tools (`npm run build`, `vite build`) must NEVER be executed locally. No `node_modules/` or `dist/` directories may exist.
* **Audit Action:**
  1. Check workspace tree for `node_modules/` or `dist/`.
  2. Verify that no proposed terminal commands invoke package managers or bundlers locally.
* **Remediation:** Remote GitHub Actions (`.github/workflows/deploy.yml`) is the sole environment where build processes execute. Delete any local build artifacts immediately if accidentally produced.

### 🧩 Check 4: Strict Content Decoupling
* **Rule:** `src/App.jsx` is strictly a presentation controller. All user data, metrics, projects, skills, and terminal commands must reside in `portfolio.config.js`.
* **Audit Action:**
  1. Inspect diffs in `src/App.jsx`.
  2. Ensure no hardcoded personal details, project descriptions, or text strings were introduced into JSX components.
* **Remediation:** Extract hardcoded strings and data structures into [`portfolio.config.js`](file:///Users/yaron/work/git/Web/portfolio.config.js) and reference them via props or config imports.

---

## 3. Compliance Sign-Off Format

Upon passing all checks, emit the following sign-off:

```markdown
### 🛡️ Compliance Audit Sign-Off
- **Topic Boundaries:** PASSED (Zero military/defense affiliations)
- **Profile Truth:** PASSED (Aligned with resume.md & LinkedIn)
- **Zero Local Footprint:** PASSED (Hermetic execution preserved)
- **Content Decoupling:** PASSED (100% config-driven)
- **Status:** APPROVED FOR IMPLEMENTATION / MERGE
```
