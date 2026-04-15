# SDD - F5: Process Section

## Document Metadata

```yaml
spec_id: SDD-2026-F05
title: "Process Section"
author: "Agent"
date: "2026-04-15"
status: Draft
priority: Medium
type: Feature
related_issues: []
related_specs: [SDD-2026-F00]
```

---

## 1. Introduction

### 1.1 Purpose

Feature F5 implements the "Process" section showing the 5-step journey from bird's nest harvesting to delivery. It features a horizontal progress line that fills on scroll, staggered step reveals, and animated icon circles.

### 1.2 Scope

**In Scope:**

- Section header
- 5-step horizontal process flow
- Animated progress line (width 0→100% on scroll into view)
- Step icons with numbered badges and dashed spinning border
- Staggered entrance animations (0.2s delay between steps)
- Responsive: vertical layout on mobile

**Out of Scope:**

- Clickable steps with detail expansion
- Video process demonstrations

---

## 2. Proposed Folder Structure

### 2.1 New Files & Directories

```
src/features/process/
├── components/
│   ├── ProcessSection.tsx      # Section wrapper (Server Component)
│   ├── ProcessSteps.tsx        # Steps layout + progress line (Client Component)
│   └── ProcessStep.tsx         # Single step (icon + title + description)
├── data/
│   └── process-data.ts         # Static step content
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
| US-01 | Visitor | understand the production process | I trust the quality and transparency | Must Have |
| US-02 | Visitor | see the progress line animate | the process feels sequential and dynamic | Should Have |

---

## 4. Functional Requirements

### 4.1 Core Features

#### Feature F-01: Process Steps Layout

**Description:** 5 steps displayed horizontally with a connecting progress line.

**Steps Data:**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | 🏠 | Khai Thác | Yến chim tự bay về nhà làm tổ tự nhiên tại Nha Trang. |
| 2 | ✋ | Thu Hoạch | Khai thác thủ công, nhẹ nhàng chọn lọc nguyên tổ. |
| 3 | 🧹 | Làm Sạch | Thợ lành nghề tỉ mỉ gắp nhặt sạch lông yến từng sợi. |
| 4 | 📦 | Đóng Gói | Đóng hộp tiệt trùng cao cấp sang trọng chuẩn xuất khẩu. |
| 5 | 🤝 | Giao Hàng | Giao tận nơi nhanh chóng, bảo hiểm an toàn sản phẩm. |

**Progress Line:**

- Position: absolute, horizontal, top 50px, left 10%, right 10%
- Background: rgba(212,168,67,0.2) (track)
- Fill: linear-gradient(90deg, gold-400, gold-600) — animates width 0→100% over 2s
- Triggers when `.process__wrapper` enters viewport

**Step Icon:**

- Size: 100×100px circle
- Background: white to cream gradient
- Border: 4px solid white
- Shadow: rgba(212,168,67,0.2)
- Numbered badge: 28px circle, red-500 bg, white text, positioned top-right
- Dashed border ring: 2px dashed, rgba(212,168,67,0.4), spins slowly (15s linear infinite)

**Stagger:** Steps appear with 0.2s delay increments (0.2s, 0.4s, 0.6s, 0.8s, 1.0s)

**Responsive (≤768px):**

- Progress line: vertical (left 48px, full height)
- Steps: vertical column, gap 40px
- Each step: horizontal layout (icon left, text right)
- Icons: 80×80px

---

## 5. Data Model

```
ProcessStep
├── number: number — step number (1-5)
├── icon: string — emoji
├── title: string — step title
└── description: string — step description
```

---

## 6. Edge Cases & Error Handling

| ID | Scenario | Expected Behavior | Severity |
|----|---------|------------------|----------|
| EC-01 | User scrolls past section before animation | Uses viewport.once, still triggers | Low |
| EC-02 | Emojis don't render on older OS | Graceful fallback, steps still readable | Low |

---

## 7. Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|------------|-------------------|
| NFR-01 | Performance | CSS animation for spinning border (not JS) |
| NFR-02 | Accessibility | Ordered list semantics or aria-label for sequence |
| NFR-03 | Responsive | Vertical layout at ≤768px |

---

## 8. Unit Test Cases (TDD)

#### TC-01: ProcessSteps renders all 5 steps
**Given:** ProcessSteps component with data  
**When:** Rendered  
**Then:** 5 steps visible with icons and titles

#### TC-02: ProcessStep displays number badge
**Given:** ProcessStep with number=3  
**When:** Rendered  
**Then:** Badge shows "3"

---

## 9. Browser Test Scenarios

| ID | Test Case | Expected Result | Status |
|----|----------|----------------|--------|
| BT-01 | Progress line animates on scroll | Line fills left to right | Pending |
| BT-02 | Steps stagger in | Steps appear one by one | Pending |
| BT-03 | Mobile vertical layout | At 375px, steps are vertical | Pending |
| BT-04 | Spinning dashed border | Icon border rotates continuously | Pending |

---

## 10. Dependencies

| Component | Notes |
|-----------|-------|
| F0: SectionHeader | Section header |
| F0: lib/motion.ts | staggerContainer, fadeInUp |

---

## 10.3 Required Skills for Implementer

> Subagent **MUST** read these skills before writing any code for this feature.

| Priority | Skill | Path | Reason |
|----------|-------|------|--------|
| 1 (Entry) | `frontend-principles` | `.agents/skills/frontend-principles/SKILL.md` | Core principles, workflow, quality gates |
| 2 | `frontend-arch` | `.agents/skills/frontend-arch/SKILL.md` | Feature folder structure, colocation |
| 3 | `frontend-components` | `.agents/skills/frontend-components/SKILL.md` | Server/Client boundary, CSS animation components |

---

## 11. Acceptance Criteria

- [ ] Section renders with correct header
- [ ] 5 process steps displayed horizontally on desktop
- [ ] Progress line animates width on scroll
- [ ] Step icons have spinning dashed border
- [ ] Numbered badges on each icon
- [ ] Staggered entrance animation
- [ ] Vertical layout on mobile (≤768px)
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
