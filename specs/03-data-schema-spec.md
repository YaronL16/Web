# Spec 03: Data Schema & Contract Specification

## 1. Schema Definition (`portfolio.config.js`)

All portfolio content is decoupled into the root file [`portfolio.config.js`](../portfolio.config.js). The file exports an object named `portfolioConfig`.

Below is the formal TypeScript interface specification governing this contract:

```typescript
export interface PortfolioConfig {
  disclaimerBanner?: DisclaimerBannerConfig;
  personal: PersonalConfig;
  metrics?: MetricItem[];
  terminal: TerminalConfig;
  projectsSubtitle?: string;
  projects: ProjectItem[];
  certifications?: CertificationItem[];
  speaking?: SpeakingItem[];
  skillCategories: SkillCategory[];
  skills: SkillItem[];
  personalHighlights: PersonalHighlightItem[];
  spokenLanguages?: SpokenLanguageItem[];
  footer?: FooterConfig;
}

export interface CertificationItem {
  name: string;
  code: string; // e.g. "AZ-305", "AZ-104", "AZ-204"
  issuer: string;
  icon?: string;
}

export interface SpeakingItem {
  event: string;
  year: string;
  role: string;
  topic: string;
  link?: string;
  description: string;
}

export interface SpokenLanguageItem {
  language: string;
  level: string; // e.g. "Native", "Fluent", "Working proficiency", "Conversational"
  dotColor?: string; // Tailwind bg color class, e.g. "bg-emerald-400"
}

export interface DisclaimerBannerConfig {
  enabled: boolean;
  badge?: string;
  icon?: string; // Icon identifier from ICON_MAP (e.g. "Workflow", "Cpu", "Bot")
  text: string;
}

export interface PersonalConfig {
  name: string;
  handle: string;
  role: string;
  education: string;
  email: string;
  github?: string;
  linkedin?: string;
  statusBadge: string;
  headline: string;
  bio: string;
}

export interface MetricItem {
  value: string;
  label: string;
  accent?: string; // Tailwind color class, e.g. "text-cyan-400"
}

export interface TerminalConfig {
  user: string;
  host: string;
  shell?: string; // Shell identifier (e.g. "yaronsh", defaults to "yaronsh")
  nodeVersion?: string;
  welcomeText: string[];
  quickButtons: string[];
  commands: Record<string, string>; // Key is command name, value is formatted terminal output
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: string; // e.g. "Production Grade", "Active Control Plane"
  description: string;
  highlights?: string[];
  tags: string[];
}

export interface SkillCategory {
  id: string; // Used for section matching, e.g. "orchestration", "gitops", "cloud"
  name: string;
  badge?: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  category: string; // Matches a SkillCategory.id
  level: string;    // e.g. "Advanced", "Proficient", "Working Knowledge", "Familiar"
  icon: string;     // Unicode emoji character, e.g. "☸️"
  primary?: boolean; // When true, rendered in core specialization grid; false in downplayed secondary tooling
}

export interface PersonalHighlightItem {
  title: string;
  tagline: string;
  iconName: string; // Key in ICON_MAP, e.g. "Dumbbell", "GlassWater", "Music2"
  accent: string;   // Tailwind gradient classes
  description: string;
}

export interface FooterConfig {
  credit?: string;
  systemStatus?: string;
}
```

---

## 2. Dynamic Icon Resolution

To preserve clean separation without runtime bundle bloat, icons in `personalHighlights` are specified by string identifier and resolved against `ICON_MAP`:

| Icon Key (`iconName`) | Lucide Icon Component | Fallback |
| :--- | :--- | :--- |
| `Dumbbell` | `Dumbbell` | `Sparkles` |
| `GlassWater` | `GlassWater` | `Sparkles` |
| `Music2` | `Music2` | `Sparkles` |
| `Camera` | `Camera` | `Sparkles` |
| `Terminal` | `TerminalIcon` | `Sparkles` |
| `Server` | `Server` | `Sparkles` |
| `Shield` | `Shield` | `Sparkles` |
| `Cloud` | `Cloud` | `Sparkles` |
| `Activity` | `Activity` | `Sparkles` |
| `Cpu` | `Cpu` | `Sparkles` |
| `Boxes` | `Boxes` | `Sparkles` |
| *(Any Unrecognized String)* | `Sparkles` | `Sparkles` |

---

## 3. Extensibility Guidelines

1. **Adding a New Project:**
   Append an object to `projects` array in `portfolio.config.js`. The UI grid dynamically accommodates any number of items without layout distortion.
2. **Adding a New Terminal Command:**
   Add a key-value pair under `terminal.commands`. The `help` command automatically introspects and lists the new command in real time.
3. **Updating Skills:**
   Add items to `skills` array with corresponding `category` identifier matching one of the entries in `skillCategories`.
