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
