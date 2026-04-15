# SDD - F1: Header & Footer Layout

## Document Metadata

```yaml
spec_id: SDD-2026-F01
title: "Header & Footer Layout"
author: "Agent"
date: "2026-04-15"
status: Draft
priority: Critical
type: Feature
related_issues: []
related_specs: [SDD-2026-F00]
```

---

## 1. Introduction

### 1.1 Purpose

Feature F1 implements the site's persistent layout elements — a fixed header with scroll-based visual transition and mobile hamburger menu, plus a 4-column footer with brand info, navigation links, and social media links. These components frame every section of the single-page landing.

### 1.2 Scope

**In Scope:**

- Fixed header with transparent-to-dark scroll transition
- Navigation links (Giới Thiệu, Sản Phẩm, Tại Sao Chọn Chúng Tôi, Đánh Giá)
- CTA button ("Liên Hệ Ngay") with red gradient
- Oversized logo with offset positioning
- Mobile hamburger menu (full-screen overlay)
- Skip-to-content accessibility link
- Smooth scroll behavior on nav link clicks
- 4-column footer grid
- Footer brand description, link columns, contact info, socials
- Footer bottom bar (copyright + social icons)

**Out of Scope:**

- Search functionality
- Dropdown menus
- Dark/light theme toggle
- Language switcher

### 1.3 Definitions & Abbreviations

| Term | Definition |
|------|-----------|
| Scroll effect | Header background transitions from transparent to opaque dark on scroll |
| Hamburger menu | Mobile navigation toggle (3-line icon) |
| Skip link | Accessibility feature allowing keyboard users to skip navigation |

---

## 2. Proposed Folder Structure

### 2.1 New Files & Directories

```
src/features/layout/
├── components/
│   ├── Header.tsx            # Fixed header with scroll effect (Client Component)
│   ├── MobileMenu.tsx        # Mobile hamburger overlay (Client Component)
│   ├── Footer.tsx            # Footer section (Server Component)
│   ├── Logo.tsx              # Brand logo with oversized positioning
│   └── SkipLink.tsx          # Skip-to-content link
└── index.ts                  # Public exports
```

### 2.2 Modified Files

| File | Modification Type | Description |
|------|------------------|-------------|
| `src/app/layout.tsx` | Modify | Import and render Header + Footer |
| `src/app/page.tsx` | Modify | Add `id="main-content"` on main element |

### 2.3 Deleted Files

| File | Reason |
|------|--------|
| (none) | |

### 2.4 Folder Structure Checklist

- [x] Folder structure follows **feature-based architecture**
- [x] No shared components contain business logic
- [x] Header is Client Component (scroll event listener, menu toggle state)
- [x] Footer is Server Component (purely static content)
- [x] Logo is a presentational component (no hooks)
- [x] Public API exported from `index.ts`
- [x] No cross-feature imports

### 2.5 Architecture Decisions

| Decision | Options Considered | Chosen Approach | Rationale |
|----------|-------------------|-----------------|-----------|
| Header scroll detection | `useEffect` + `addEventListener` / IntersectionObserver / Framer Motion `useScroll` | `useEffect` + scroll event with `useCallback` | Simple, direct, minimal overhead for a single threshold check (scrollY > 80) |
| Mobile menu state | useState in Header / Zustand / Context | useState in Header, passed to MobileMenu | Only 1 level of props, no need for context |
| Logo positioning | CSS only / React layout | CSS positioning (absolute within relative) | Matches mockup approach with oversized logo overlapping header height |
| Footer rendering | Client Component / Server Component | Server Component | Purely static content, no interactivity needed |

### 2.6 Folder Structure Review

| Reviewer | Status | Comments |
|----------|--------|----------|
| | Pending | |

---

## 3. User Interactions & Flows

### 3.1 User Stories

| ID | As a... | I want to... | So that... | Priority |
|----|---------|-------------|-----------|----------|
| US-01 | Visitor | see a fixed navigation bar at the top | I can navigate between sections from anywhere on the page | Must Have |
| US-02 | Visitor | see the header become opaque when scrolling | the nav links remain visible against page content | Must Have |
| US-03 | Mobile visitor | tap a hamburger icon to open navigation | I can access all navigation links on small screens | Must Have |
| US-04 | Visitor | click a nav link and scroll smoothly | the page glides to the target section | Should Have |
| US-05 | Keyboard user | skip navigation with a focused link | I can jump directly to main content | Should Have |
| US-06 | Visitor | see brand info and contact in the footer | I can reach out or learn more about the company | Must Have |

