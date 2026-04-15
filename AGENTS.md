<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# AGENTS.md - Project Agent Rules

## Overview

This project is a Next.js 16+ (App Router) React frontend application, following
the Bulletproof React architecture best practices.

**Important: All tasks MUST start by reading the `frontend-principles` skill —
it is the ENTRY skill.**

## Required Skills (in priority order)

Before starting any task, read the relevant skills in the following order:

| Priority     | Skill                    | Path                                             | Purpose                                                                                           |
| ------------ | ------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| 1 (Required) | `frontend-principles`    | `.cursor/skills/frontend-principles/SKILL.md`    | Core frontend principles, workflow, and quality gates. **Must be read before any task.**          |
| 2            | `frontend-arch`          | `.cursor/skills/frontend-arch/SKILL.md`          | Architecture rules and project structure — for creating features or organizing folders            |
| 3            | `frontend-components`    | `.cursor/skills/frontend-components/SKILL.md`    | Component design rules and patterns — for creating components or analyzing component structure    |
| 4            | `frontend-data-fetching` | `.cursor/skills/frontend-data-fetching/SKILL.md` | Data fetching rules including React Query and authentication — for APIs, mutations, caching, etc. |
| 5            | `frontend-nextjs-16`     | `.cursor/skills/frontend-nextjs-16/SKILL.md`     | Next.js 16+ specific principles — for Server Components, Server Actions, etc.                     |
| 6            | `frontend-quality`       | `.cursor/skills/frontend-quality/SKILL.md`       | Quality gates, hard rules, and review checklist — for code review and bug fixes                   |
| 7            | `frontend-security`      | `.cursor/skills/frontend-security/SKILL.md`      | Critical security patterns (HIGH PRIORITY) — NEVER violate these rules.                           |

## Workflow

```
New Task → Read relevant skill(s) → Create SPEC (SDD) → Human Review → Plan → Implement → Browser Testing → Quality Gate Check → Done
```

### Workflow Steps Detail

#### Step 1: Read Relevant Skills

- Read the `frontend-principles` skill FIRST (entry skill)
- Read other relevant skills based on task type
- Do NOT skip skill reading — it ensures compliance with project standards

#### Step 2: Create SPEC (SDD)

- Create a new SPEC document using the SDD template at `.sdlc/SPEC.md`
- The SPEC MUST be created BEFORE any code is written
- SPEC location: `.sdlc/{feature-name}-spec.md`
- Refer to `.sdlc/examples/example-login-spec.md` for a complete example

**SPEC Contents (no code):**

- Document metadata (ID, title, author, status, priority)
- **Proposed folder structure** (Section 2) — NEW, must be reviewed
- User interactions: stories, flows, error flows
- Functional requirements: features, business rules, inputs/outputs
- Data model: entities, state machines
- Edge cases & error handling matrix
- Non-functional requirements
- **Browser test scenarios** (not unit tests — autonomous browser testing via Playwright)
- Dependencies
- Acceptance criteria
- Review & approval section

**Two-Stage Human Review:**

1. **Folder Structure Review** (Section 2.6) — Must be approved BEFORE any code is written
2. **Full Document Review** (Section 10-11) — Must be approved before implementation starts

- Both reviews require at least one reviewer sign-off
- If changes are needed, iterate on SPEC until both stages are approved

#### Step 3: Implement

- Follow all hard rules from `frontend-principles` skill
- Use `subagent-driven-development` to implement
- Follow the checklist from relevant skills
- **NO CODE until SPEC is approved**

#### Step 4: Browser Testing

- Use skill `playwright-cli`
- Execute all test cases defined in the SPEC using browser automation (playwright-cli)
- The agent runs tests autonomously in a real browser environment
- Each test case: setup → execute → assert → document → cleanup
- Record pass/fail for every test case
- If any test fails, fix the implementation before proceeding

#### Step 5: Quality Gate Check

- TypeScript build passed
- ESLint passed
- No hard rules violations
- Implementation matches SPEC exactly
- All browser test cases pass

### Task Type to Skill Mapping

| Task Type           | Required Skills                                                           |
| ------------------- | ------------------------------------------------------------------------- |
| Create new feature  | `frontend-principles` + `frontend-arch` + `frontend-data-fetching` + SPEC |
| UI Component        | `frontend-principles` + `frontend-components` + SPEC                      |
| API / Server Action | `frontend-principles` + `frontend-data-fetching` + SPEC                   |
| Fix Bug             | `frontend-principles` + `frontend-quality` + SPEC                         |
| Refactor            | `frontend-principles` + compare against current principles + SPEC         |

## Core Principles Summary

### 1. Server/Client Boundary

- **Server Component**: Backend logic, SEO, static data
- **Client Component**: Interactivity, hooks, browser APIs
- **Never**: Server Component using `useState`/`useEffect`
- **Never**: Client Component using `async`/`await` at top-level (except Server
  Actions)

### 2. Data Fetching

- **React Query** for client-side data
- Direct `fetch` for Server Components
- 3-layer architecture: **Pure function** → **Query options** → **Hook**
- **Never**: `useEffect` for data fetching
- **Never**: `setState` when server state already exists

### 3. Component Architecture

- Feature-based folder structure
- Atomic components (small, reusable)
- Colocation: tests and styles live with the component
- **Never**: Shared components containing business logic
- **Never**: Props drilling more than 2 levels

### 4. Type Safety

- **Zod** for runtime validation
- `infer` from Zod schema for types
- Strict TypeScript (`strict: true`)
- **Never**: `any` type
- **Never**: Unnecessary type assertions (`as`)

### 5. Error Handling

- Always use Error Boundaries
- Always handle loading states
- Use Error Boundaries instead of scattered `try`/`catch`
- **Never**: Empty catch blocks
- **Never**: Silent failures

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript (strict mode)
- **State/Data**: TanStack Query (React Query) v5
- **Validation**: Zod
- **Form**: React Hook Form
- **Styling**: Tailwind CSS
- **Testing**: Vitest + Testing Library

## Quality Gate Checklist

Before completing any task, verify:

- [ ] SPEC document created (see `.sdlc/SPEC.md` template)
- [ ] Folder structure reviewed and approved (SPEC Section 2.6)
- [ ] SPEC reviewed and approved by at least one reviewer
- [ ] All browser test cases from SPEC executed and passed
- [ ] Implementation matches SPEC exactly
- [ ] TypeScript build passed
- [ ] ESLint passed
- [ ] No hard rules violations
- [ ] Tests written for new logic

## Related Resources

- SDLC & SPEC: [SPEC Template](.sdlc/SPEC.md)
- SDLC Examples: [Login SPEC Example](.sdlc/examples/example-login-spec.md)
- Project main rules:
  [frontend-principles](.cursor/skills/frontend-principles/SKILL.md)
- Architecture rules: [frontend-arch](.cursor/skills/frontend-arch/SKILL.md)
- Component patterns:
  [frontend-components](.cursor/skills/frontend-components/SKILL.md)
- Data fetching rules:
  [frontend-data-fetching](.cursor/skills/frontend-data-fetching/SKILL.md)
- Next.js best practices:
  [frontend-nextjs-16](.cursor/skills/frontend-nextjs-16/SKILL.md)
- Quality gates: [frontend-quality](.cursor/skills/frontend-quality/SKILL.md)
- Security patterns: [frontend-security](.cursor/skills/frontend-security/SKILL.md) — HIGH PRIORITY
