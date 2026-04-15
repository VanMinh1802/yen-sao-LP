# SDD - F8: Contact Section

## Document Metadata

```yaml
spec_id: SDD-2026-F08
title: "Contact Section"
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

Feature F8 implements the contact section with a full-width Google Maps embed as background and a floating glassmorphism contact form card. This section provides multiple ways for visitors to reach the business.

### 1.2 Scope

**In Scope:**

- Full-width Google Maps iframe embed
- Floating glassmorphism form card over the map
- Contact form with 3 fields (name, phone, message)
- Form validation using Zod + React Hook Form
- Mock form submission with success feedback
- Contact info grid (address, phone, email, Zalo)
- Social media links (Facebook, TikTok)

**Out of Scope:**

- Real form backend (email/DB submission)
- Live chat integration
- Appointment booking
- reCAPTCHA

---

## 2. Proposed Folder Structure

### 2.1 New Files & Directories

```
src/features/contact/
├── components/
│   ├── ContactSection.tsx      # Section with map (Server Component)
│   ├── ContactForm.tsx         # Form with validation (Client Component)
│   ├── ContactInfo.tsx         # Info grid + social links
│   └── GoogleMap.tsx           # Map iframe embed
├── types/
│   └── contact.types.ts        # Zod schema for form validation
└── index.ts                    # Public exports
```

### 2.4 Folder Structure Checklist

- [x] Feature-based architecture followed
- [x] Types defined with Zod schema in `types/`
- [x] ContactForm is Client Component (form state, hooks)
- [x] GoogleMap can be Server Component (static iframe)
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
| US-01 | Visitor | see the business location on a map | I know where they're located | Must Have |
| US-02 | Visitor | submit my contact info | I receive a callback/consultation | Must Have |
| US-03 | Visitor | see phone/email directly | I can contact immediately | Must Have |
| US-04 | Visitor | find Facebook/social links | I can follow or message them | Should Have |

### 3.2 User Flows

```
Flow: Contact Form Submission (Mock)
Actor: Visitor

Step 1: Visitor scrolls to Contact section
Step 2: Google Maps shows business location in background
Step 3: Visitor fills in name field
Step 4: Visitor fills in phone field (10-11 digits)
Step 5: Visitor optionally fills in message
Step 6: Visitor clicks "Gửi Yêu Cầu Tư Vấn"
Step 7: Form validates — if valid:
  - Button text changes to "✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm."
  - Button background turns green
  - Button is disabled for 3 seconds
  - Form resets after 3 seconds
Step 8: If invalid — inline error messages appear
End: Visitor sees success confirmation (or corrects errors)
```

### 3.3 Error Flows

```
Flow: Form Validation Failure
Trigger: User submits with invalid phone number