### 3.2 User Flows

```
Flow: Header Scroll Transition
Actor: Visitor

Step 1: Visitor lands on page — header is fully transparent
Step 2: Visitor scrolls down past 80px
Step 3: Header background transitions to rgba(26, 10, 0, 0.95) with blur(20px)
Step 4: Header gains a subtle box-shadow: rgba(0,0,0,0.3)
Step 5: Visitor scrolls back to top of page
Step 6: Header returns to fully transparent
End: Header state always reflects current scroll position
```

```
Flow: Mobile Menu Toggle
Actor: Mobile Visitor

Step 1: Visitor taps hamburger icon (3-line button)
Step 2: Full-screen overlay appears with centered navigation links
Step 3: Body scroll is locked (overflow: hidden)
Step 4: Hamburger icon transforms to X (close) icon
Step 5: Visitor taps a nav link
Step 6: Menu closes, body scroll unlocks
Step 7: Page smooth-scrolls to target section
End: Menu is closed, visitor is at target section
```

```
Flow: Smooth Scroll Navigation
Actor: Visitor

Step 1: Visitor clicks any anchor link (e.g., "Sản Phẩm")
Step 2: Page smoothly scrolls to the section with the matching ID
Step 3: URL hash does NOT change (prevent default)
End: Target section is in viewport
```

### 3.3 Error Flows

```
Flow: Logo Image Fails to Load
Trigger: logoyen.png fails to download

Step 1: Browser cannot load the logo image
Step 2: Alt text "Logo Yến Sào Ngọc Thảo" displays
End: Navigation remains functional, alt text visible
```

---

## 4. Functional Requirements

### 4.1 Core Features

#### Feature F-01: Header Component

**Description:** Fixed navigation bar at the top of the page with scroll-responsive styling.

**Business Rules:**

- Header height: 70px
- Position: fixed, top: 0, full width, z-index: 1000
- Default state: transparent background
- Scrolled state (scrollY > 80): dark background, backdrop blur, box-shadow
- Transition between states: 0.3s ease
- Contains: Logo (left), Nav links (center-right), CTA button (far right)

**Navigation Links:**

| Label | Target |
|-------|--------|
| Giới Thiệu | #about |
| Sản Phẩm | #products |
| Tại Sao Chọn Chúng Tôi | #why-us |
| Đánh Giá | #testimonials |
| Liên Hệ Ngay (CTA) | #contact |

**CTA Button Styling:**

