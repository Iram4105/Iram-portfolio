# Iram — Portfolio

A premium interactive portfolio for a **B.Tech CSE 2027 fresher and aspiring software engineer**, open to entry-level opportunities across **Software Development, Full-Stack Development, AI/ML, QA/Testing, Cloud/DevOps, and Graduate Engineer Trainee roles**. It uses an **Emerald × Sage × Champagne** visual system, dark and light themes, a CSS 3D laptop hero, Framer Motion interactions, and a technology-focused project showcase. Built with **Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion**.

All resume-derived copy lives in one place: `src/lib/data.ts`. Anywhere the resume didn't provide a detail (e.g. LeetCode handle, project GitHub URLs, challenges faced), the field is clearly marked `PLACEHOLDER` in that file and in the on-page copy — search the codebase for `PLACEHOLDER` to find every one before launch.

## Folder structure

```
portfolio/
├─ public/
│  ├─ favicon.svg
│  ├─ manifest.json
│  ├─ og-image.png        ← placeholder social preview, replace with a real one
│  └─ resume.pdf           ← generated from the uploaded resume
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx        (fonts, metadata, theme + toast providers)
│  │  ├─ page.tsx          (assembles all sections)
│  │  ├─ loading.tsx       (route loading animation)
│  │  ├─ globals.css       (design tokens, glassmorphism, cursor, light-mode overrides)
│  │  ├─ sitemap.ts        (dynamic sitemap.xml)
│  │  └─ robots.ts         (dynamic robots.txt)
│  ├─ components/
│  │  ├─ Navbar.tsx, Hero.tsx, About.tsx, Education.tsx, Skills.tsx,
│  │  │  Projects.tsx, ProjectCard.tsx, Experience.tsx, Certifications.tsx,
│  │  │  Achievements.tsx, CodingProfiles.tsx, Contact.tsx, Footer.tsx
│  │  └─ ThemeToggle.tsx, ParticleBackground.tsx, CustomCursor.tsx,
│  │     ScrollProgress.tsx, BackToTop.tsx, SectionHeading.tsx
│  └─ lib/data.ts           (single source of truth — all resume content)
├─ tailwind.config.ts
├─ next.config.js
├─ package.json
└─ tsconfig.json
```

## Run locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

## What's implemented against the brief

- **Hero** — name, role, typewriter-animated role list, tagline, resume download, contact CTA, social icons, sage/champagne particle network, ambient gradients, and an interactive CSS 3D laptop illustration with pointer-responsive tilt.
- **About** — resume summary + goal rewritten as flowing copy, three strength cards, animated count-up stats.
- **Education** — timeline layout with degree, university, CGPA, and duration.
- **Skills** — categorized technology cards (Languages, Backend, Frontend, Databases, Frameworks, Tools, ML/AI, Cloud), without arbitrary percentage ratings.
- **Projects** — all six featured projects, each with overview, features, tech stack, an explicit challenges/what-I-learned expandable panel, screenshot placeholder, GitHub button, and Live Demo button (or a "coming soon" state when no demo exists). Includes **search** and **tag filtering**.
- **Experience & Training** — Summer Training Intern – Java Full Stack (Project Based Learning) at MIET (June–July 2026, 120 hours, on-site), plus ICT Academy – Cognizant Foundation Tech4All CSR Training Program (October 2026).
- **Certifications** — Wipro Certified in Java (Wipro TalentNext), MongoDB Certified Developer, Cisco Networking Certification, Oracle Cloud Infrastructure 2025 Certified Generative AI Professional, and HackerRank Software Engineer Intern.
- **Achievements** — five profile highlights, including 300+ LeetCode problems and an IEEE ICACECT-2027 research-paper acceptance.
- **Coding Profiles** — GitHub (`Iram4105`), LinkedIn, and LeetCode (`Iram010`) are listed; GeeksforGeeks remains a placeholder and should be replaced with the correct profile URL.
- **Contact** — email, phone, location, socials, and a working front-end form (see note below on wiring it to a backend).
- **Footer** — copyright + back-to-top button (global, appears on scroll).
- **Site-wide** — sticky navbar with scroll-spy active-section highlighting, theme switcher (dark default, light optional), scroll-progress bar, custom cursor with hover-grow, reduced-motion support, SEO metadata + Open Graph tags, dynamic `sitemap.xml` and `robots.txt`, semantic HTML, visible focus states.

## Before you launch — action items

1. **Connect the contact form.** It currently simulates a submit with a toast. Wire it to [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com/), or a Next.js API route + an email provider (Resend, Nodemailer).
2. **Fill in placeholders** in `src/lib/data.ts`:
   - Confirm the LeetCode profile URL and replace the GeeksforGeeks placeholder with the correct profile URL
   - Real GitHub repo URLs for each project (currently guessed as `github.com/Iram4105/<project-slug>`)
   - Live demo URLs, if any projects are deployed
   - Project "challenges" write-ups (the resume didn't detail obstacles — add 1-2 real ones per project for a stronger recruiter read)
   - `siteUrl` in `personal` — set to your real deployed domain (used in metadata, OG tags, and the sitemap)
3. **Replace `public/og-image.png`** with a designed 1200×630 social preview image.
4. **Add real project screenshots** — replace the placeholder block in `ProjectCard.tsx` with `<Image>` components once you have screenshots.
5. **Cloud skill** — the resume only says cloud fundamentals are "currently strengthening" with no named platform; update once you've picked one (AWS/Azure/GCP) and have something concrete to show.

## Deployment

### Vercel (recommended for Next.js)

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: Next.js (auto-detected). No extra config needed.
4. Deploy — Vercel builds and hosts it, including the dynamic sitemap/robots routes.
5. Add a custom domain under Project → Settings → Domains, then update `siteUrl` in `src/lib/data.ts` and redeploy.

### GitHub Pages (static export)

GitHub Pages only serves static files, so a couple of adjustments are needed since this project uses dynamic routes (`sitemap.ts`, `robots.ts`) and image optimization:

1. In `next.config.js`, add:
   ```js
   const nextConfig = {
     output: "export",
     images: { unoptimized: true },
   };
   ```
2. Remove or convert `src/app/sitemap.ts` and `src/app/robots.ts` to static files in `public/` (`public/sitemap.xml`, `public/robots.txt`), since static export doesn't support dynamic metadata routes.
3. Build and export:
   ```bash
   npm run build
   ```
   Output goes to the `out/` folder.
4. Push `out/` to a `gh-pages` branch (or use the `peaceiris/actions-gh-pages` GitHub Action) and enable GitHub Pages on that branch in repo Settings → Pages.
5. If deploying to `username.github.io/repo-name`, set `basePath` in `next.config.js` to `/repo-name`.

**Vercel is the simpler path** since it supports the App Router's dynamic sitemap/robots and image optimization out of the box with zero config changes.

## Suggestions to further strengthen the portfolio

- Add a blog or "notes" section — even 2-3 short technical write-ups (e.g. "How I structured the Complaint Portal's escalation scheduler") signal depth beyond a resume.
- Add real project screenshots/GIFs — recruiters skim visuals far more than text.
- Add a downloadable one-page PDF case study for the top 1-2 projects.
- Once LeetCode/GfG profiles exist, consider pulling live stats via their public APIs/widgets instead of static links.
- Add unit test badges or a CI status badge if projects have GitHub Actions set up — reinforces engineering rigor.
- Consider a subtle analytics integration (Vercel Analytics or Plausible) to see which sections recruiters actually read.
