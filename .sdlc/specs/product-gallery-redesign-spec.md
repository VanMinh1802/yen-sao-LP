# SDD - Product Section Gallery Layout

## Overview

This document specifies the redesign of the `ProductsSection` to implement a split-screen premium layout. Instead of an isolated product grid, we introduce a dedicated Masonry Photo Gallery next to the product listings to showcase lifestyle and harvesting imagery, enhancing the emotional storytelling of the brand.

---

## Document Metadata

```yaml
spec_id: SDD-2026-003
title: "Product Section Gallery Redesign (Option C)"
author: "Antigravity"
date: "2026-04-16"
status: In Review
priority: Medium
type: Feature
related_issues: []
related_specs: []
```

---

## 1. Introduction

### 1.1 Purpose

Currently, the `ProductGrid` spans the entire screen width, which can feel sparse on ultra-wide desktop monitors and lacks visual storytelling context. By integrating a dynamic masonry gallery (Option C), we provide users with a visual narrative of the bird's nest harvesting and processing alongside the actual products they can purchase.

### 1.2 Scope

**In Scope:**
- Create a new component `ProductGallery.tsx` displaying an irregular grid (masonry) of 3-4 images.
- Modify `ProductsSection.tsx` to use a CSS Grid layout splitting the view into two panes on large screens:
  - Left pane: `ProductGrid`
  - Right pane: `ProductGallery`
- Adjust `ProductGrid.tsx` internal responsive columns to `sm:grid-cols-2 lg:grid-cols-2` to accommodate the reduced horizontal space without squishing cards.

**Out of Scope:**
- Changing product data or logic inside `ProductCard.tsx`.
- Adding image lightbox viewing features (clicking image to zoom). This is purely a visual layout enhancement.

---

## 2. Proposed Folder Structure

### 2.1 New Files & Directories

```text
src/
└── features/
    └── products/
        └── components/
            ├── ProductGallery.tsx  (NEW)   # Masonry visual component
            ├── ProductGrid.tsx     (MODIFIED) # Update internal columns limit
            └── ProductsSection.tsx (MODIFIED) # Wrapping layout
```

---

## 3. UI/UX Design

### 3.1 Masonry Grid Layout

The `ProductGallery` will use Tailwind's `grid` or `columns-2` to create a stack of images with alternating heights.
Images to be utilized initially (as placeholders or permanent assets):
- `nha-yen.webp`
- `hinh-yen.webp`
- `yen-tinh-che.webp`

These images will have border radii (`rounded-2xl` or `rounded-3xl`) and shadow hovering effects to match the premium brand aesthetic.

### 3.2 Responsive Behavior

- **Mobile (< 1024px):** 
  - `ProductGrid` shows first (1 column, or 2).
  - `ProductGallery` stacks *below* the products (or can be hidden if space is a concern, but stacked is preferred).
- **Desktop (>= 1024px):** 
  - The section forms a 12-column grid.
  - Left 7 columns: `ProductGrid`
  - Right 5 columns: `ProductGallery`

---

## 4. Browser Test Scenarios (Playwright)

| Scenario | Steps | Expected Result |
|----------|-------|-----------------|
| Layout Split | Open site on 1440px desktop | Product list is on the left, gallery on the right. Side by side without layout shifting overlapping. |
| Grid Responsiveness | Open site on 1440px | ProductGrid inside left pane limits itself to 2 items per row, avoiding card squishing. |
| Mobile Stack | Open site on 390px mobile viewport | Photo Gallery is pushed to the bottom of the section below products. |

---

## 5. Review & Approval

**Required Approvals:**
- [ ] Folder Structure
- [ ] Full Document Review
