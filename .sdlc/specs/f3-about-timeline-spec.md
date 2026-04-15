# SDD - F3: About / Timeline Section

## Document Metadata

```yaml
spec_id: SDD-2026-F03
title: "About / Timeline Section"
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

Feature F3 implements the "About" section showcasing the brand's history through an alternating left/right timeline with images, scroll-reveal animations, and animated stat counters. This section builds trust by demonstrating the 20+ year legacy.

### 1.2 Scope

**In Scope:**

- Section header (label: "Câu Chuyện Của Chúng Tôi", title: "Hơn 20 Năm Tâm Huyết Với Yến Sào")
  > **Note:** mockup has a typo "Câu Câu Chuyện" — we use the corrected "Câu Chuyện"
- Alternating left/right timeline layout with center vertical line
- 4 timeline items with images, year, title, description
- Scroll-triggered reveal animations (Framer Motion whileInView)
- 3 animated stat counters at bottom (20+, 100%, 1000+)
- Responsive: mobile collapses to single-column left-aligned timeline

**Out of Scope:**

- Timeline filtering/searching
- Dynamic data loading
- Video content within timeline

---

## 2. Proposed Folder Structure

### 2.1 New Files & Directories

```
src/features/about/
├── components/
│   ├── AboutSection.tsx        # Section wrapper (Server Component)
│   ├── Timeline.tsx            # Timeline layout (Client Component — animations)
│   ├── TimelineItem.tsx        # Single timeline card
│   └── StatCounter.tsx         # Animated number counter (Client Component)
├── data/
│   └── timeline-data.ts        # Static timeline content
└── index.ts                    # Public exports
```

### 2.2 Modified Files

| File | Modification Type | Description |
|------|------------------|-------------|
| `src/app/page.tsx` | Modify | Import and render AboutSection |

### 2.4 Folder Structure Checklist

- [x] Feature-based architecture followed
- [x] Data colocated in `data/` subfolder
- [x] Timeline is Client Component (scroll animations)
- [x] AboutSection is Server Component wrapper
- [x] No cross-feature imports

### 2.6 Folder Structure Review

| Reviewer | Status | Comments |
|----------|--------|----------|
| | Pending | |

---

## 3. User Interactions & Flows

### 3.1 User Stories

| ID | As a... | I want to... | So that... | Priority |
|----|---------|-------------|-----------|----------|
| US-01 | Visitor | see the company's history | I understand their experience and credibility | Must Have |
| US-02 | Visitor | see timeline cards animate as I scroll | the page feels engaging and modern | Should Have |
| US-03 | Visitor | see animated stat numbers | the numbers feel dynamic and impactful | Should Have |

### 3.2 User Flows

```
Flow: Timeline Scroll Reveal
Actor: Visitor

Step 1: Visitor scrolls to the About section
Step 2: Section header fades in with fadeInUp animation
Step 3: Timeline items reveal one by one as they enter viewport:
  - Item 1 (2006, left) slides in from left
  - Item 2 (2010, right) slides in from right
  - Item 3 (2018, left) slides in from left
  - Item 4 (2026, right) slides in from right
