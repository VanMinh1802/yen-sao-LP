# SDD - F0: Project Setup & Design System

## Document Metadata

```yaml
spec_id: SDD-2026-F00
title: "Project Setup & Design System"
author: "Agent"
date: "2026-04-15"
status: Draft
priority: Critical
type: Feature
related_issues: []
related_specs: [SDD-2026-F01, SDD-2026-F02, SDD-2026-F03, SDD-2026-F04, SDD-2026-F05, SDD-2026-F06, SDD-2026-F07, SDD-2026-F08]
```

---

## 1. Introduction

### 1.1 Purpose

Feature F0 establishes the foundation for the entire Yến Sào Ngọc Thảo landing page project. It sets up all dependencies, design tokens, fonts, image assets, shared utilities, and Framer Motion animation variants that every subsequent feature depends on.

Without F0, no other feature can be implemented.

### 1.2 Scope

**In Scope:**

- Install new dependencies: shadcn/ui, framer-motion, zod, react-hook-form
- Configure shadcn/ui with "default" style
- Migrate CSS custom properties from mockup to Tailwind CSS theme (colors, fonts, spacing)
- Configure fonts: Be Vietnam Pro (Google Fonts) + DFVN Abygaer (local @font-face)
- Copy and organize image assets into `public/images/`
- Create `lib/utils.ts` with `cn()` helper
- Create `lib/fonts.ts` with font configuration
- Create `lib/motion.ts` with shared Framer Motion animation variants
- Create reusable `SectionHeader` component
- Create `providers.tsx` for client-side providers
- Set up SEO metadata in root layout
- Clean up default Next.js boilerplate from `page.tsx` and `globals.css`

**Out of Scope:**

- Image optimization/compression (deferred)
- Feature-specific components
- API routes or server actions
- Testing setup (Vitest configuration)

### 1.3 Definitions & Abbreviations

| Term | Definition |
|------|-----------|
| Design Token | Reusable design value (color, size, spacing) stored as CSS variable or Tailwind config |
| shadcn/ui | Component library built on Radix UI + Tailwind CSS |
| Framer Motion | Animation library for React |
| cn() | Utility function to merge Tailwind CSS class names (clsx + twMerge) |

### 1.4 References

- mockup.html: `c:\VanMinh\side-project\LP-yen-sao\mockup.html` (lines 28-72 for CSS variables)
- shadcn/ui docs: https://ui.shadcn.com
- Framer Motion docs: https://www.framer.com/motion/
- `frontend-principles` skill
- `frontend-arch` skill

---

## 2. Proposed Folder Structure

### 2.1 New Files & Directories

```
my-next-app/
├── public/
│   ├── fonts/
│   │   └── DFVN-Abygaer.otf          # Custom display font
│   └── images/
│       ├── hero/
│       │   └── hinh-yen.png            # Hero background image
│       ├── products/
│       │   ├── yen-tho-nguyen-to.jpeg
│       │   ├── hop-qua-cao-cap.jpeg
│       │   ├── yen-soi-cao-cap.jpeg
│       │   ├── yen-tinh-che.jpg
│       │   ├── set-qua-dac-biet.jpeg
│       │   └── yen-tho-dao.jpg
│       ├── timeline/
│       │   ├── 2006.jpeg
│       │   ├── 2010.jpeg
│       │   ├── 2018.jpeg
│       │   └── 2026.jpeg
│       ├── why-us/
│       │   └── nha-yen.jpeg
│       └── logo/
│           └── logoyen.png
├── src/
│   ├── app/
│   │   ├── globals.css                 # [MODIFY] Tailwind + design tokens
│   │   ├── layout.tsx                  # [MODIFY] Fonts, metadata, providers
│   │   ├── page.tsx                    # [MODIFY] Clean up boilerplate
│   │   └── providers.tsx               # [NEW] Client providers wrapper
│   ├── components/
│   │   └── ui/                         # [NEW] shadcn/ui components directory
│   │       └── (initialized by shadcn CLI)
│   ├── lib/
│   │   ├── utils.ts                    # [NEW] cn() helper + shared utilities
│   │   ├── fonts.ts                    # [NEW] Font configuration
│   │   └── motion.ts                   # [NEW] Shared Framer Motion variants
│   └── features/
│       └── shared/
│           └── components/
│               └── SectionHeader.tsx   # [NEW] Reusable section header
```

