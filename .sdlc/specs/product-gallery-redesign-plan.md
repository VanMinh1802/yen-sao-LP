# Product Section Gallery Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use sdlc:subagent-driven-development (recommended) or sdlc:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Products section into a premium split-screen layout featuring a 2-column Product Grid on the left and a beautiful Masonry Photo Gallery on the right with AI-generated artistic photos.

**Architecture:** Use CSS Grid on `ProductsSection` for top-level splitting (7 cols left, 5 cols right). Build a new `ProductGallery` component utilizing Tailwind's `grid` or `columns` utilities for an irregular, aesthetic image stack.

**Tech Stack:** React, Next.js, Tailwind CSS, AI Generation Tool (for images)

---

## Task 1: Generate Artistic Imagery

**Files:** `public/images/gallery/*`

**Goal:** Obtain premium, high-quality photos of bird's nest subjects to use in the gallery layout. 

**Implementation Steps:**

- [ ] Execute `generate_image` tool (if inline execution) or use standard assets to create/download 4 images:
  1. Hình ảnh nghệ thuật về không gian nuôi yến vách đá hùng vĩ. (Lưu vào: `public/images/gallery/nha-yen.webp`)
  2. Bàn tay thợ thủ công đang mài/làm sạch tổ yến tỉ mỉ. (Lưu vào: `public/images/gallery/tho-mai.webp`)
  3. Một chén yến chưng đường phèn táo đỏ sang trọng. (Lưu vào: `public/images/gallery/chen-yen.webp`)
  4. Một tổ yến thô hình bán nguyệt nguyên bản cực đẹp sáng rực rỡ. (Lưu vào: `public/images/gallery/nghe-thuat.webp`)
- [ ] Ensure all images are correctly moved/saved to `public/images/gallery/`. Provide placeholders temporarily if generation pauses.
- [ ] No TDD needed for image asset generation.

---

## Task 2: Create ProductGallery Component

**Files:** `src/features/products/components/ProductGallery.tsx`

**Goal:** Build the masonry grid UI for the 4 images.

**Implementation Steps:**

- [ ] Create `ProductGallery.tsx`:
```tsx
import Image from "next/image";

export function ProductGallery() {
  return (
    <div className="w-full grid grid-cols-2 gap-4 h-full relative group">
      {/* Cột Trái chứa 2 ảnh (Ảnh 1 ở trên cao hơn) */}
      <div className="flex flex-col gap-4 mt-8">
        <div className="relative w-full h-[280px] rounded-[24px] overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500">
          <Image
            src="/images/gallery/nha-yen.webp"
            alt="Nhà yến tự nhiên"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative w-full h-[350px] rounded-[24px] overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500">
          <Image
            src="/images/gallery/tho-mai.webp"
            alt="Thợ thủ công làm sạch yến"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Cột Phải chứa 2 ảnh (Ảnh 1 cao và đẩy lên sát đỉnh) */}
      <div className="flex flex-col gap-4">
        <div className="relative w-full h-[380px] rounded-[24px] overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500">
          <Image
            src="/images/gallery/chen-yen.webp"
            alt="Chén yến sào chưng thượng hạng"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative w-full h-[220px] rounded-[24px] overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500">
          <Image
            src="/images/gallery/nghe-thuat.webp"
            alt="Tổ yến thô tinh khiết"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
```
- [ ] Visual structural change only (no Jest testing required).

---

## Task 3: Split Layout in ProductsSection

**Files:** `src/features/products/components/ProductsSection.tsx`, `src/features/products/components/index.ts`

**Goal:** Restructure the page to house both the grid and the new gallery layout side-by-side.

**Implementation Steps:**

- [ ] Export the new component in `src/features/products/components/index.ts`:
```typescript
export * from "./ProductGallery";
```

- [ ] Update `src/features/products/components/ProductsSection.tsx`:
Replace the current `{/* <ProductGrid /> */}` single div display with:
```tsx
import { SectionHeader } from "@/features/shared";
import { ProductGrid } from "./ProductGrid";
import { ProductGallery } from "./ProductGallery";

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-cream-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          label="Bộ Sưu Tập"
          title="Sản Phẩm Yến Sào"
          subtitle="Mỗi sản phẩm đều được tuyển chọn kỹ lưỡng, đảm bảo chất lượng tự nhiên từ nhà yến riêng tại Nha Trang."
        />

        <div className="mt-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Pane - Product List (7 Columns) */}
          <div className="lg:col-span-7">
            <ProductGrid />
          </div>

          {/* Right Pane - Visual Gallery (5 Columns) */}
          <div className="lg:col-span-5 hidden md:block">
            <ProductGallery />
          </div>
        </div>
      </div>
    </section>
  );
}
```
*(Notice we hid the gallery on very small screens (`hidden md:block`) as stacking it on mobile might make the product section overwhelmingly long, prioritizing the actual products).*

---

## Task 4: Responsive Constraints for ProductGrid

**Files:** `src/features/products/components/ProductGrid.tsx`

**Goal:** Ensure the grid fits perfectly in its new smaller 7-column bounding box. Change max columns from 3 to 2.

**Implementation Steps:**

- [ ] Locate `<motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">`.
- [ ] Replace it with `<motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-6">`
- [ ] No TDD needed (visual CSS string replacement).

---

## Self-Review Checklist

- [x] Spec coverage: Gallery layout? Yes. Side-by-side grid? Yes.
- [x] Placeholder scan: Exact paths and fully implemented component code provided.
- [x] Consistency: Grid columns align mechanically (7+5 = 12).
- [x] TDD: Explicitly bypassed for UI structural components, handled by final visual QA.
