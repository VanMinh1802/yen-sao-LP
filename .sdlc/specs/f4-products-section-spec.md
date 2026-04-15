# SDD - F4: Products Section

## Document Metadata

```yaml
spec_id: SDD-2026-F04
title: "Products Section"
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

Feature F4 implements the product showcase section with tabbed category filtering and interactive 3D flip cards. Each card reveals product details on hover (front→back rotation), providing an engaging way to explore the product lineup.

### 1.2 Scope

**In Scope:**

- Section header with label/title/subtitle
- Tab filter buttons (Tất Cả, Yến Thô, Hộp Quà Tặng, Yến Tinh Chế)
- 3-column product card grid
- 3D flip cards (front: image + name + description + price; back: details + CTA)
- Product badges (Bán Chạy, Quà Tặng, Đặc Biệt)
- Tab filtering logic (show/hide cards by category)
- Scroll-triggered entrance animations

**Out of Scope:**

- E-commerce cart / checkout
- Product detail pages
- Price display (all "Liên hệ giá")
- Search within products

---

## 2. Proposed Folder Structure

### 2.1 New Files & Directories

```
src/features/products/
├── components/
│   ├── ProductsSection.tsx     # Section wrapper (Server Component)
│   ├── ProductTabs.tsx         # Tab filter buttons (Client Component)
│   ├── ProductGrid.tsx         # Grid layout with filtering (Client Component)
│   ├── ProductCard.tsx         # 3D flip card (Client Component)
│   └── ProductCardBack.tsx     # Back face of flip card
├── data/
│   └── products-data.ts        # Static product content
├── types/
│   └── product.types.ts        # Product type + Zod schema
└── index.ts                    # Public exports
```

### 2.4 Folder Structure Checklist

- [x] Feature-based architecture followed
- [x] Types defined in `types/` with Zod schema
- [x] Data colocated in `data/`
- [x] ProductTabs + ProductGrid are Client Components (interactivity)
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
| US-01 | Visitor | browse all products | I can see the full range available | Must Have |
| US-02 | Visitor | filter products by category | I find exactly what I'm looking for | Should Have |
| US-03 | Visitor | hover a card to see details | I learn more without navigating away | Must Have |
| US-04 | Visitor | click "Nhận Tư Vấn Ngay" | I can get in touch about a product | Must Have |

### 3.2 User Flows

```
Flow: Product Browsing & Filtering
Actor: Visitor

Step 1: Visitor scrolls to Products section
Step 2: All 6 products are displayed in 3-column grid
Step 3: Visitor clicks "Yến Thô" tab
Step 4: Grid filters to show only products in "raw" category
Step 5: Visitor hovers a product card
Step 6: Card flips 180° revealing back face with details
Step 7: Visitor clicks "Nhận Tư Vấn Ngay" on back face
Step 8: Page smooth-scrolls to Contact section
End: Visitor reaches contact form
```

---

## 4. Functional Requirements

### 4.1 Core Features

#### Feature F-01: Product Tabs

**Description:** Category filter tabs with active state.

**Tabs:**

| ID | Label | Filter Value |
|----|-------|-------------|
| tab-all | Tất Cả | all |
| tab-raw | Yến Thô | raw |
| tab-gift | Hộp Quà Tặng | gift |
| tab-refined | Yến Tinh Chế | refined |

**Styling:**

- Default: white bg, 2px border black-10, 50px border-radius, 14px, font-weight 600
- Hover: gold-500 border, gold-600 text
- Active: red gradient bg, white text, red shadow
- ARIA: role="tab", aria-selected

#### Feature F-02: Product Card (3D Flip)

**Description:** Card with front/back faces that flips on hover.

**Card Structure:**

- Container: 480px fixed height, perspective 1000px
- Inner: transition transform 0.8s cubic-bezier, transform-style preserve-3d
- Front face: white bg, image (240px), body (name, description, price, action)
- Back face: red-to-gold gradient bg, rotateY(180deg), detail list + CTA button
- Hover triggers: rotateY(180deg) on inner container

**Front Face Elements:**

- Image: 240px height, object-fit cover, zoom scale(1.08) on hover
- Badge (optional): absolute top-left, red gradient pill
- Name: 20px, font-weight 700, brown-800
- Description: 14px, brown-600
- Footer: price (red-500, italic) + "Chi tiết ⤻" action link

**Back Face Elements:**

- Detail list: emoji icon + title (gold-300) + description
- CTA button: "Nhận Tư Vấn Ngay"
  - White bg, red-700 text, 50px border-radius, uppercase
  - Hover: gold-400 bg, white text

#### Feature F-03: Product Data

**6 Products:**

| # | Name | Category | Badge | Image |
|---|------|----------|-------|-------|
| 1 | Yến Thô Nguyên Tổ | raw | Bán Chạy | yen-tho-nguyen-to.jpeg |
| 2 | Hộp Quà Cao Cấp | gift | Quà Tặng | hop-qua-cao-cap.jpeg |
| 3 | Yến Sợi Cao Cấp | refined | — | yen-soi-cao-cap.jpeg |
| 4 | Yến Tinh Chế | refined | — | yen-tinh-che.jpg |
| 5 | Set Quà Đặc Biệt | gift | Đặc Biệt | set-qua-dac-biet.jpeg |
| 6 | Yến Thô Đảo | raw | — | yen-tho-dao.jpg |

> **Enhancement over mockup:** In the original mockup, tab clicks only change the active button style — they don't actually filter cards. Our React implementation adds real category filtering. The `category` field on each product is defined by us based on product names.

**Image Source Mapping (for F0 asset copy):**

| Destination | Source File |
|------------|------------|
| /images/products/yen-tho-nguyen-to.jpeg | assets/ảnh yến/IMG_7363.jpeg |
| /images/products/hop-qua-cao-cap.jpeg | assets/ảnh yến/IMG_7591.jpeg |
| /images/products/yen-soi-cao-cap.jpeg | assets/ảnh yến/IMG_7594.jpeg |
| /images/products/yen-tinh-che.jpg | assets/ảnh yến/IMG_7320.jpg |
| /images/products/set-qua-dac-biet.jpeg | assets/ảnh yến/IMG_9319.jpeg |
| /images/products/yen-tho-dao.jpg | assets/ảnh yến/IMG_7365.jpg |

**Responsive:**

- ≤1024px: 2-column grid
- ≤768px: 1-column grid

---

## 5. Data Model

```
Product
├── id: string — unique identifier
├── name: string — product name
├── description: string — short description
├── category: 'raw' | 'gift' | 'refined'
├── badge: string | null — optional badge text
├── imageSrc: string — image path
├── imageAlt: string — image alt text
├── price: string — "Liên hệ giá"
└── details: ProductDetail[]