### 2.2 Modified Files

| File | Modification Type | Description |
|------|------------------|-------------|
| `src/app/globals.css` | Modify | Replace default Tailwind styles with brand design tokens |
| `src/app/layout.tsx` | Modify | Add font imports, SEO metadata, providers wrapper |
| `src/app/page.tsx` | Modify | Remove default Next.js boilerplate, prepare for section assembly |
| `package.json` | Modify | New dependencies installed via npm |
| `src/app/globals.css` | Modify | Tailwind v4 `@theme inline {}` extension with brand colors (NO tailwind.config.ts in v4) |

### 2.3 Deleted Files

| File | Reason |
|------|--------|
| (none) | No files deleted |

### 2.4 Folder Structure Checklist

- [x] Folder structure follows **feature-based architecture**
- [x] No shared components will contain business logic
- [x] `SectionHeader` is purely presentational (no data fetching, no hooks)
- [x] Shared utilities in `lib/` (not in features)
- [x] Image assets organized by feature in `public/images/`
- [x] Font files in `public/fonts/`
- [x] No cross-feature imports

### 2.5 Architecture Decisions

| Decision | Options Considered | Chosen Approach | Rationale |
|----------|-------------------|-----------------|-----------|
| Design tokens location | Tailwind config file / CSS variables in globals.css / Both | CSS `@theme inline {}` in globals.css (Tailwind v4) | Tailwind v4 uses CSS-first configuration — **no tailwind.config.ts** exists. All tokens defined via `@theme inline {}` block |
| Font loading | next/font / manual @font-face | `next/font/google` for Be Vietnam Pro + `next/font/local` for DFVN Abygaer | Both approaches use next/font for optimization, font preloading, and CSS variable generation |
| Animation library | CSS keyframes only / Framer Motion / Both | Framer Motion for scroll-triggered + CSS for simple loops | Framer Motion provides `whileInView` for scroll animations; simple CSS keyframes for infinite loops like spinning dashed borders |
| SectionHeader location | `components/ui/` / `features/shared/` | `features/shared/components/` | It's a pattern used across all features but contains no business logic — shared feature is appropriate |

### 2.6 Folder Structure Review

| Reviewer | Status | Comments |
|----------|--------|----------|
| | Pending | |

---

## 3. User Interactions & Flows

### 3.1 User Stories

| ID | As a... | I want to... | So that... | Priority |
|----|---------|-------------|-----------|----------|
| US-01 | Developer | have a consistent design system | all features use the same colors, fonts, and spacing | Must Have |
| US-02 | Developer | have reusable animation variants | I don't duplicate animation code across features | Should Have |
| US-03 | Visitor | see the brand fonts load quickly | the page feels premium from the first paint | Must Have |
| US-04 | Developer | have shadcn/ui initialized | I can use pre-built accessible components | Must Have |

### 3.2 User Flows

```
Flow: Initial Page Load
Actor: Website Visitor

Step 1: Visitor navigates to the landing page URL
Step 2: Browser loads HTML with preconnected Google Fonts
Step 3: Be Vietnam Pro font renders for body text
Step 4: DFVN Abygaer loads for hero title (swap display)
Step 5: Tailwind CSS loads with brand design tokens
Step 6: Page renders with cream background (#FEFCF3) and proper typography
End: Visitor sees a properly styled, branded landing page
```

### 3.3 Error Flows

```
Flow: Custom Font Fails to Load
Trigger: DFVN Abygaer .otf file fails to download

Step 1: Browser cannot load DFVN-Abygaer.otf
Step 2: font-display: swap causes fallback to Be Vietnam Pro
Step 3: Hero title renders in Be Vietnam Pro instead
End: Page remains functional with slightly different hero typography
```

---

## 4. Functional Requirements

### 4.1 Core Features

#### Feature F-01: Design Token System

**Description:** Map all CSS custom properties from mockup.html to Tailwind CSS v4 theme tokens.

**Business Rules:**

- All color tokens from mockup `:root` block must be available as Tailwind classes
- Brand colors: red (900-400), gold (700-200), cream (100-400), brown (900-600)
- Utility colors: white with opacity variants, black with opacity variants
- Typography: heading and body font families
- Spacing: section padding (100px desktop, 64px mobile), container max-width (1200px)
- Transitions: fast (0.2s), normal (0.3s), slow (0.6s)

