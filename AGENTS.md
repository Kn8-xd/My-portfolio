# AGENTS.md — My Personal Futuristic Portfolio

Read this file fully before doing any work in this repository. It defines the design system, tech stack, and rules for this project. Do not deviate from it without asking first — especially the "Things to actively avoid" section, which exists specifically to prevent this site from looking like a generic AI-generated template.

## What this project is

A personal portfolio site for a B.Tech CSE (3rd year) student, showcasing personal projects for campus placements. The goal is an award-site-quality (awwwards-tier) experience: smooth, interactive, scroll- and cursor-reactive, with one clear "wow" moment in the hero. It should feel premium, clean, and creative — **not** cyberpunk/neon, **not** a generic SaaS template, and not visually similar to any specific existing site. Budget for all tooling is $0 — only free/open-source libraries are used.

---

## Tech stack (do not introduce other libraries without asking)

| Purpose | Library | Notes |
|---|---|---|
| Build tool | Vite | React + TypeScript template |
| Framework | React 19 | Functional components + hooks only |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS v4 | via `@tailwindcss/vite`, CSS-first config using `@theme` in `src/index.css` — no `tailwind.config.js` needed |
| Smooth scroll | Lenis | Wraps native scroll; synced to GSAP ScrollTrigger |
| Scroll-driven animation | GSAP + ScrollTrigger + SplitText | Free since April 2025 (Webflow acquisition), commercial use included |
| 3D | React Three Fiber + @react-three/drei + three | Powers the hero's interactive subject |
| UI micro-interactions | Motion (`motion` package, formerly Framer Motion) | Hover states, custom cursor, tap feedback |
| Fonts | `@fontsource-variable/fraunces`, `@fontsource-variable/inter` | Self-hosted, no external Google Fonts request |

Do not add: Aceternity UI Pro, Magic UI Pro, React Bits Pro, motionsites.ai, or any other paid tier of anything. Free tiers of Aceternity/Magic UI/KokonutUI/React Bits may be used sparingly for small utility patterns (e.g. a marquee, a magnetic button), always restyled to match the tokens below — never used with their default styling as-is.

---

## Design tokens

### Color (dark mode only — do not build a light mode)

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#0E0F10` | Page background. Warm charcoal, not flat/pure black. |
| `--color-surface` | `#17181A` | Elevated panels, cards. |
| `--color-border` | `#232426` | Hairline dividers only. Used sparingly. |
| `--color-text` | `#EDEDEA` | Primary text. Off-white, never pure `#FFFFFF`. |
| `--color-text-muted` | `#8A8B87` | Secondary/supporting text. |
| `--color-accent` | `#C1293C` | Deep crimson. The ONE saturated color in the entire site. Used only on: the hero 3D subject, link/hover states, the single primary CTA button, and focus rings. |
| `--color-accent-secondary` | `#2B4A47` | Muted teal. Used extremely sparingly — only as a secondary gradient stop inside the 3D object, nowhere else. |

Rule: nothing else in the site is colorful. The restraint is what makes the accent color land. If you find yourself reaching for the accent color a third or fourth place, stop and reconsider — it should feel special because it's rare.

### Typography

- Display/headline font: `"Fraunces Variable", serif` → Tailwind class `font-display`
- Body/UI font: `"Inter Variable", sans-serif` → Tailwind class `font-body`
- Two families only. Do not introduce a third.

