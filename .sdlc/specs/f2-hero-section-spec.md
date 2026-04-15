# SDD - F2: Hero Section

## Document Metadata

```yaml
spec_id: SDD-2026-F02
title: "Hero Section"
author: "Agent"
date: "2026-04-15"
status: Draft
priority: High
type: Feature
related_issues: []
related_specs: [SDD-2026-F00, SDD-2026-F01]
```

---

## 1. Introduction

### 1.1 Purpose

Feature F2 implements the full-viewport hero section — the first visual impression of the Yến Sào Ngọc Thảo brand. It features a luxury dark split layout with custom display typography (DFVN Abygaer), a full-bleed background image of the bird's nest product, and key brand statistics.

### 1.2 Scope

**In Scope:**

- Full-viewport hero section (min-height: 100vh)
- Dark split layout: left content (45%) over full-bleed background image
- Custom hero title in DFVN Abygaer font
- Brand label "Hơn 20 Năm Uy Tín"
- Slogan text with two-line layout
- Two CTA buttons (gold solid + gold outline)
- Stats row (20+ Năm, 100% Tự Nhiên, 1000+ Khách Hàng)
- Background image with dark overlay
- Framer Motion entrance animations

**Out of Scope:**

- Video backgrounds
- Parallax scrolling
- Animated particle effects
- Scroll indicator arrow

### 1.3 Definitions & Abbreviations

| Term | Definition |
|------|-----------|
| Split layout | Content on one side, full-bleed image on the other |
| DFVN Abygaer | Custom display font used exclusively for the hero title |
| CTA | Call to Action — primary action buttons |

---

## 2. Proposed Folder Structure

### 2.1 New Files & Directories

```
src/features/hero/
├── components/
│   ├── HeroSection.tsx         # Main hero layout (Server Component wrapper)
│   ├── HeroContent.tsx         # Left content block (Client Component — animations)
│   ├── HeroStats.tsx           # Stats row component
│   └── HeroButtons.tsx         # CTA buttons (Client Component — hover effects)
└── index.ts                    # Public exports
```

### 2.2 Modified Files

| File | Modification Type | Description |
|------|------------------|-------------|
| `src/app/page.tsx` | Modify | Import and render HeroSection |

### 2.3 Deleted Files

| File | Reason |
|------|--------|
| (none) | |

### 2.4 Folder Structure Checklist

- [x] Folder structure follows **feature-based architecture**
- [x] No shared components contain business logic
- [x] HeroSection is Server Component (static content, SEO)
- [x] HeroContent is Client Component (Framer Motion animations)
- [x] Public API exported from `index.ts`
- [x] No cross-feature imports

### 2.5 Architecture Decisions

| Decision | Options Considered | Chosen Approach | Rationale |
|----------|-------------------|-----------------|-----------|
| Hero rendering | Full Client Component / Server wrapper + Client children | Server wrapper + Client HeroContent | SEO benefits for h1 heading, animations only in client children |
| Background image | Next.js Image / CSS background-image | CSS background-image via inline style + dark overlay | Full-bleed cover image with overlay is simpler with CSS; Next.js Image is for content images |
| Stats data | Props from page / Hardcoded in component | Hardcoded in HeroStats component | Static content that won't change, no data fetching needed |

### 2.6 Folder Structure Review

| Reviewer | Status | Comments |
|----------|--------|----------|
| | Pending | |

---

## 3. User Interactions & Flows

### 3.1 User Stories

| ID | As a... | I want to... | So that... | Priority |
|----|---------|-------------|-----------|----------|
| US-01 | Visitor | see an impressive luxury hero section | I immediately understand this is a premium brand | Must Have |
| US-02 | Visitor | see the brand name in a distinctive font | the brand feels unique and memorable | Must Have |
| US-03 | Visitor | see key statistics (20+ years, 100% natural) | I trust the brand immediately | Must Have |
| US-04 | Visitor | click "Xem Sản Phẩm" | I can quickly jump to the products section | Must Have |
| US-05 | Visitor | click "Liên Hệ Ngay" | I can reach the contact form | Must Have |

### 3.2 User Flows