**Design Token Mapping:**

| Mockup CSS Variable | Value | Tailwind Token |
|--------------------|----|----------------|
| `--red-900` | `#5C0A0A` | `--color-red-900` |
| `--red-800` | `#7A1010` | `--color-red-800` |
| `--red-700` | `#8B0000` | `--color-red-700` |
| `--red-600` | `#A31B1B` | `--color-red-600` |
| `--red-500` | `#C41E3A` | `--color-red-500` |
| `--red-400` | `#E8384F` | `--color-red-400` |
| `--gold-700` | `#8B6914` | `--color-gold-700` |
| `--gold-600` | `#B8860B` | `--color-gold-600` |
| `--gold-500` | `#D4A843` | `--color-gold-500` |
| `--gold-400` | `#E8C55A` | `--color-gold-400` |
| `--gold-300` | `#FFD700` | `--color-gold-300` |
| `--gold-200` | `#FFE44D` | `--color-gold-200` |
| `--cream-100` | `#FEFCF3` | `--color-cream-100` |
| `--cream-200` | `#FFF8F0` | `--color-cream-200` |
| `--cream-300` | `#FFF5E6` | `--color-cream-300` |
| `--cream-400` | `#FFECD2` | `--color-cream-400` |
| `--brown-900` | `#1A0A00` | `--color-brown-900` |
| `--brown-800` | `#2D1810` | `--color-brown-800` |
| `--brown-700` | `#3D2B1F` | `--color-brown-700` |
| `--brown-600` | `#5C4033` | `--color-brown-600` |
| `--white` | `#FFFFFF` | (use Tailwind built-in `white`) |
| `--white-90` | `rgba(255,255,255,0.9)` | `--color-white-90` |
| `--white-70` | `rgba(255,255,255,0.7)` | `--color-white-70` |
| `--white-50` | `rgba(255,255,255,0.5)` | `--color-white-50` |
| `--white-20` | `rgba(255,255,255,0.2)` | `--color-white-20` |
| `--black-80` | `rgba(0,0,0,0.8)` | `--color-black-80` |
| `--black-50` | `rgba(0,0,0,0.5)` | `--color-black-50` |
| `--black-30` | `rgba(0,0,0,0.3)` | `--color-black-30` |
| `--black-10` | `rgba(0,0,0,0.1)` | `--color-black-10` |

---

#### Feature F-02: Font Configuration

**Description:** Configure Be Vietnam Pro (Google Fonts) and DFVN Abygaer (local) fonts using next/font.

**Business Rules:**

- Be Vietnam Pro: via `next/font/google`, weights 300, 400, 500, 600, 700, 800 (subsets: `latin`, `vietnamese`)
- DFVN Abygaer: via `next/font/local`, source: `../../public/fonts/DFVN-Abygaer.otf`, normal weight only
- Both fonts generate CSS variables automatically via next/font `variable` option
- Be Vietnam Pro is the default body + heading font
- CSS variables: `--font-heading` (Be Vietnam Pro), `--font-body` (Be Vietnam Pro), `--font-display` (DFVN Abygaer)
- Remove existing Geist/Geist_Mono font imports from layout.tsx

---

#### Feature F-03: Shared Animation Variants

**Description:** Create reusable Framer Motion animation variants for scroll-triggered animations, plus CSS keyframes for infinite loops.

**Framer Motion Variants (lib/motion.ts):**

| Variant Name | Description | Properties |
|-------------|------------|-----------|
| `fadeInUp` | Fade in while sliding up | `from: { opacity: 0, y: 40 }` → `to: { opacity: 1, y: 0 }` |
| `fadeIn` | Simple fade in | `from: { opacity: 0 }` → `to: { opacity: 1 }` |
| `slideDown` | Slide down into view | `from: { opacity: 0, y: -20 }` → `to: { opacity: 1, y: 0 }` |
| `staggerContainer` | Parent container for staggered children | `staggerChildren: 0.12` |
| `scaleIn` | Scale from 0.8 to 1 with fade | `from: { opacity: 0, scale: 0.8 }` → `to: { opacity: 1, scale: 1 }` |

**CSS Keyframes (globals.css) — for infinite/looping animations:**

