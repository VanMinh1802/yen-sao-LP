# SDD - F7: Testimonials Section

## Document Metadata

```yaml
spec_id: SDD-2026-F07
title: "Testimonials Section"
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

Feature F7 implements the customer testimonials section with a 3D carousel that auto-rotates and supports manual navigation via pagination dots. This section builds social proof by showcasing customer reviews.

### 1.2 Scope

**In Scope:**

- Section header
- 3D card carousel (prev / active / next states)
- Auto-rotation every 5 seconds
- Pagination dots with active state
- 3 testimonial cards (quote, stars, text, author avatar/name/location)
- Carousel state management
- Scroll-triggered entrance animation

**Out of Scope:**

- Swipe gesture support
- Arrow navigation buttons
- Dynamic testimonial loading
- More than 3 testimonials

---

## 2. Proposed Folder Structure

### 2.1 New Files & Directories

```
src/features/testimonials/
├── components/
│   ├── TestimonialsSection.tsx     # Section wrapper (Server Component)
│   ├── TestimonialCarousel.tsx     # Carousel logic (Client Component)
│   └── TestimonialCard.tsx         # Single testimonial card
├── data/
│   └── testimonials-data.ts        # Static testimonial content
└── index.ts                        # Public exports
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
| US-01 | Visitor | read real customer reviews | I trust the product quality | Must Have |
| US-02 | Visitor | see testimonials rotate automatically | I see all reviews without interaction | Should Have |
| US-03 | Visitor | click dots to navigate | I can jump to a specific review | Should Have |

### 3.2 User Flows

```
Flow: Testimonial Carousel Interaction
Actor: Visitor

Step 1: Visitor scrolls to Testimonials section
Step 2: Active card (index 1) is centered and fully visible
Step 3: Previous card is scaled down (0.85), shifted left, low opacity (0.4)
Step 4: Next card is scaled down (0.85), shifted right, low opacity (0.4)
Step 5: After 5 seconds, carousel auto-advances to next testimonial
Step 6: Visitor clicks dot 3 (index 2)
Step 7: Carousel transitions to show card 3 as active
Step 8: Auto-rotation timer resets
End: Carousel continues auto-rotating
```

---

## 4. Functional Requirements

### 4.1 Core Features

#### Feature F-01: Carousel State Machine

**States for each card:**

| State | translateX | scale | opacity | z-index | pointer-events |
|-------|-----------|-------|---------|---------|----------------|
| active | 0% | 1 | 1 | 3 | auto |
| prev | -55% | 0.85 | 0.4 | 2 | none |
| next | 55% | 0.85 | 0.4 | 2 | none |
| hidden | 100% | 0.8 | 0 | 1 | none |

**Transitions:**

- **Initial index:** `currentIndex = 1` (middle card starts as active, matching mockup)
- Auto-advance: every 5 seconds via `setInterval`
- Dot click: set specific index, reset interval
- Transition duration: 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)
- Wrapping: index cycles (0→1→2→0→1→...)

#### Feature F-02: Testimonial Card

**Description:** Card with quote, star rating, review text, and author info.

**Styling:**

- Max-width: 600px
- Background: white
- Padding: 40px 48px
- Border-radius: 24px
- Box-shadow: 0 16px 50px rgba(0,0,0,0.06)
- Text-align: center

**Card Elements:**

- Quote mark: `"` — 80px, gold-300, opacity 0.5
- Star rating: 5 gold stars (★), 20px, gap 6px
- Review text: 16px, brown-800, italic, line-height 1.8
- Author avatar: 64px circle, red→gold gradient, white initials
- Author name: 18px, brown-900, font-weight 700
- Author location: 14px, brown-600

#### Feature F-03: Testimonials Data

**3 Testimonials:**

| # | Author | Initials | Location | Review Excerpt |
|---|--------|----------|----------|---------------|
| 1 | Chị Thanh Lan | TL | TP. Hồ Chí Minh | "Yến sào Ngọc Thảo chất lượng thật sự..." |
| 2 | Anh Minh Hoàng | MH | Hà Nội | "Mua yến ở đây hơn 5 năm rồi..." |
| 3 | Chị Hồng Nhung | HN | Đà Nẵng | "Đi du lịch Nha Trang được bạn giới thiệu..." |

