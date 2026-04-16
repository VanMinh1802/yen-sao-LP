# Contact Section Redesign (Bento Box) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use sdlc:subagent-driven-development (recommended) or sdlc:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the Contact Section into a responsive Bento Block layout containing both the form and the map, perfectly bounded within the standard layout container width.

**Architecture:** Use Flexbox/Grid with tailwind classes on the `ContactSection` to create a 2-column layout on desktop, inside a deeply rounded container with shadow.

**Tech Stack:** React, Next.js, Tailwind CSS

---

## Task 1: Update ContactForm UI structure 

**Files:** `src/features/contact/components/ContactForm.tsx`

**Goal:** Remove explicit max-width and internal rounded box UI, as it will be constrained by the parent Bento wrapper.

**Implementation Steps:**

- [ ] Open `src/features/contact/components/ContactForm.tsx`.
- [ ] Modify the main container `div`:
  - Change `max-w-[480px]` to `w-full h-full flex flex-col justify-center`.
  - Remove `p-6 md:p-10`. The padding will be handled by this container but let's change it to `p-8 lg:p-12`.
  - Remove `backdrop-blur-2xl border border-gold-500 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.4),...]`.
  - Add explicit sizing to perfectly fill its allocated column padding: `w-full h-full bg-gradient-to-br from-[rgba(38,17,8,0.95)] to-[rgba(138,28,28,0.95)] p-8 lg:p-12 z-20 relative flex flex-col justify-center`.
- [ ] Ensure that the inner content flows efficiently and buttons do not exceed bounds. 
- [ ] **Verification:** No logic changed, only UI `className` modifications. No testing needed as this is a purely visual change.

---

## Task 2: Update GoogleMap Container for the Bento Layout

**Files:** `src/features/contact/components/GoogleMap.tsx`

**Goal:** Ensure Google Map adjusts its height automatically without static heights. 

**Implementation Steps:**

- [ ] We will manage the map's bounds entirely inside `ContactSection.tsx` so we do not need to modify `GoogleMap.tsx` directly if it just accepts parent sizing. Proceed to Task 3.

---

## Task 3: Implement Bento Layout in ContactSection

**Files:** `src/features/contact/components/ContactSection.tsx`

**Goal:** Create the parent grid that manages both the map and the form.

**Implementation Steps:**

- [ ] Open `src/features/contact/components/ContactSection.tsx`.
- [ ] Replace the entire return statement with standard container wrapping:
```tsx
  return (
    <section id="contact" className="py-16 md:py-24 bg-cream-50 relative pointer-events-auto">
      <div className="container mx-auto px-4 md:px-6">
        {/* The Bento Box Wrapper */}
        <div className="w-full flex flex-col lg:flex-row rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-brown-900 border border-brown-100/20">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-[45%] lg:min-h-[640px]">
            <ContactForm />
          </div>

          {/* Right Column: Google Map */}
          <div className="w-full h-[350px] lg:w-[55%] lg:h-auto min-h-[350px] relative">
            <GoogleMap />
          </div>

        </div>
      </div>
    </section>
  );
```
- [ ] Review implementation. Note we are switching from `flex flex-col` logic to a `flex flex-col lg:flex-row` pattern, placing the Form on top in mobile.

---

## Task 4: Run Application to Check Layout

**Files:** None

**Goal:** Start Next.js and use the Browser tool to visually verify the Bento Section.

**Implementation Steps:**

- [ ] Execute `npm run dev`.
- [ ] Verify Mobile layout (390px) shows rounded rectangle with form sitting above the map properly.
- [ ] Verify Desktop layout (1440px) shows split columns tightly constrained without any massive empty space.

---

## Self-Review Checklist

- [x] Spec coverage: Replaces absolute map styling with flex Bento layout constraint.
- [x] Placeholder scan: No placeholders, exactly explicit classes and exact code block replacements are specified.
- [x] TDD Compliance: This is a purely structural layout/CSS change so TDD step is skipped as visual regressions are checked manually or via Playwright at the end, not via Jest unit testing.
