# Yến Sào Ngọc Thảo — SPEC Index

> Tổng quan tất cả SPEC documents cho dự án Landing Page.

## Feature Breakdown

| ID | Feature | SPEC File | Priority | Dependencies | Status |
|----|---------|-----------|----------|-------------|--------|
| **F0** | Project Setup & Design System | [f0-project-setup-spec.md](./f0-project-setup-spec.md) | Critical | None | 📝 Draft |
| **F1** | Header & Footer Layout | [f1-header-footer-spec.md](./f1-header-footer-spec.md) | Critical | F0 | 📝 Draft |
| **F2** | Hero Section | [f2-hero-section-spec.md](./f2-hero-section-spec.md) | High | F0, F1 | 📝 Draft |
| **F3** | About / Timeline Section | [f3-about-timeline-spec.md](./f3-about-timeline-spec.md) | High | F0 | 📝 Draft |
| **F4** | Products Section | [f4-products-section-spec.md](./f4-products-section-spec.md) | High | F0 | 📝 Draft |
| **F5** | Process Section | [f5-process-section-spec.md](./f5-process-section-spec.md) | Medium | F0 | 📝 Draft |
| **F6** | Why Us / Bento Grid | [f6-why-us-bento-spec.md](./f6-why-us-bento-spec.md) | High | F0 | 📝 Draft |
| **F7** | Testimonials Carousel | [f7-testimonials-spec.md](./f7-testimonials-spec.md) | High | F0 | 📝 Draft |
| **F8** | Contact Section | [f8-contact-section-spec.md](./f8-contact-section-spec.md) | High | F0 | 📝 Draft |
| **F9** | Responsive & Final Polish | [f9-responsive-polish-spec.md](./f9-responsive-polish-spec.md) | Medium | F0-F8 | 📝 Draft |

## Implementation Phases

```
Phase 0 (Foundation)    ──→  F0: Project Setup & Design System
                              │
Phase 1 (Layout)        ──→  F1: Header & Footer
                              │
Phase 2 (Parallel)      ──→  F2: Hero ─────────────────────┐
                              F3: About/Timeline ────────────┤
                              F4: Products ───────────────────┤
                              F5: Process ────────────────────┤
                              F6: Why Us ─────────────────────┤
                              F7: Testimonials ───────────────┤
                              F8: Contact ────────────────────┘
                              │
Phase 3 (Polish)        ──→  F9: Responsive & Polish
```

## Review Workflow

1. 📝 **Draft** — SPEC written, awaiting review
2. 🔍 **In Review** — Reviewer is reading
3. ❓ **Clarification** — Changes requested
4. ✅ **Approved** — Ready for implementation
5. 🚧 **In Progress** — Being implemented
6. ✔️ **Done** — Implemented + all tests passed

## Status Legend

- 📝 Draft — Chờ review
- ✅ Approved — Đã duyệt
- 🚧 Building — Đang implement
- ✔️ Done — Hoàn thành
