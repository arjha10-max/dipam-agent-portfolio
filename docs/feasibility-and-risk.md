# Feasibility and Risk

This document separates what the DIPAM agent can credibly do now from what needs data-and-technology support or human accountability. It also defines the risk register for piloting the workflow.

## 1. Feasibility view

| Capability | Agent-ready now | Needs data-and-tech support | Needs a human | Rationale |
|---|---:|---:|---:|---|
| Read a brief and extract requirements | Yes | No | Review | Structured extraction is well suited to an agent |
| Identify missing or contradictory brief items | Yes | No | Review | Agent can flag gaps; strategist judges materiality |
| Summarize public category research | Yes | Source access helps | Yes | Agent can synthesize; human validates credibility and implication |
| Build competitor pricing matrices | Partially | Retail and pricing data | Yes | Public web collection is possible, but current verified pricing needs governed sources |
| Recommend price-pack architecture | Draft only | Sales and margin data | Yes | Agent can structure options; commercial owner decides |
| Audit first-party data readiness | Partially | Data inventory and consent records | Yes | Agent can score documented inputs; it cannot verify enterprise access alone |
| Build three audience profiles | Yes | Audience sizing and clean-room data | Yes | Agent can draft profiles; strategist and data owner validate |
| Define consent approach by market | Draft only | Privacy and consent systems | Yes | Legal/privacy owner remains accountable |
| Create message architecture | Yes | Claims library | Yes | Agent can draft; legal and client approve claims |
| Evaluate channels and vendors | Draft only | Rate cards, vendor access, historical benchmarks | Yes | Agent can compare criteria; investment lead negotiates and commits |
| Allocate budget scenarios | Yes | Historical performance and vendor minimums | Yes | Agent can model scenarios; client approves spend |
| Reconcile MPA to plan | Yes | MPA and vendor documents | Yes | Agent can compare documents; human resolves discrepancies |
| Track IOs, blocking, specs, and dependencies | Yes | Vendor and trafficking inputs | Yes | Agent can maintain trackers; humans sign and deliver |
| Build tagging plans | Yes | Tag manager and platform access | Yes | Agent can specify; implementation requires system access |
| QA campaigns | Partially | Platform exports and automated checks | Yes | Agent can check supplied evidence; ad ops owns launch readiness |
| Analyze supplied performance exports | Yes | Clean data feeds | Yes | Agent can analyze files; analyst validates interpretation |
| Design incrementality tests | Yes | Platform and clean-room support | Yes | Agent can design; measurement owner validates feasibility |
| Recommend optimization | Draft only | Performance and constraints | Yes | Human approves reallocation |
| Sign IOs or MPAs | No | Workflow system | Yes | Commercial authority cannot be delegated to the agent |
| Traffic or launch campaigns | No | Platform access | Yes | Operational accountability remains with ad ops |
| Move raw PII | No | Secure enterprise systems | Yes | Outside the portfolio prototype and privacy-by-design principles |

## 2. Pilot feasibility recommendation

Start with a template-driven pilot on one or two synthetic or sanitized brand launches. Use the agent for structure, synthesis, drafting, reconciliation, and QA support. Keep humans responsible for claims, privacy, commercial commitments, platform execution, and optimization approval.

## 3. Risk register

| ID | Risk | Likelihood | Impact | Severity | Early indicator | Mitigation | Owner |
|---|---|---|---|---|---|---|---|
| R1 | Data readiness is overstated | Medium | High | High | Audience cannot be activated or measured as planned | Use data-readiness scorecard and consent matrix before Identity approval | Data and technology lead |
| R2 | Privacy or consent breach | Low | Very high | Critical | Unclear consent basis or request to move raw PII | Prohibit raw PII, document consent, use privacy-safe routes, require legal review | Client privacy lead |
| R3 | Claims compliance failure | Medium | High | Critical | Product claim lacks substantiation or uses prohibited language | Claims guardrails, legal review, approved claims library | Client legal/regulatory lead |
| R4 | Integration gap between planning and activation | High | Medium | High | Vendor specs, tags, or audience routes are unavailable | Dependency tracker, implementation checklist, pre-flight QA gate | Agency activation lead |
| R5 | Adoption friction among teams | High | Medium | Medium | Teams bypass templates or treat outputs as extra admin | Pilot with clear roles, short training, stage-gate champions, and feedback loop | Engagement lead |
| R6 | Hallucinated or unsupported content | Medium | High | High | Claims lack source, state, or approved input | Source log, confidence labels, required assumptions section, human review | Agency strategist |
| R7 | Over-automation of accountable decisions | Medium | High | Critical | Agent advances without exact approval or drafts commitment language | Hard gates, state log, MPA and QA controls, escalation matrix | Engagement lead |
| R8 | Poor performance-data quality | Medium | High | High | Missing fields, naming mismatches, or platform conflicts | Export dictionary, validation checks, reconciliation, no analysis without supplied data | Agency analytics lead |
| R9 | Misinterpretation of attribution | High | Medium | Medium | Platform-reported conversions treated as causal | Label attribution limits, use incrementality tests and triangulation | Agency analytics lead |
| R10 | Vendor or inventory constraint | Medium | Medium | Medium | Rate, minimum, or inventory conflicts with plan | Channel evaluation, negotiation log, rejected alternatives, contingency scenario | Agency investment lead |
| R11 | Inconsistent numbers across outputs | Medium | Medium | Medium | Budget, dates, or KPI totals differ by document | Shared state, reconciliation templates, consistency review | Operations lead |
| R12 | Portfolio confidentiality risk | Low | High | High | Real client or proprietary data appears in public repo | Synthetic-only rule, sanitization review, no secrets, pre-push review | Repository owner |
| R13 | Static workflow becomes too rigid | Medium | Medium | Medium | Teams force every campaign through identical detail | Keep core gates fixed and tailor templates by category and market | Engagement lead |
| R14 | Measurement expectations exceed available data | Medium | High | High | Client expects MMM or lift without required history or test design | State measurement limits, design feasible tests, label MMM-lite as directional | Analytics lead |
| R15 | Security or credential exposure | Low | Very high | Critical | API keys or tokens requested or committed | No-secrets rule, `.gitignore`, pre-push scan, secure enterprise integration outside repo | Technology lead |

## 4. Risk treatment plan

### Before pilot

- Confirm synthetic or sanitized data only.
- Name human approvers for strategy, legal/privacy, media, activation, and analytics.
- Define what the agent may draft and what it may never do.
- Set escalation thresholds for budget, pacing, tracking, and anomalies.

### During pilot

- Review `STATE.md` at every gate.
- Track unsupported claims, missing inputs, and manual rework.
- Compare agent outputs against human QA.
- Record time saved and failure modes.

### After pilot

- Keep controls that prevented errors.
- Simplify steps that added administrative burden without improving quality.
- Add data connectors only where the manual handoff is proven and governed.
- Expand to more brands only after approval quality and adoption are stable.

## 5. Human accountability model

| Decision | Agent role | Human owner |
|---|---|---|
| Brief readiness | Summarize and recommend | Strategist |
| Research direction | Synthesize and recommend | Strategist |
| Audience approval | Draft profiles and consent implications | Strategist, client, privacy lead |
| Claims approval | Draft guardrails and flag risk | Legal/regulatory lead |
| Media plan approval | Build scenarios and recommendation | Client and investment lead |
| MPA sign-off | Prepare reconciliation | Client media lead |
| IO signature | Track terms | Authorized commercial owner |
| Tag and launch QA | Check supplied evidence | Ad operations lead |
| Optimization action | Recommend and quantify confidence | Client and analytics lead |