| Keyframe Name | Description | Usage |
|-------------|------------|-------|
| `float` | Gentle vertical bob (0 → -10px → 0) | Decorative floating elements |
| `shimmer` | Background position sweep (-200% → 200%) | Loading/gold shimmer effects |
| `pulse-gold` | Gold box-shadow pulse (0px → 15px → 0px) | CTA attention glow |
| `spin-dashed` | 360° rotation for dashed border ring | Process step icons (F5) |

**Transition defaults:**

- Duration: 0.6s-0.8s
- Ease: `[0.25, 0.8, 0.25, 1]` (custom cubic-bezier matching mockup)
- `whileInView` threshold: 0.1
- `viewport.once: true` (animate only on first scroll)

---

#### Feature F-04: SectionHeader Component

**Description:** Reusable component for the section header pattern used across About, Products, Process, Why Us, Testimonials, and Contact sections.

**Pattern from mockup:**

```
[Section Label]  — small uppercase text (e.g., "Câu Chuyện Của Chúng Tôi")
[Section Title]  — large heading (e.g., "Hơn 20 Năm Tâm Huyết Với Yến Sào")
[Divider]        — gold gradient line (60px wide)
[Subtitle]       — optional descriptive text
```

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Small uppercase label text |
| title | string | Yes | Section heading (h2) |
| subtitle | string | No | Optional description text below divider |
| variant | 'light' \| 'dark' | No | Light (default) or dark theme styling |
| className | string | No | Additional CSS classes |

**Styling rules:**

- Light variant: label is red-500, title is brown-800, subtitle is brown-600
- Dark variant: label is gold-400, title is white, subtitle is white/70

---

#### Feature F-05: Root Layout & SEO

**Description:** Configure the root layout with fonts, metadata, and providers.

**SEO Metadata:**

| Meta Tag | Value |
|---------|-------|
| title | Yến Sào Ngọc Thảo Khánh Hòa — 20 Năm Uy Tín |
| description | Yến Sào Ngọc Thảo Khánh Hòa — 20 năm kinh nghiệm, yến sào 100% tự nhiên, có nhà yến riêng tại Nha Trang. |
| keywords | yến sào, ngọc thảo, khánh hòa, nha trang, bird nest, yến thô, hộp quà tặng |
| og:title | Yến Sào Ngọc Thảo Khánh Hòa — 20 Năm Uy Tín |
| og:description | Yến sào 100% tự nhiên từ nhà yến riêng tại Nha Trang. Hơn 20 năm uy tín. |
| og:type | website |
| lang | vi |

---

## 5. Data Model

### 5.1 Domain Entities

No data entities for this foundation feature. All content is static.

### 5.2 State Machine

No state machines for this foundation feature.

---

## 6. Edge Cases & Error Handling

### 6.1 Edge Cases

| ID | Scenario | Expected Behavior | Severity |
|----|---------|------------------|----------|
| EC-01 | DFVN Abygaer font fails to load | Fallback to Be Vietnam Pro via font-display: swap | Low |
| EC-02 | Image asset not found | Next.js returns 404 for the image path | Low |
| EC-03 | Tailwind CSS fails to compile | Build error with clear error message | High |

### 6.2 Error Handling Matrix

| Error Condition | User Message | System Action | Logging |
|----------------|-------------|--------------|---------|
| Font load failure | (none — fallback renders) | Use fallback font | warn |
| CSS compilation error | (build fails) | Show build error in terminal | error |

---

## 7. Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|------------|-------------------|
| NFR-01 | Performance | Font preloading configured for FOUC prevention |
| NFR-02 | Performance | Images served from `public/` with correct paths |
| NFR-03 | Accessibility | Root HTML lang attribute set to "vi" |
| NFR-04 | SEO | All meta tags present in document head |
| NFR-05 | Build | `npm run build` succeeds with zero errors |

---

## 8. Unit Test Cases (TDD)

> For this foundation feature, tests focus on the SectionHeader component and utility functions.

### 8.1 Test Cases

#### TC-01: cn() utility merges class names correctly

**Given:** Two class name strings with potential conflicts
**When:** cn() is called with both strings
**Then:** Returns merged string with Tailwind conflicts resolved

---

#### TC-02: SectionHeader renders all elements in light variant

**Given:** Label, title, and subtitle props
**When:** SectionHeader renders with variant="light"
**Then:** Label, h2 title, divider, and subtitle are all visible with correct colors