```
Flow: Hero Section Experience
Actor: First-time Visitor

Step 1: Page loads — hero section fills the full viewport
Step 2: Background image of bird's nest is visible behind a dark overlay
Step 3: Left side content fades in with staggered animation:
  - Label "Hơn 20 Năm Uy Tín" fades in first
  - Title "Yến Sào / Ngọc Thảo" fades in with slight delay
  - Slogan fades in next
  - Buttons fade in last
Step 4: Stats row slides up from bottom
Step 5: Visitor reads content and decides to explore
Step 6: Visitor clicks "Xem Sản Phẩm" → smooth scroll to #products
End: Visitor navigates to products section
```

### 3.3 Error Flows

```
Flow: Hero Background Image Fails to Load
Trigger: hinh-yen.png fails to download

Step 1: Background image cannot load
Step 2: Dark brown background (brown-900) shows as fallback
Step 3: Content remains fully readable on dark background
End: Hero is functional but without background image
```

---

## 4. Functional Requirements

### 4.1 Core Features

#### Feature F-01: Hero Layout

**Description:** Full-viewport split layout with dark background and full-bleed image.

**Business Rules:**

- Container: min-height 100vh, display flex, background brown-900
- Left content panel: width 45%, centered vertically, padding 40px 32px 40px 17vw
- Background image: position absolute, inset 0, width 100%, z-index 1
- Image: `hinh-yen.png`, center/cover, no-repeat
- Dark overlay on image: rgba(0,0,0,0.15)
- Content z-index: 2 (above image)

**Responsive (≤900px):**

- Layout switches to column-reverse (image on top, content below)
- Image: width 100%, height 350px
- Content: padding 40px 24px, full width
- Buttons: flex-wrap, centered

---

#### Feature F-02: Hero Title & Typography

**Description:** Brand name displayed in DFVN Abygaer custom font.

**Business Rules:**

- Label: "Hơn 20 Năm Uy Tín"
  - Font-size: clamp(11px, 1vw, 14px)
  - Color: gold-500
  - Uppercase, letter-spacing: 3px
  - Gold line (40px × 1px) before text
- Title: "Yến Sào" (line 1) + "Ngọc Thảo" (line 2, em tag)
  - Font-family: DFVN Abygaer (fallback: Be Vietnam Pro)
  - Font-size: clamp(52px, 6vw, 100px)
  - Color: #ffeeba (warm gold)
  - Line-height: 1.15
- Slogan: "Thành Ý Gửi Trao" + "— Tâm Giao Nhân Khắp"
  - Font-size: clamp(18px, 1.8vw, 26px)
  - Font-style: italic
  - Color: #ffeeba
  - Second line: 0.9em, opacity 0.85

---

#### Feature F-03: CTA Buttons

**Description:** Two action buttons — primary gold and outline gold.

**Button 1: "Xem Sản Phẩm" (solid gold)**

- Background: linear-gradient(135deg, gold-500, gold-400)
- Color: #1a0f0a (dark brown)
- Border-radius: 50px
- Font-weight: 700
- Hover: translateY(-2px), box-shadow rgba(184,134,11,0.4)
- Links to: #products

**Button 2: "Liên Hệ Ngay" (outline gold)**

- Background: transparent
- Color: gold-400
- Border: 2px solid gold-400
- Hover: background fills to gold-400, color changes to dark brown
- Links to: #contact

---

#### Feature F-04: Stats Row

**Description:** Three key metrics displayed below the CTA buttons.

**Stats:**

| Stat | Number | Label |
|------|--------|-------|
| 1 | 20+ | Năm |
| 2 | 100% | Tự nhiên |
| 3 | 1000+ | Khách hàng |

**Styling:**

- Container: flex row, gap 32px, margin-top 40px, padding-top 32px
- Top border: 1px solid rgba(212,168,67,0.25) (gold separator)
- Number: clamp(24px, 3vw, 44px), font-weight 700, white
- Label: clamp(11px, 1vw, 15px), gold-400, uppercase, letter-spacing 1.5px

---

## 5. Data Model

### 5.1 Domain Entities

```
HeroStat
├── value: string — "20+", "100%", "1000+"
└── label: string — "Năm", "Tự nhiên", "Khách hàng"
```

All content is static / hardcoded.

---

## 6. Edge Cases & Error Handling

### 6.1 Edge Cases

| ID | Scenario | Expected Behavior | Severity |
|----|---------|------------------|----------|
| EC-01 | DFVN Abygaer font not loaded yet | Title renders in Be Vietnam Pro until swap | Low |
| EC-02 | Very narrow viewport (< 320px) | clamp() values ensure minimum sizes | Low |
| EC-03 | Very wide viewport (> 2560px) | Content stays centered, image covers | Low |
| EC-04 | Slow network — image loads late | Dark brown background visible first, then image fades in | Medium |