ProductDetail
├── icon: string — emoji
├── title: string — detail title
└── description: string — detail text
```

**Zod Schema:**

```typescript
const productDetailSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  category: z.enum(['raw', 'gift', 'refined']),
  badge: z.string().nullable(),
  imageSrc: z.string(),
  imageAlt: z.string(),
  price: z.string(),
  details: z.array(productDetailSchema),
});
```

---

## 6. Edge Cases & Error Handling

| ID | Scenario | Expected Behavior | Severity |
|----|---------|------------------|----------|
| EC-01 | User taps card on mobile (no hover) | Card flips on tap/click instead | High |
| EC-02 | Active tab has zero matching products | Empty state or show all | Low |
| EC-03 | Card image fails to load | Placeholder or alt text | Low |

---

## 7. Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|------------|-------------------|
| NFR-01 | Performance | Product images lazy-loaded |
| NFR-02 | Accessibility | Tab buttons have role="tab", aria-selected |
| NFR-03 | Accessibility | Card flip accessible (consider keyboard) |
| NFR-04 | Responsive | Grid adapts at 1024px and 768px |

---

## 8. Unit Test Cases (TDD)

#### TC-01: ProductTabs renders all 4 tabs
**Given:** ProductTabs component
**When:** Rendered  
**Then:** 4 tab buttons visible

#### TC-02: Tab click filters products
**Given:** ProductGrid with 6 products, filter="raw"
**When:** "Yến Thô" tab active  
**Then:** Only products with category "raw" visible

#### TC-03: ProductCard renders front face
**Given:** ProductCard with name, description, image
**When:** Rendered  
**Then:** Name, description, image, price visible

#### TC-04: Product Zod schema validates correctly
**Given:** Valid product data object
**When:** Parsed with productSchema  
**Then:** Parsing succeeds without errors

---

## 9. Browser Test Scenarios

| ID | Test Case | Expected Result | Status |
|----|----------|----------------|--------|
| BT-01 | All 6 products visible initially | 6 product cards in grid | Pending |
| BT-02 | Tab filtering works | Click "Yến Thô", only raw products shown | Pending |
| BT-03 | Card flips on hover | Hover card, back face visible | Pending |
| BT-04 | CTA on back links to contact | Click "Nhận Tư Vấn Ngay", scrolls to #contact | Pending |
| BT-05 | Mobile responsive | At 375px, cards stack 1 column | Pending |

---

## 10. Dependencies

| Component | Notes |
|-----------|-------|
| F0: SectionHeader | Section header pattern |
| F0: lib/motion.ts | Animation variants |
| F0: public/images/products/ | 6 product images |

---

## 10.3 Required Skills for Implementer

> Subagent **MUST** read these skills before writing any code for this feature.

| Priority | Skill | Path | Reason |
|----------|-------|------|--------|
| 1 (Entry) | `frontend-principles` | `.agents/skills/frontend-principles/SKILL.md` | Core principles, workflow, quality gates |
| 2 | `frontend-arch` | `.agents/skills/frontend-arch/SKILL.md` | Feature folder structure, Zod types in types/ |
| 3 | `frontend-components` | `.agents/skills/frontend-components/SKILL.md` | Interactive client components, ARIA tabs pattern |

---

## 11. Acceptance Criteria

- [ ] 4 tab buttons render with correct labels
- [ ] Active tab has red gradient styling
- [ ] All 6 product cards render in 3-column grid
- [ ] Tab filtering correctly shows/hides products
- [ ] 3D flip animation works on hover (desktop)
- [ ] 3D flip works on tap (mobile)
- [ ] Back face shows details + CTA button
- [ ] CTA scrolls to #contact
- [ ] Badges render on correct products
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