Step 4: Stat counters animate from 0 to target value when in view
End: All timeline items and stats visible
```

---

## 4. Functional Requirements

### 4.1 Core Features

#### Feature F-01: Timeline Layout

**Description:** Alternating left/right timeline with center vertical line.

**Business Rules:**

- Center line: 2px width, rgba(212,168,67,0.3), runs full height
- Timeline items: width 50%, alternating left/right
- Each item has a circular dot (16px) on the center line (white bg, 4px gold border)
- Max-width: 1000px, centered with margin auto

**Timeline Data:**

| Year | Title | Description | Image |
|------|-------|-------------|-------|
| 2006 | Thành lập Ngọc Thảo | Bắt đầu từ tình yêu và sự trân trọng đối với sản vật thiên nhiên yến sào nguyên chất. | /images/timeline/2006.jpeg |
| 2010 | Xây Dựng Nhà Yến Đầu Tiên | Đầu tư tâm huyết để phát triển hệ thống nhà yến đô thị chuẩn sinh thái tại Nha Trang. | /images/timeline/2010.jpeg |
| 2018 | Mở Tham Quan Trực Tiếp | Tiên phong mô hình giúp khách hàng tận mắt chứng kiến quy trình khai thác và sơ chế. | /images/timeline/2018.jpeg |
| 2026 | Vững Bước Phát Triển | Hơn 20 năm khẳng định vị thế uy tín hàng đầu trong lòng hàng chục nghìn khách hàng. | /images/timeline/2026.jpeg |

**Image Source Mapping (for F0 asset copy):**

| Destination | Source File |
|------------|------------|
| /images/timeline/2006.jpeg | assets/ảnh yến/IMG_7261.jpeg |
| /images/timeline/2010.jpeg | assets/ảnh yến/IMG_7363.jpeg |
| /images/timeline/2018.jpeg | assets/ảnh yến/IMG_7372.jpeg |
| /images/timeline/2026.jpeg | assets/ảnh yến/IMG_7591.jpeg |

#### Feature F-02: Timeline Card

**Description:** Individual timeline card with image, year badge, title, and description.

**Styling:**

- Card: cream-100 bg, 1px gold border (15% opacity), 16px border-radius, 24px padding
- Image: 100×100px, 12px border-radius, object-fit cover
- Year: red-500, 24px, font-weight 800, with gold line after
- Title: brown-800, 18px, font-weight 700
- Description: brown-600, 14px, line-height 1.6
- Left items: card content reversed (image on right, text aligned right)
- Hover: translateY(-5px), gold border, enhanced shadow

#### Feature F-03: Stat Counters

**Description:** 3 animated counters at the bottom of the section.

**Stats:**

| Number | Label |
|--------|-------|
| 20+ | Năm Uy Tín |
| 100% | Tự Nhiên |
| 1000+ | Khách Hàng |

**Styling:**

- Grid: 3 columns, gap 24px, max-width 900px
- Each stat: centered, cream-200 bg, 16px border-radius, 1px gold border (10%)
- Number: red-500, 36px, font-weight 800
- Label: brown-800, 13px, uppercase, letter-spacing 1px
- Hover: translateY(-4px), white bg, shadow, gold border

**Animation:**

- Numbers count up from 0 to target when element enters viewport
- Duration: ~2s with requestAnimationFrame
- Triggers once (doesn't re-animate)

**Responsive (≤768px):**

- Timeline: single column, line on left (24px), all items 100% width, left-aligned
- Stats: 3-column grid maintained, smaller padding
- Timeline images: 80×80px

---

## 5. Data Model

```
TimelineItem
├── year: string — "2006", "2010", etc.
├── title: string — milestone title
├── description: string — milestone description
├── imageSrc: string — image path
└── imageAlt: string — image alt text
```

> **Note:** `position` (left/right) is computed from array index — even indices = left, odd indices = right. Not stored in data.

---

## 6. Edge Cases & Error Handling

| ID | Scenario | Expected Behavior | Severity |
|----|---------|------------------|----------|
| EC-01 | Timeline image fails to load | Placeholder or alt text shows | Low |
| EC-02 | Stat counter value is "100%" (not a pure number) | Custom parsing for percentage strings | Medium |
| EC-03 | User scrolls quickly past entire section | Animations should still trigger on any intersection | Low |

---

## 7. Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|------------|-------------------|
| NFR-01 | Performance | Images lazy-loaded with loading="lazy" |
| NFR-02 | Accessibility | Timeline items have semantic structure (heading levels) |
| NFR-03 | Responsive | Timeline adapts at 768px breakpoint |

---

## 8. Unit Test Cases (TDD)

#### TC-01: Timeline renders all 4 items
**Given:** Timeline data with 4 items
**When:** Timeline renders  
**Then:** 4 timeline cards visible

#### TC-02: TimelineItem displays year, title, description
**Given:** TimelineItem with year="2006"
**When:** Rendered  
**Then:** Year "2006", title, description, image all present

#### TC-03: StatCounter renders number and label
**Given:** StatCounter with value="20+" label="Năm Uy Tín"
**When:** Rendered  
**Then:** "20+" and "Năm Uy Tín" visible

---

## 9. Browser Test Scenarios

| ID | Test Case | Expected Result | Status |
|----|----------|----------------|--------|
| BT-01 | Timeline visible on scroll | 4 timeline cards appear with animations | Pending |
| BT-02 | Timeline alternates left/right | Cards alternate sides of center line | Pending |
| BT-03 | Stat counters animate | Numbers count up to target values | Pending |
| BT-04 | Mobile timeline is single column | Timeline items stack vertically | Pending |

---

## 10. Dependencies

| Component | Notes |
|-----------|-------|
| F0: SectionHeader | Used for section header |
| F0: lib/motion.ts | fadeInUp, staggerContainer |
| F0: public/images/timeline/ | 4 timeline images |

---

## 10.3 Required Skills for Implementer

> Subagent **MUST** read these skills before writing any code for this feature.

| Priority | Skill | Path | Reason |
|----------|-------|------|--------|
| 1 (Entry) | `frontend-principles` | `.agents/skills/frontend-principles/SKILL.md` | Core principles, workflow, quality gates |
| 2 | `frontend-arch` | `.agents/skills/frontend-arch/SKILL.md` | Feature folder structure, colocation, public API |
| 3 | `frontend-components` | `.agents/skills/frontend-components/SKILL.md` | Server/Client boundary, animation components |

---

## 11. Acceptance Criteria

- [ ] Section header renders with "Hơn 20 Năm Tâm Huyết Với Yến Sào" title
- [ ] 4 timeline items display with images
- [ ] Timeline center line visible
- [ ] Alternating left/right layout on desktop
- [ ] Scroll animations trigger on viewport entry
- [ ] 3 stat counters animate from 0 to target
- [ ] Mobile single-column timeline at ≤768px
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