Step 1: User enters name: "Nguyễn Văn A"
Step 2: User enters phone: "abc"
Step 3: User clicks submit
Step 4: Phone field shows error: "Số điện thoại không hợp lệ"
Step 5: Name field passes (no error)
End: User corrects phone number and resubmits
```

---

## 4. Functional Requirements

### 4.1 Core Features

#### Feature F-01: Google Maps Embed

**Description:** Full-width background map showing business location.

**Business Rules:**

- Map: full width, full height (min-height 640px)
- Embedded Google Maps URL pointing to "Yến sào Ngọc Thảo Khánh Hòa"
- Filter: contrast(1.05) brightness(0.95) for stylistic adjustment
- Loading: lazy
- z-index: 1 (below form card)

#### Feature F-02: Glassmorphism Form Card

**Description:** Floating card overlaying the map with contact form.

**Styling:**

- Max-width: 480px
- Background: linear-gradient(135deg, rgba(38,17,8,0.95), rgba(138,28,28,0.95))
- Border: 1px solid gold-500
- Border-radius: 20px
- Backdrop-filter: blur(16px)
- Box-shadow: 0 20px 50px rgba(0,0,0,0.4), inset gold glow
- Padding: 40px
- z-index: 2

**Card Header:**

- Title: "Kết Nối Với Chúng Tôi" — gold-400, 28px, font-weight 700
- Subtitle: "Gửi Yêu Cầu Tư Vấn Mua Hàng" — white-70, 15px

#### Feature F-03: Contact Form

**Description:** Form with 3 fields and Zod validation.

**Fields:**

| Field | Type | Placeholder | Required | Validation |
|-------|------|-------------|----------|------------|
| name | text | Nhập họ và tên của bạn * | Yes | Min 1 character |
| phone | tel | Số Điện Thoại (VD: 0919217882) * | Yes | Regex: `^[0-9]{10,11}$` |
| message | textarea | Bạn quan tâm tới sản phẩm nào? Hoặc muốn đặt lịch tham quan nhà yến? | No | Optional |

**Zod Schema:**

```typescript
const contactFormSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ và tên"),
  phone: z.string().regex(/^[0-9]{10,11}$/, "Số điện thoại không hợp lệ (10-11 chữ số)"),
  message: z.string().optional(),
});
```

**Input Styling:**

- Background: rgba(0,0,0,0.25)
- Border: 1px solid rgba(255,255,255,0.15)
- Border-radius: 12px
- Color: white
- Placeholder: rgba(255,255,255,0.4)
- Focus: gold-500 border, gold glow ring, darker background

**Submit Button:**

- Text: "Gửi Yêu Cầu Tư Vấn"
- Background: gold-500, color: brown-900
- Border-radius: 12px
- Full width
- Hover: gold-400, translateY(-2px), shadow

**Success State (3 seconds):**

- Text: "✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm."
- Background: green gradient (#16a34a → #15803d)
- Button disabled
- Form resets after timeout

#### Feature F-04: Contact Info Grid

**Description:** Grid of contact details below the form.

**Layout:** 2-column grid, gap 16px, bordered on top

**Info Items:**

| Icon | Content |
|------|---------|
| 📍 | Nha Trang, Khánh Hòa |
| 📞 | 0919 217 882 (tel: link) |
| ✉️ | yensaongocthao@gmail.com (mailto: link) |
| 💬 | Zalo Official |

**Social Links:**

| Icon | URL | Title |
|------|-----|-------|
| 📘 | https://www.facebook.com/yensaongocthao | Facebook |
| 🎵 | # | TikTok |

**Social Link Styling:**

- 40×40px, border-radius 12px
- Background: rgba(255,255,255,0.08)
- Hover: gold-500 bg, brown-900 text, translateY(-3px)

**Responsive (≤768px):**

- Map: relative position, height 350px
- Form card: overlaps map by -60px margin-top
- Info grid: 1-column

---

## 5. Data Model

```
ContactFormData
├── name: string — visitor name
├── phone: string — phone number (10-11 digits)
└── message: string | undefined — optional message
```

---

## 6. Edge Cases & Error Handling

| ID | Scenario | Expected Behavior | Severity |
|----|---------|------------------|----------|
| EC-01 | Google Maps iframe blocked by ad blocker | Map area shows blank, form still works | Medium |
| EC-02 | User submits form twice rapidly | Button disabled on first submit, prevents double | High |
| EC-03 | Phone with country code (+84) | Validation only accepts 10-11 digits (no +) | Medium |
| EC-04 | Very long name input | No max length, but field scrolls | Low |
| EC-05 | Form submitted while success state active | Button is disabled, prevents re-submit | Medium |

---

## 7. Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|------------|-------------------|
| NFR-01 | Performance | Map iframe lazy-loaded |
| NFR-02 | Accessibility | Form fields have proper labels or aria-label |
| NFR-03 | Accessibility | Error messages linked to fields via aria-describedby |
| NFR-04 | Responsive | Card overlaps map on mobile |
| NFR-05 | Security | No sensitive data stored client-side |

---

## 8. Unit Test Cases (TDD)

#### TC-01: Contact form renders 3 fields
**Given:** ContactForm  
**When:** Rendered  
**Then:** Name input, phone input, message textarea visible

#### TC-02: Zod validation rejects invalid phone
**Given:** Phone value "abc123"  
**When:** contactFormSchema.safeParse called  
**Then:** Returns error with phone message

#### TC-03: Zod validation accepts valid phone
**Given:** Phone value "0919217882"  
**When:** contactFormSchema.safeParse called  
**Then:** Returns success

#### TC-04: Submit shows success state
**Given:** Valid form data  
**When:** Form submitted  
**Then:** Button shows success text for 3 seconds

---

## 9. Browser Test Scenarios

| ID | Test Case | Expected Result | Status |
|----|----------|----------------|--------|
| BT-01 | Map renders | Google Maps iframe visible | Pending |
| BT-02 | Form card overlays map | Glassmorphism card on top of map | Pending |
| BT-03 | Validation error on empty submit | Error messages for name and phone | Pending |
| BT-04 | Successful mock submit | Button turns green with success text | Pending |
| BT-05 | Phone link is clickable | Tap phone number initiates call | Pending |
| BT-06 | Mobile responsive | Map above, form below at 375px | Pending |

---

## 10. Dependencies

| Dependency | Notes |
|-----------|-------|
| zod | Form validation schema |
| react-hook-form | Form state management |
| @hookform/resolvers | Zod resolver |
| F0: Design tokens | Brand colors |

> **Note:** This section does NOT use the shared `SectionHeader` component. The section header ("Kết Nối Với Chúng Tôi") is part of the glassmorphism form card itself.

---

## 10.3 Required Skills for Implementer

> Subagent **MUST** read these skills before writing any code for this feature.

| Priority | Skill | Path | Reason |
|----------|-------|------|--------|
| 1 (Entry) | `frontend-principles` | `.agents/skills/frontend-principles/SKILL.md` | Core principles, workflow, quality gates |
| 2 | `frontend-arch` | `.agents/skills/frontend-arch/SKILL.md` | Feature folder structure, Zod types in types/ |
| 3 | `frontend-components` | `.agents/skills/frontend-components/SKILL.md` | Client components, form composition |
| 4 | `frontend-data-fetching` | `.agents/skills/frontend-data-fetching/SKILL.md` | Zod schema validation, React Hook Form integration |

---

## 11. Acceptance Criteria

- [ ] Google Maps embed renders with correct location
- [ ] Glassmorphism card floats over map
- [ ] Form validates name (required) and phone (10-11 digits)
- [ ] Validation errors display below fields
- [ ] Successful submit shows green success state for 3 seconds
- [ ] Form resets after success timeout
- [ ] Contact info grid shows address, phone, email, Zalo
- [ ] Social links (Facebook, TikTok) render with hover effects
- [ ] Responsive layout at ≤768px
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