Type scale (desktop; scale down proportionally for mobile, don't just shrink font-size — adjust line-height and spacing too):

| Role | Size | Line-height | Letter-spacing | Weight |
|---|---|---|---|---|
| Hero headline | clamp(48px, 7vw, 96px) | 1.05 | -0.02em | 500–600 |
| Section headline | clamp(32px, 4vw, 56px) | 1.1 | -0.01em | 500 |
| Subhead / intro paragraph | 20px | 1.5 | normal | 400 |
| Body text | 16px | 1.6 | normal | 400 |
| Small / labels / captions | 14px | 1.4 | normal | 400–500 |

- Body text column max-width: ~65–75 characters (`max-w-prose` in Tailwind, or ~600–650px).
- Never use all-caps for labels. Never add an eyebrow label above a heading unless it's genuinely load-bearing information.

### Layout

- Asymmetric, not centered. Headlines sit slightly left-of-center rather than dead-center.
- Generous negative space. Section vertical padding: ~160px desktop, ~96px mobile.
- Max content width ~1200px, with intentional full-bleed moments for the hero 3D canvas and the horizontal project gallery.

---

## Section-by-section plan

1. **Hero** — React Three Fiber scene (a single distinctive abstract 3D form — not a generic sphere/torus), accent-colored, everything else in the hero grayscale. Rotates/tilts toward cursor via `useFrame`, further scrubbed by scroll position via GSAP ScrollTrigger synced to Lenis. Headline in `font-display`, written as a plain sentence — no keyword-soup subtitle ("Full Stack Developer | React | Python").
2. **About/Intro** — Pure typography, one or two paragraphs, generous line-height. Text reveals word-by-word tied to scroll progress via GSAP SplitText + ScrollTrigger (`scrub: true`, not a triggered fade-in). No card, no icon grid, no eyebrow label.
3. **Skills/stack** — Do NOT build a tech-logo badge grid (it's the most templated part of every student portfolio). Weave stack mentions into project descriptions as plain text instead. If a dedicated element is wanted, a single quiet gray marquee of tech names (not logos) is the only acceptable version — never a highlight moment.
4. **Projects showcase** — The primary "keep fiddling" section. Horizontal scroll gallery pinned via GSAP ScrollTrigger (vertical scroll drives horizontal movement through cards). Each card tilts toward cursor on hover (pattern borrowed from Aceternity's 3D card, restyled with our tokens — never their default styling) and reveals one detail line. All cards structurally identical — same radius, same shadow treatment, no inconsistency between them.
5. **Custom cursor** (persistent, all sections) — small dot following the mouse with spring-physics lag (Motion's `useMotionValue` + spring), grows and shifts to `--color-accent` when hovering any clickable element.
6. **Contact/footer** — One CTA button only, using a magnetic-button effect (pulls toward cursor before click — Aceternity pattern, restyled). Do not apply the magnetic effect to any other button on the site. Plain text footer, no glass panel, no gradient wash.

---

## Motion principles

- Spend the "big" motion budget in exactly one place: the hero's 3D subject. Everything else is quiet by comparison.
- Scroll-triggered animation must be **scrubbed** (`scrub: true`, tied directly to scroll position), not a one-shot fade/slide-up triggered when a section enters the viewport. Fade-and-slide-up-on-every-section is the single most common tell of an AI-generated site — do not do it.
- Exactly one orchestrated entrance sequence is allowed, playing once on page load (e.g. the 3D object assembling itself, or the headline revealing). Nothing else auto-plays.
- All other motion responds to the user's own action: hover, click, drag, scroll. Nothing animates on its own after the load sequence finishes, except the hero's idle 3D motion and the ambient cursor-follow.
- Respect `prefers-reduced-motion`: disable/simplify the scroll-scrub and cursor-follow effects when it's set. Lenis handles this automatically; GSAP and Motion effects need an explicit check.
- Test the 3D scene's performance on a mid-range phone before considering any section "done." Lazy-load the R3F canvas if it's not the first thing in the viewport.

---

## Things to actively avoid (these are the tells that make a site look AI-generated/templated)

- Warm cream background (`#F4F1EA`-ish) + terracotta/clay accent.
- Near-black background + a single bright acid-green or vermilion accent (the "cyberpunk/gamer-RGB" look — also explicitly not wanted here).
- Identical rounded cards everywhere with the same soft grey box-shadow (`rgba(0,0,0,.1)`) regardless of content hierarchy.
- Tracked-out ALL-CAPS eyebrow labels above headings.
- Meta strings joined with middle dots (`A · B · C`) or labels built as `WORD — fragment` with a spaced em dash.
- A monospace font used purely as decoration for small labels (monospace is fine only when displaying actual technical content — a stack tag, a version number).
- Appending `→` to every link/button ("Learn more →").
- Numbered `01 / 02 / 03` markers unless the content is genuinely a sequence (a real timeline or ordered process).
- Accenting a single word in a headline with italics/bold/color.
- Fade-and-slide-up entrance on every section, hover-lift on every card — the generic default motion pattern.

---

## Coding conventions

- TypeScript strict mode. No `any` unless truly unavoidable, and comment why.
- Functional components + hooks only, no class components.
- Colors and fonts are always referenced via the CSS variables/Tailwind theme tokens defined above — never hardcode a hex value inside a component.
- Keep the R3F scene, the GSAP timeline setup, and the Lenis initialization each in their own dedicated file/hook, not inlined into page components.
- Commit to git before any large AI-driven rewrite so changes can be rolled back.

---

## Installed Claude Skills reference

This project has the following skills available under `.agents/skills/` — use them proactively when relevant, don't wait to be asked:

- **frontend-design** — design/typography/layout principles (this file is largely derived from it — consult it for anything not explicitly covered above).
- **webapp-testing** — use Playwright to load the running dev server, click through sections, and screenshot at multiple viewport widths to verify responsiveness and catch visual regressions, before declaring any section finished.
- **algorithmic-art** — use for generating any procedural/generative visual texture or background detail, instead of reaching for an off-the-shelf preset (e.g. a stock Vanta.js effect), to keep the visual identity unique.