- Background: linear-gradient(135deg, gold-500, gold-400) — matches mockup `btn-gold` class
- Color: brown-900 (#1a0f0a)
- Font-weight: 700
- Border-radius: 50px (pill shape)
- Hover: translateY(-2px), box-shadow rgba(184,134,11,0.4), background brightens to gold-400

**Nav Link Hover:**

- Color transitions to gold-400
- Underline grows from left (width 0 → 100%, height 2px, gold-400)

---

#### Feature F-02: Logo Component

**Description:** Brand logo with oversized image that overlaps header boundaries.

**Business Rules:**

- Logo container: width 350px, height 48px, position relative
- Logo image: position absolute, extends above and below header
  - top: -40px, left: -150px, height: 130px
- Image source: /images/logo/logoyen.png
- Alt text: "Logo Yến Sào Ngọc Thảo"
- Links to #hero (top of page)

---

#### Feature F-03: Mobile Menu

**Description:** Full-screen overlay navigation for mobile viewports (≤768px).

**Business Rules:**

- Hamburger button: hidden on desktop, visible on mobile
- Three horizontal lines (24px × 2px each, white, 5px gap)
- Open state:
  - Full-screen overlay with dark blur background (rgba(26, 10, 0, 0.98))
  - Nav links centered, font-size: 20px
  - Body overflow: hidden (scroll lock)
  - Hamburger transforms: line 1 rotates 45°, line 2 fades, line 3 rotates -45° (forms X)
- Toggle via aria-expanded attribute (accessibility)
- aria-label toggles between "Mở menu" and "Đóng menu"
- Clicking a nav link closes the menu and scrolls to target

---

#### Feature F-04: Skip Link

**Description:** Accessibility skip link for keyboard users.

**Business Rules:**

- Visually hidden by default (position absolute, top: -100%)
- Becomes visible on focus (top: 0)
- Text: "Chuyển đến nội dung chính"
- Links to #main-content
- Styled with red-500 background, white text

---

#### Feature F-05: Footer Component

**Description:** 4-column footer with brand info, navigation, products, and contact.

> **Note:** Footer is rendered **outside `<main>`** in `layout.tsx` — matching the mockup HTML structure where `</main>` closes before `<footer>`.

**Business Rules:**

- Background: brown-900 (#1A0A00)
- Grid: 4 columns (2fr 1fr 1fr 1.5fr), gap 48px
- Column 1: Logo image + "Yến Sào Ngọc Thảo" text + brand description (14px, white-70, line-height 1.8)
- Column 2: "Liên Kết" — Giới Thiệu, Sản Phẩm, Cam Kết, Đánh Giá, Liên Hệ
- Column 3: "Sản Phẩm" — Yến Thô Nguyên Tổ, Yến Sợi Cao Cấp, Yến Tinh Chế, Hộp Quà Tặng
- Column 4: "Liên Hệ" — **2 phone numbers**, email, address:
  - 📞 (0258) 3821 494 (landline)
  - 📱 0919 217 882 (mobile)
  - ✉️ yensaongocthao@gmail.com
  - 📍 Nha Trang, Khánh Hòa
- Footer bottom bar: copyright "© 2026 Yến Sào Ngọc Thảo Khánh Hòa. All rights reserved." (left) + social icons (right)
- Social icons: Facebook (📘), TikTok (🎵), Zalo (💬) — with border, rounded, hover gold
- Column headings: gold-400, 16px, uppercase, letter-spacing 1px

**Responsive:**

- 1024px: 2-column grid
- 768px: 1-column grid, bottom bar stacks vertically

---

## 5. Data Model

### 5.1 Domain Entities

```
NavLink
├── label: string — display text
├── href: string — anchor target (#section-id)
└── isCTA: boolean — whether this is the styled CTA button

FooterColumn
├── title: string — column heading
└── links: FooterLink[]

FooterLink
├── label: string — display text
├── href: string — URL or anchor
└── icon: string | null — optional emoji/icon
```

---

## 6. Edge Cases & Error Handling

### 6.1 Edge Cases

| ID | Scenario | Expected Behavior | Severity |
|----|---------|------------------|----------|
| EC-01 | User rapidly scrolls up/down near 80px threshold | Header doesn't flicker (debounce-like behavior via will-change + transition) | Medium |
| EC-02 | Mobile menu open, user rotates device to landscape | Menu should adapt but remain open | Low |
| EC-03 | Mobile menu open, user resizes browser above 768px | Menu should close automatically (CSS display:none at desktop) | Low |
| EC-04 | User clicks same nav link twice | Should still scroll to section (no-op if already at target) | Low |
| EC-05 | Logo image very large (1.7MB) | Use Next.js Image component with priority for LCP optimization | Medium |

### 6.2 Error Handling Matrix

| Error Condition | User Message | System Action | Logging |
|----------------|-------------|--------------|---------|
| Logo image fails to load | (alt text shows) | Display alt text | warn |
| Scroll event listener error | (none) | Graceful degradation — header stays transparent | error |

---

## 7. Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|------------|-------------------|
| NFR-01 | Performance | Header scroll event uses passive listener |
| NFR-02 | Accessibility | All nav links keyboard-navigable |
| NFR-03 | Accessibility | Hamburger has aria-expanded, aria-label |
| NFR-04 | Accessibility | Skip link visible on focus |
| NFR-05 | Responsive | Header works on all breakpoints (320px-2560px) |
| NFR-06 | SEO | Footer links are standard `<a>` elements |

---

## 8. Unit Test Cases (TDD)

#### TC-01: Header renders as transparent initially

**Given:** Page loads at scrollY = 0
**When:** Header component renders
**Then:** Header background is transparent, no blur or shadow

---

#### TC-02: Header changes style when scrolled > 80px

**Given:** User has scrolled past 80px
**When:** Scroll event fires
**Then:** Header has dark background, blur, shadow classes applied

---

#### TC-03: Mobile menu toggles on hamburger click

**Given:** Viewport is ≤768px, menu is closed
**When:** User clicks hamburger button
**Then:** Menu overlay appears, aria-expanded is "true"

---

#### TC-04: Nav link click scrolls to section

**Given:** Page with section id="products"
**When:** User clicks "Sản Phẩm" nav link
**Then:** Page scrolls to #products section

---

#### TC-05: Footer renders all 4 columns

**Given:** Footer component
**When:** Rendered
**Then:** All 4 columns visible with correct headings

---

## 9. Browser Test Scenarios

### 9.1 Pre-Conditions

- Application running on `http://localhost:3000`
- Features F0 + F1 implemented

### 9.2 Test Cases

| ID | Test Case | Steps | Expected Result | Status |
|----|----------|-------|----------------|--------|
| BT-01 | Header transparent at top | Load page, check header background | Transparent background | Pending |
| BT-02 | Header darkens on scroll | Scroll to 100px, check header | Dark background + blur | Pending |
| BT-03 | Nav links visible on desktop | Load at 1200px width, check nav | All 5 nav links visible | Pending |
| BT-04 | Hamburger visible on mobile | Load at 375px width | Hamburger icon visible, nav hidden | Pending |
| BT-05 | Mobile menu opens/closes | Click hamburger, check overlay | Full-screen menu appears/disappears | Pending |
| BT-06 | Smooth scroll works | Click "Sản Phẩm" link | Page scrolls to products section | Pending |
| BT-07 | Skip link on focus | Tab key on page load | Skip link appears at top | Pending |
| BT-08 | Footer columns render | Scroll to footer | 4 columns with correct content | Pending |
| BT-09 | Footer responsive | Load at 375px width | Footer stacks to 1 column | Pending |

---

## 10. Dependencies

### 10.1 External Dependencies

| Dependency | Version | Purpose |
|-----------|---------|---------|
| framer-motion | latest | Mobile menu animation |
| next/image | built-in | Logo image optimization |

### 10.2 Internal Dependencies

| Component | Relationship | Notes |
|-----------|-------------|-------|
| F0: Design tokens | Header uses brand colors | Must be completed first |
| F0: lib/utils.ts | cn() helper used for conditional classes | |
| F0: lib/motion.ts | Menu animation variants | |
| F0: public/images/logo/ | Logo image asset | |

---

## 10.3 Required Skills for Implementer

> Subagent **MUST** read these skills before writing any code for this feature.

| Priority | Skill | Path | Reason |
|----------|-------|------|--------|
| 1 (Entry) | `frontend-principles` | `.agents/skills/frontend-principles/SKILL.md` | Core principles, workflow, quality gates |
| 2 | `frontend-arch` | `.agents/skills/frontend-arch/SKILL.md` | Feature-based folder structure, public API exports |
| 3 | `frontend-components` | `.agents/skills/frontend-components/SKILL.md` | Component design: Server vs Client, composition |
| 4 | `frontend-nextjs-16` | `.agents/skills/frontend-nextjs-16/SKILL.md` | App Router layout.tsx integration |

---

## 11. Acceptance Criteria

### 11.1 Success Conditions

- [ ] Header is fixed at top with correct z-index
- [ ] Header transitions from transparent to dark on scroll > 80px
- [ ] Logo renders with oversized positioning
- [ ] All 5 navigation links render correctly
- [ ] CTA button has gradient, pill shape, hover effect
- [ ] Nav links have gold underline hover effect
- [ ] Mobile hamburger menu works (open/close/scroll lock)
- [ ] Hamburger icon transforms to X when open
- [ ] Skip link appears on keyboard focus
- [ ] Smooth scroll works on all nav links
- [ ] Footer renders 4-column grid with correct content
- [ ] Footer responsive at 1024px (2-col) and 768px (1-col)
- [ ] Footer social links have hover effects
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
