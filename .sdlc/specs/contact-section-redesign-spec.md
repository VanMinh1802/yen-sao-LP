# SDD - Contact Section Redesign (Bento Layout)

## Overview

This specification details the redesign of the Contact Section ("Kết Nối Với Chúng Tôi") into a modern "Bento Box" container layout.

---

## Document Metadata

```yaml
spec_id: SDD-2026-002
title: "Contact Section Redesign (Bento Box)"
author: "Antigravity"
date: "2026-04-16"
status: In Review
priority: High
type: Enhancement
related_issues: []
related_specs: []
```

---

## 1. Introduction

### 1.1 Purpose

The current Contact Section suffers from a visual imbalance on large screens: the Google Map background spans the full viewport width, while the Contact Form is constrained to the left side within the standard container width. This creates a disproportionate amount of empty map space on the right, lacking structure.

This redesign implements "Option C: Bento Box Layout", which encapsulates both the Contact Form and the Google Map into a single, unified, rounded container that spans the standard layout width (`container mx-auto`). This creates a premium, organized, and balanced interface.

### 1.2 Scope

**In Scope:**
- Refactoring `ContactSection.tsx` to use a bounded container.
- Implementing a CSS Grid layout (`grid-cols-1 lg:grid-cols-2`) for the side-by-side display.
- Styling the unified container with large rounded corners and premium drop shadows.
- Removing full-width map background logic and integrating `GoogleMap` as a direct grid child.
- Tweaking `ContactForm` padding and background to seamlessly fit the left column without redundant shadow elements.

**Out of Scope:**
- Adding new form fields or changing form submission logic (React Hook Form/Zod).
- Changing Google Map iframe integration logic or map location.

---

## 2. Proposed Folder Structure

This is a structural UI refactor of existing components. No new directories or files are required.

### 2.1 Modified Files

```
src/
└── features/
    └── contact/
        └── components/
            ├── ContactSection.tsx  # Will implement the CSS Grid Bento layout
            ├── ContactForm.tsx     # Will remove redundant rounded borders/shadows to fit inside grid
            └── GoogleMap.tsx       # Will adapt to 100% height of parent grid cell
```

---

## 3. UI/UX Design

### 3.1 Layout Architecture

The new layout will be structured as follows:

1. **Wrapper Container:** `<section>` with `container mx-auto px-4 md:px-6` to align with the rest of the site (Hero, About, Products).
2. **Bento Box:** A massive `<div>` acting as the main card.
   - Classes: `rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-2xl bg-[#1A0A00] flex flex-col lg:flex-row`.
3. **Left Column (Form):**
   - Classes: `w-full lg:w-[45%] p-8 lg:p-12`.
   - The dark gradient background of the form will be injected here.
4. **Right Column (Map):**
   - Classes: `w-full lg:w-[55%] h-[350px] lg:h-auto min-h-[400px] relative`.
   - The map iframe will fill this space `absolute inset-0 w-full h-full`.

### 3.2 Responsive Behavior

- **Mobile (< 1024px):** The Bento Box stacks vertically. The Form appears on top, and the Map sits directly below it within the same rounded card.
- **Desktop (>= 1024px):** The Bento Box splits horizontally, creating the side-by-side split screen perfectly framed within the main padded container.

---

## 4. Implementation Details

1. **`ContactForm.tsx` Adjustments:**
   - Remove outer absolute positioning (`relative z-20 pointer-events-auto max-w-[480px]`).
   - Remove its own border and shadow (since the parent Bento Box will have the main shadow).
   - Expand to `w-full` to fit the parent grid column perfectly.
   
2. **`ContactSection.tsx` Adjustment:**
   - Drop the current `absolute inset-0` map hack.
   - Implement the `flex flex-col lg:flex-row` Bento container.
   - Inject `<ContactForm />` and `<GoogleMap />`.

---

## 5. Browser Test Scenarios (Playwright)

| Scenario | Steps | Expected Result |
|----------|-------|-----------------|
| Layout Boundaries | Load the `#contact` section | The section does not trigger horizontal scrolling and remains strictly inside the max container width. |
| Mobile Stack | View page on 390px viewport | Form and Map stack vertically within heavily rounded boundaries. Map is perfectly visible below the form. |
| Desktop Split | View page on 1440px viewport | Form and Map sit side-by-side within a centered card. Left and right margins match the header boundaries. |

---

## 6. Review & Approval

**Required Approvals:**
- [ ] Folder Structure (N/A)
- [ ] Full Document Review