#### Feature F-04: Pagination Dots

**Styling:**

- Container: flex, centered, gap 12px, margin-top 32px
- Default dot: 12×12px circle, rgba(212,168,67,0.3)
- Active dot: width 32px, height 12px, border-radius 8px, gold-500
- Transition: all 0.3s ease
- Click handler: sets carousel to specific index

**Responsive (≤768px):**

- Prev/next cards: hidden (opacity 0)
- Only active card visible
- Carousel min-height: 480px
- Card padding: 32px 24px

---

## 5. Data Model

```
Testimonial
├── id: string
├── authorName: string — "Chị Thanh Lan"
├── authorInitials: string — "TL"
├── authorLocation: string — "TP. Hồ Chí Minh"
├── rating: number — always 5
└── text: string — review content
```

---

## 6. Edge Cases & Error Handling

| ID | Scenario | Expected Behavior | Severity |
|----|---------|------------------|----------|
| EC-01 | Component unmounts during interval | clearInterval on cleanup | Medium |
| EC-02 | Only 1 testimonial | No carousel, just display card | Low |
| EC-03 | User switches tabs, returns later | Interval continues (or restarts on visibility) | Low |

---

## 7. Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|------------|-------------------|
| NFR-01 | Performance | Use CSS transitions, not JS animation frames |
| NFR-02 | Accessibility | Dots have aria-label "Đánh giá N" |
| NFR-03 | Responsive | Only active card visible on mobile |

---

## 8. Unit Test Cases (TDD)

#### TC-01: Carousel renders 3 testimonial cards
**Given:** 3 testimonials  
**When:** Carousel renders  
**Then:** 3 cards in DOM

#### TC-02: Active card has correct state
**Given:** currentIndex = 1  
**When:** Rendered  
**Then:** Card at index 1 has active styling

#### TC-03: Dot click changes active index
**Given:** Carousel with currentIndex=1  
**When:** Dot 3 (index 2) clicked  
**Then:** currentIndex becomes 2, card 3 is active

#### TC-04: Auto-rotation advances after 5 seconds
**Given:** Carousel at index 0  
**When:** 5 seconds elapse  
**Then:** Index advances to 1

---

## 9. Browser Test Scenarios

| ID | Test Case | Expected Result | Status |
|----|----------|----------------|--------|
| BT-01 | Active card centered | Middle card fully visible | Pending |
| BT-02 | Prev/next cards scaled | Adjacent cards at 0.85 scale, 0.4 opacity | Pending |
| BT-03 | Auto-rotation | Card changes after 5 seconds | Pending |
| BT-04 | Dot navigation | Click dot, active card changes | Pending |
| BT-05 | Mobile: only active visible | At 375px, prev/next hidden | Pending |

---

## 10. Dependencies

| Component | Notes |
|-----------|-------|
| F0: SectionHeader | Section header |
| F0: lib/motion.ts | fadeInUp |

---

## 10.3 Required Skills for Implementer

> Subagent **MUST** read these skills before writing any code for this feature.

| Priority | Skill | Path | Reason |
|----------|-------|------|--------|
| 1 (Entry) | `frontend-principles` | `.agents/skills/frontend-principles/SKILL.md` | Core principles, workflow, quality gates |
| 2 | `frontend-arch` | `.agents/skills/frontend-arch/SKILL.md` | Feature folder structure, colocation, public API |
| 3 | `frontend-components` | `.agents/skills/frontend-components/SKILL.md` | Client component state management, carousel pattern |

---

## 11. Acceptance Criteria

- [ ] 3 testimonial cards in carousel
- [ ] Active card centered at full size
- [ ] Prev/next cards scaled and offset
- [ ] Auto-rotation every 5 seconds
- [ ] Pagination dots with active state indicator
- [ ] Dot click navigates and resets timer
- [ ] Star ratings display
- [ ] Author avatar with initials
- [ ] Mobile shows only active card
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
