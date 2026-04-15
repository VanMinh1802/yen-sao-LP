# SDD - F9: Responsive Design & Final Polish

## Document Metadata

```yaml
spec_id: SDD-2026-F09
title: "Responsive Design & Final Polish"
author: "Agent"
date: "2026-04-15"
status: Draft
priority: Medium
type: Enhancement
related_issues: []
related_specs: [SDD-2026-F00, SDD-2026-F01, SDD-2026-F02, SDD-2026-F03, SDD-2026-F04, SDD-2026-F05, SDD-2026-F06, SDD-2026-F07, SDD-2026-F08]
```

---

## 1. Introduction

### 1.1 Purpose

Feature F9 is the final polish pass — ensuring all sections work harmoniously across all breakpoints, accessibility is compliant, performance is optimized, and the deployment to Cloudflare Pages works correctly.

### 1.2 Scope

**In Scope:**

- Cross-section responsive testing at 320px, 375px, 768px, 1024px, 1440px, 2560px
- Smooth scroll behavior for all anchor links
- Accessibility audit (ARIA labels, keyboard navigation, color contrast)
- Image optimization with Next.js `<Image>` component (sizes, priority, loading)
- Lighthouse performance audit (target 90+)
- Final SEO verification
- Cloudflare Pages deployment verification
- Visual comparison with mockup.html

**Out of Scope:**

- New feature development
- Content changes
- Backend integrations
- E2E test automation setup

---

## 2. Proposed Folder Structure

### 2.1 Modified Files

This feature modifies existing files only — no new feature folders.

| File | Modification Type | Description |
|------|------------------|-------------|
| All feature components | Modify | Fine-tune responsive classes |
| `src/app/globals.css` | Modify | Add any missing responsive utilities |
| `src/app/page.tsx` | Modify | Landing page assembly, smooth scroll |
| `next.config.ts` | Modify | Image optimization config |

---

## 3. Functional Requirements

### 3.1 Responsive Breakpoints

All sections must be tested at these breakpoints:

| Breakpoint | Target Devices | Key Adjustments |
|-----------|---------------|----------------|
| 320px | Small phones | Minimum viable layout |
| 375px | iPhone SE/12 Mini | Standard mobile |
| 768px | iPad portrait | Major layout shift |
| 900px | Hero-specific | Hero layout shift |
| 1024px | iPad landscape / small laptop | Grid adjustments |
| 1440px | Standard desktop | Default design |
| 2560px | Ultra-wide monitors | Content stays centered |

### 3.2 Responsive Rules Per Section

| Section | ≤768px | ≤1024px |
|---------|--------|---------|
| Header | Hamburger menu, full-screen overlay | Nav visible |
| Hero | Column-reverse, image 350px above content | Split layout |
| About | Single-column timeline, line on left | Full timeline |
| Products | 1-column card grid | 2-column grid |
| Process | Vertical steps, vertical line | Horizontal flow |
| Why Us | 1-column cards | 2-column bento |
| Testimonials | Only active card, no prev/next | Full carousel |
| Contact | Map above, card below | Map bg + floating card |
| Footer | 1-column, stacked bottom | 2-column grid |

### 3.3 Accessibility Requirements

| ID | Requirement | Implementation |
|----|------------|----------------|
| A-01 | Skip-to-content link | Already in F1 |
| A-02 | HTML lang="vi" | Already in F0 |
| A-03 | All images have alt text | Verify all `<Image>` components |
| A-04 | Interactive elements have focus styles | Tab through all, verify focus rings |
| A-05 | Color contrast ≥ 4.5:1 for text | Verify with accessibility tools |
| A-06 | ARIA roles on tabs, carousel | Verify tab roles, carousel |
| A-07 | Keyboard navigation in mobile menu | Tab through menu items |
| A-08 | Form labels/aria-label | Contact form fields |

### 3.4 Performance Optimization

| Task | Details |
|------|---------|
| Image priority | Hero background → priority={true} |
| Image sizes | Use `sizes` prop for responsive images |
| Font preload | Ensure fonts preload correctly |
| Lazy sections | Below-fold images use loading="lazy" |
| CSS optimization | Tailwind purges unused styles |
| Bundle analysis | Check for unnecessary JS |

### 3.5 SEO Verification

| Check | Expected |
|-------|---------|
| `<title>` | Yến Sào Ngọc Thảo Khánh Hòa — 20 Năm Uy Tín |
| `<meta description>` | Present, ≤155 chars |
| `<h1>` | Exactly one, contains brand name |
| `<h2>` | One per section |
| Open Graph tags | title, description, type |
| Semantic HTML | header, main, section, footer |
| Anchor links | Valid hash references |

---

## 4. Browser Test Scenarios

| ID | Test Case | Steps | Expected Result | Status |
|----|----------|-------|----------------|--------|
| BT-01 | Mobile 375px full page | Load at 375px, scroll through all sections | All sections render, no overflow | Pending |
| BT-02 | Tablet 768px full page | Load at 768px, scroll through all sections | Layout shifts correct | Pending |
| BT-03 | Desktop 1440px full page | Load at 1440px, scroll through all sections | Matches mockup closely | Pending |
| BT-04 | Keyboard navigation | Tab through entire page | All interactive elements focusable | Pending |
| BT-05 | Smooth scroll all links | Click every nav link | All scroll smoothly to target | Pending |
| BT-06 | Lighthouse mobile score | Run Lighthouse in mobile mode | Performance ≥ 90 | Pending |
| BT-07 | Lighthouse desktop score | Run Lighthouse in desktop mode | Performance ≥ 90 | Pending |
| BT-08 | No console errors | Open console, scroll through page | Zero JS errors | Pending |
| BT-09 | Cloudflare deployment | Deploy to Cloudflare Pages | Site accessible at production URL | Pending |
| BT-10 | Visual comparison | Side-by-side with mockup.html | Close visual match | Pending |

---

## 4.4 Required Skills for Implementer

> Subagent **MUST** read these skills before writing any code for this feature.

| Priority | Skill | Path | Reason |
|----------|-------|------|--------|
| 1 (Entry) | `frontend-principles` | `.agents/skills/frontend-principles/SKILL.md` | Core principles, workflow, quality gates |
| 2 | `frontend-quality` | `.agents/skills/frontend-quality/SKILL.md` | Quality gates, hard rules, review checklist |
| 3 | `frontend-security` | `.agents/skills/frontend-security/SKILL.md` | Security patterns, CSP, form protection |
| 4 | `frontend-nextjs-16` | `.agents/skills/frontend-nextjs-16/SKILL.md` | Image optimization, metadata, deployment |

---

## 5. Acceptance Criteria

- [ ] All sections render correctly at 375px, 768px, 1024px, 1440px
- [ ] No horizontal overflow on any breakpoint
- [ ] Smooth scroll works on all anchor links
- [ ] All images have alt text
- [ ] Keyboard navigation works through entire page
- [ ] Color contrast passes WCAG AA
- [ ] Lighthouse Performance ≥ 90 (desktop)
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse SEO ≥ 90
- [ ] `npm run build` succeeds with zero errors
- [ ] `npm run lint` passes
- [ ] Cloudflare Pages deployment succeeds
- [ ] Visual parity with mockup.html

---

## 6. Review & Approval

| Reviewer | Status | Comments |
|----------|--------|----------|
| | Pending | |

---

## 7. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | 2026-04-15 | Agent | Initial draft |