### 6.2 Error Handling Matrix

| Error Condition | User Message | System Action | Logging |
|----------------|-------------|--------------|---------|
| Background image 404 | (none — dark bg shows) | CSS fallback background-color | warn |
| Font load failure | (none — font-display: swap) | Render with fallback font | warn |

---

## 7. Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|------------|-------------------|
| NFR-01 | Performance | Hero renders above the fold within 1s on 4G |
| NFR-02 | Accessibility | H1 tag used for hero title |
| NFR-03 | Accessibility | CTA buttons have descriptive text |
| NFR-04 | SEO | H1 contains brand name "Yến Sào Ngọc Thảo" |
| NFR-05 | Responsive | Hero layout adapts at 900px breakpoint |

---

## 8. Unit Test Cases (TDD)

#### TC-01: HeroSection renders h1 with brand name

**Given:** HeroSection component
**When:** Rendered
**Then:** An h1 element containing "Yến Sào" and "Ngọc Thảo" exists

---

#### TC-02: HeroStats renders all 3 stats

**Given:** HeroStats component
**When:** Rendered
**Then:** Three stat items visible: "20+", "100%", "1000+"

---

#### TC-03: HeroButtons renders both CTAs

**Given:** HeroButtons component
**When:** Rendered
**Then:** Two buttons/links: "Xem Sản Phẩm" and "Liên Hệ Ngay"

---

#### TC-04: CTA buttons have correct href

**Given:** HeroButtons component
**When:** Rendered
**Then:** First button href="#products", second button href="#contact"

---

## 9. Browser Test Scenarios

### 9.1 Pre-Conditions

- Application running on `http://localhost:3000`
- Features F0 + F1 + F2 implemented

### 9.2 Test Cases

| ID | Test Case | Steps | Expected Result | Status |
|----|----------|-------|----------------|--------|
| BT-01 | Hero fills viewport | Load page, check hero height | min-height: 100vh | Pending |
| BT-02 | Background image visible | Load page, check background | Bird's nest image visible | Pending |
| BT-03 | DFVN Abygaer font on title | Inspect h1 computed style | font-family contains DFVN Abygaer | Pending |
| BT-04 | Stats row visible | Check stats row | 3 stats with correct text | Pending |
| BT-05 | CTA button click scrolls | Click "Xem Sản Phẩm" | Page scrolls to products | Pending |
| BT-06 | Hero responsive at 375px | Resize to mobile, check layout | Column layout, image on top | Pending |
| BT-07 | Animations play on load | Load page with fresh cache | Content elements fade in with stagger | Pending |

---

## 10. Dependencies

### 10.1 External Dependencies

| Dependency | Version | Purpose |
|-----------|---------|---------|
| framer-motion | latest | Entrance animations |

### 10.2 Internal Dependencies

| Component | Relationship | Notes |
|-----------|-------------|-------|
| F0: Design tokens | Brand colors (gold, brown) | Must be completed first |
| F0: lib/fonts.ts | DFVN Abygaer font configuration | |
| F0: lib/motion.ts | fadeInUp, staggerContainer variants | |
| F0: public/images/hero/ | Background image | |
| F1: Header | Header overlays hero section | z-index dependency |

---

## 10.3 Required Skills for Implementer

> Subagent **MUST** read these skills before writing any code for this feature.

| Priority | Skill | Path | Reason |
|----------|-------|------|--------|
| 1 (Entry) | `frontend-principles` | `.agents/skills/frontend-principles/SKILL.md` | Core principles, workflow, quality gates |
| 2 | `frontend-arch` | `.agents/skills/frontend-arch/SKILL.md` | Feature folder structure, colocation, public API |
| 3 | `frontend-components` | `.agents/skills/frontend-components/SKILL.md` | Server/Client component boundary, composition |

---

## 11. Acceptance Criteria

### 11.1 Success Conditions

- [ ] Hero fills full viewport (min-height: 100vh)
- [ ] Background image renders with dark overlay
- [ ] H1 title renders in DFVN Abygaer font
- [ ] Label, title, slogan, buttons, stats all visible
- [ ] Gold line before label text
- [ ] Both CTA buttons functional (scroll to targets)
- [ ] Stats row with gold separator border
- [ ] Framer Motion animations trigger on page load
- [ ] Responsive layout at ≤900px breakpoint
- [ ] All browser tests pass

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