---

#### TC-03: SectionHeader hides subtitle when not provided

**Given:** Label and title props only
**When:** SectionHeader renders without subtitle prop
**Then:** No subtitle paragraph element is rendered

---

#### TC-04: SectionHeader renders dark variant with correct colors

**Given:** Label, title, subtitle, and variant="dark"
**When:** SectionHeader renders
**Then:** Label is gold, title is white, subtitle has reduced opacity

---

## 9. Browser Test Scenarios

### 9.1 Pre-Conditions

- Application running on `http://localhost:3000`
- All image assets copied to `public/images/`
- Font files in `public/fonts/`

### 9.2 Test Cases

| ID | Test Case | Steps | Expected Result | Status |
|----|----------|-------|----------------|--------|
| BT-01 | Page loads with brand colors | Navigate to localhost:3000, inspect body background | Background is cream (#FEFCF3) | Pending |
| BT-02 | Be Vietnam Pro font loads | Inspect computed font-family on body text | font-family contains "Be Vietnam Pro" | Pending |
| BT-03 | SEO metadata present | Check document head for meta tags | title, description, og tags present | Pending |
| BT-04 | No console errors | Open browser console | Zero JavaScript errors | Pending |
| BT-05 | Build succeeds | Run `npm run build` | Build completes with 0 errors | Pending |

---

## 10. Dependencies

### 10.1 External Dependencies

| Dependency | Version | Purpose |
|-----------|---------|---------|
| shadcn/ui | latest | UI component library |
| framer-motion | latest | Animation library |
| zod | latest | Runtime validation |
| react-hook-form | latest | Form management |
| @hookform/resolvers | latest | Zod resolver for react-hook-form |
| clsx | latest | Conditional class names |
| tailwind-merge | latest | Merge Tailwind classes |

### 10.2 Internal Dependencies

| Component | Relationship | Notes |
|-----------|-------------|-------|
| globals.css | Used by all components | Contains design tokens |
| lib/utils.ts | Used by all components | cn() helper |
| lib/fonts.ts | Used by layout.tsx | Font config |
| lib/motion.ts | Used by animated features | Animation variants |
| SectionHeader | Used by F3-F8 sections | Reusable section pattern |

---

## 10.3 Required Skills for Implementer

> Subagent **MUST** read these skills before writing any code for this feature.

| Priority | Skill | Path | Reason |
|----------|-------|------|--------|
| 1 (Entry) | `frontend-principles` | `.agents/skills/frontend-principles/SKILL.md` | Core principles, workflow, quality gates |
| 2 | `frontend-arch` | `.agents/skills/frontend-arch/SKILL.md` | Feature-based folder structure, naming conventions |
| 3 | `frontend-nextjs-16` | `.agents/skills/frontend-nextjs-16/SKILL.md` | Next.js 16 App Router, layout.tsx, metadata |

---

## 11. Acceptance Criteria

### 11.1 Success Conditions

- [ ] All dependencies installed and importable
- [ ] shadcn/ui initialized with "default" style
- [ ] All 28 brand color tokens available as Tailwind classes (20 brand + 8 opacity)
- [ ] Be Vietnam Pro font renders on page load
- [ ] DFVN Abygaer .otf file accessible at /fonts/DFVN-Abygaer.otf
- [ ] Image assets organized in public/images/ subdirectories
- [ ] cn() utility works correctly
- [ ] SectionHeader component renders light and dark variants
- [ ] Framer Motion animation variants exported from lib/motion.ts
- [ ] SEO metadata in root layout matches mockup
- [ ] `npm run build` succeeds with zero errors
- [ ] `npm run lint` passes with zero errors

### 11.2 Definition of Done Checklist

- [ ] Folder structure reviewed and approved
- [ ] SPEC reviewed and approved
- [ ] Implementation matches SPEC exactly
- [ ] TypeScript build passes
- [ ] ESLint passes
- [ ] No hard rules violations

---

## 12. Review & Approval

### 12.1 Folder Structure Review

| Reviewer | Status | Comments |
|----------|--------|----------|
| | Pending | |

### 12.2 Full Document Review

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author | Agent | 2026-04-15 | |
| Reviewer 1 | | | |

---

## 13. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | 2026-04-15 | Agent | Initial draft |
