# SDD - F6: Why Us / Bento Grid Section

## Document Metadata

```yaml
spec_id: SDD-2026-F06
title: "Why Us / Bento Grid Section"
author: "Agent"
date: "2026-04-15"
status: Draft
priority: High
type: Feature
related_issues: []
related_specs: [SDD-2026-F00]
```

---

## 1. Introduction

### 1.1 Purpose

Feature F6 implements the "Why Us" section — a dark-themed bento grid layout showcasing the brand's key differentiators with glassmorphism cards, a large hero card with background image, and an animated visitor counter.

### 1.2 Scope

**In Scope:**

- Dark gradient background (brown-900 → red-900 → brown-900)
- Decorative radial gradient orb
- Bento grid layout (4×2) with varied card sizes
- Glassmorphism cards with backdrop-filter blur
- Large card (2×2 span) with background image and gradient overlay
- Stats counter card with animated number (10,000)
- Card hover effects (lift + gold border glow)
- Scroll-triggered entrance animations

**Out of Scope:**

- Card click/expand interactions
- Dynamic data

---

## 2. Proposed Folder Structure

### 2.1 New Files & Directories

```
src/features/why-us/
├── components/
│   ├── WhyUsSection.tsx        # Section wrapper with dark background (Server Component)
│   ├── BentoGrid.tsx           # Grid layout (Client Component — hover animations)
│   ├── BentoCard.tsx           # Single glassmorphism card
│   └── AnimatedCounter.tsx     # Intersection-triggered counter (Client Component)
├── data/
│   └── why-us-data.ts          # Static card content
└── index.ts                    # Public exports
```

### 2.6 Folder Structure Review

| Reviewer | Status | Comments |
|----------|--------|----------|
| | Pending | |

---

## 3. User Interactions & Flows

### 3.1 User Stories

| ID | As a... | I want to... | So that... | Priority |
|----|---------|-------------|-----------|----------|
| US-01 | Visitor | understand why Ngọc Thảo is trustworthy | I feel confident about the brand | Must Have |
| US-02 | Visitor | see the bird house image | I believe they have their own nest house | Should Have |
| US-03 | Visitor | see 10,000+ customer count | Social proof drives my trust | Should Have |

---

## 4. Functional Requirements

### 4.1 Core Features

#### Feature F-01: Dark Background

**Description:** Section with rich dark gradient and decorative orb.

**Background:** `linear-gradient(135deg, brown-900 0%, red-900 50%, brown-900 100%)`

**Decorative orb:** `radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)` — positioned top-right, 600×600px

**SectionHeader variant:** dark (gold label, white title, white-70 subtitle)

#### Feature F-02: Bento Grid Layout

**Description:** 4-column × 2-row grid with varied card sizes.

**Grid:** `grid-template-columns: repeat(4, 1fr)`, `grid-template-rows: repeat(2, 240px)`, gap 24px

**Card Layout:**

| Position | Card | Grid Span | Type |
|----------|------|-----------|------|
| 1 | Nhà Yến Riêng | col-span-2, row-span-2 | Large (with bg image) |
| 2 | 100% Tự Nhiên | 1×1 | Default |
| 3 | Tham Quan Trực Tiếp | 1×1 | Default |
| 4 | 20+ Năm Uy Tín | 1×1 | Default |
| 5 | 10,000+ Khách Hàng | 1×1 | Stats counter |

**Responsive:**

- ≤1024px: 2-column grid
- ≤768px: 1-column grid

#### Feature F-03: Glassmorphism Card

**Description:** Individual bento card with frosted glass effect.

**Default Card Styling:**

- Background: rgba(255,255,255,0.05)
- Border: 1px solid rgba(255,255,255,0.1)
- Border-radius: 20px
- Backdrop-filter: blur(10px)
- Padding: 32px
- Hover: translateY(-8px) scale(1.02), gold border glow, inset gold shadow

**Large Card (Nhà Yến Riêng):**

- Grid span: 2 columns × 2 rows
- Background image: `/images/why-us/nha-yen.jpeg`, cover, center, opacity 0.4
- Gradient overlay: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 80%)
- Hover: image zooms scale(1.08), opacity increases to 0.5
- Content positioned at bottom via justify-content: flex-end
- Title: 32px, uppercase

**Stats Counter Card:**

- Centered content
- Background: rgba(212,168,67,0.1)
- Border color: rgba(212,168,67,0.2)
- Counter: 48px, gold-400, font-weight 700

**Card Content:**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 (large) | 🏠 | Nhà Yến Riêng | Sở hữu nhà yến gốc tại Nha Trang. Chủ động tuyệt đối nguồn cung và cam kết chất lượng từng tổ yến. |
| 2 | 🌿 | 100% Tự Nhiên | Thu hoạch thủ công, hoàn toàn không hóa chất, an toàn tuyệt đối cho sức khỏe. |
| 3 | 👁️ | Tham Quan Trực Tiếp | Khách hàng được quyền xem trực tiếp không gian nhà yến và xưởng sơ chế. |
| 4 | ⭐ | 20+ Năm Uy Tín | Từ năm 2006, chúng tôi đã phục vụ hàng chục ngàn khách hàng trên toàn quốc. |
| 5 (stats) | — | 10,000 | Khách hàng thân thiết tin dùng |

#### Feature F-04: Animated Counter

**Description:** Counter that animates from 0 to 10,000 when scrolled into view.

**Business Rules:**

- Target value: 10,000
- Duration: ~2 seconds
- Uses requestAnimationFrame
- Display with toLocaleString (10,000 formatted)
- Triggers once (IntersectionObserver, threshold 0.1)

---

## 5. Data Model

```
BentoCardData
├── id: string
├── icon: string — emoji
├── title: string
├── description: string
├── variant: 'default' | 'large' | 'stats'
├── backgroundImage: string | null
└── counterTarget: number | null
```

---

## 6. Edge Cases & Error Handling

| ID | Scenario | Expected Behavior | Severity |
|----|---------|------------------|----------|
| EC-01 | Backdrop-filter not supported (older browsers) | Cards still render with solid dark background | Low |
| EC-02 | Large card background image fails | Card still has gradient overlay, readable | Low |
| EC-03 | Counter re-enters viewport after leaving | Does not re-animate (fires once) | Low |

---

## 7. Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|------------|-------------------|
| NFR-01 | Performance | backdrop-filter uses GPU acceleration |
| NFR-02 | Accessibility | Card content readable without images |
| NFR-03 | Responsive | Grid adapts at 1024px and 768px |

---

## 8. Unit Test Cases (TDD)

#### TC-01: BentoGrid renders all 5 cards
**Given:** 5 card data items  
**When:** BentoGrid renders  
**Then:** 5 cards visible

#### TC-02: Large card spans 2 columns and 2 rows
**Given:** BentoCard with variant="large"  
**When:** Rendered  
**Then:** Card has `col-span-2 row-span-2` classes

#### TC-03: AnimatedCounter displays formatted number
**Given:** AnimatedCounter with target=10000  
**When:** Animation completes  
**Then:** Text shows "10,000"

---

## 9. Browser Test Scenarios

| ID | Test Case | Expected Result | Status |
|----|----------|----------------|--------|
| BT-01 | Dark background renders | Section has dark gradient background | Pending |
| BT-02 | Large card shows nest house image | Background image visible at opacity 0.4 | Pending |
| BT-03 | Card hover effect | Card lifts and glows gold on hover | Pending |
| BT-04 | Counter animates | Number counts up to 10,000 | Pending |
| BT-05 | Mobile 1-column layout | At 375px, cards stack vertically | Pending |

---

## 10. Dependencies

| Component | Notes |
|-----------|-------|
| F0: SectionHeader (variant="dark") | Dark-themed section header |
| F0: lib/motion.ts | fadeInUp, staggerContainer |
| F0: public/images/why-us/ | Nest house image |

---

## 10.3 Required Skills for Implementer

> Subagent **MUST** read these skills before writing any code for this feature.

| Priority | Skill | Path | Reason |
|----------|-------|------|--------|
| 1 (Entry) | `frontend-principles` | `.agents/skills/frontend-principles/SKILL.md` | Core principles, workflow, quality gates |
| 2 | `frontend-arch` | `.agents/skills/frontend-arch/SKILL.md` | Feature folder structure, colocation, public API |
| 3 | `frontend-components` | `.agents/skills/frontend-components/SKILL.md` | Server/Client boundary, bento grid layout pattern |

---

## 11. Acceptance Criteria

- [ ] Dark gradient background with decorative orb
- [ ] Bento grid renders 5 cards in correct layout
- [ ] Large card shows background image with overlay
- [ ] Glassmorphism effect on all cards
- [ ] Card hover animations (lift + gold glow)
- [ ] Stats counter animates from 0 to 10,000
- [ ] Responsive at 1024px and 768px
- [ ] All browser tests pass

---

## 12. Review & Approval

| Reviewer | Status | Comments |
|----------|--------|----------|
| | Pending | |

---

## 13. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | 2026-04-15 | Agent | Initial draft |
