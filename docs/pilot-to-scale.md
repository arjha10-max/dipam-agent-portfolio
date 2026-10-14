# Pilot to Scale

This document defines how an agency could pilot the DIPAM agent on one or two brand launches, measure whether it works, and scale it responsibly across a portfolio. It is a synthetic portfolio plan and does not describe a real company's internal rollout.

## 1. Pilot objective

Prove that a brief-driven, human-gated agent can improve campaign launch speed, consistency, and decision quality without weakening privacy, claims, commercial, or operational controls.

## 2. Pilot scope

Run one or two synthetic or sanitized brand launches through the full workflow:

1. Intake
2. Data
3. Identity
4. Personalization
5. Simulated MPA
6. Activation planning and pre-flight QA
7. Measurement using a supplied performance export

Recommended pilot brands:

- Vividance functional hydration
- DermaNova barrier-repair skincare

Using both shows portability across categories.

## 3. Pilot success metrics

| Metric | Baseline approach | Pilot target | Measurement method |
|---|---|---:|---|
| Planning and analysis hours | Manual baseline | 25–35% reduction | Time tracking by stage |
| Brief readiness completeness | Variable | 100% of required fields assessed | Intake template |
| Gate compliance | Informal approvals | 100% of approvals logged | `STATE.md` |
| Assumption transparency | Inconsistent | 100% of stage outputs include assumptions and confidence | Output QA |
| Rework cycles | Manual baseline | 20% reduction | Revision log |
| Claims or privacy breaches | 0 target | 0 | Legal/privacy review |
| Pre-flight blocker visibility | Late discovery | 100% of Critical and High blockers logged before go-live | Dependency tracker |
| Measurement readiness | Often defined late | KPI tree and export dictionary completed before analysis | Measurement QA |
| User adoption | New workflow | At least 80% of pilot team uses required gates | Team feedback and state log |

These are pilot targets, not guaranteed outcomes.

## 4. Pilot phases

### Phase A — Prepare

- Select one or two synthetic or sanitized briefs.
- Name human owners for strategy, client approval, legal/privacy, media, activation, and analytics.
- Baseline current hours and rework for a comparable campaign.
- Confirm no real client or proprietary data enters the public repository.
- Align escalation thresholds and approval language.

### Phase B — Run the workflow

- Start with `start briefs/<file>`.
- Review each stage output.
- Use exact approval phrases.
- Log revisions and decisions in `STATE.md`.
- Track where the agent saves time and where humans must correct it.

### Phase C — Evaluate

Compare the pilot against the baseline on:

- Hours by stage
- Output completeness
- Revision cycles
- Approval clarity
- Data and privacy issues
- Claims issues
- Activation blockers
- Measurement readiness
- Team adoption and confidence

### Phase D — Decide

Use one of three decisions:

1. **Scale:** expand to additional brands with light adaptation
2. **Revise:** fix workflow, templates, training, or governance before expanding
3. **Stop:** discontinue if the workflow adds burden without improving quality or speed

## 5. Scale model

### Stage 1 — Template scale

- Keep the core workflow and gates fixed.
- Create category-specific examples.
- Build claims and compliance libraries by category.
- Add approved vendor and retailer input formats.

### Stage 2 — Team scale

- Train strategists, media planners, implementation teams, ad operations, and analysts.
- Name a workflow owner for each brand or portfolio.
- Create a feedback routine after every campaign.
- Use the escalation matrix in team reviews.

### Stage 3 — Data-and-technology scale

Add integrations only after the manual workflow proves valuable:

- Governed source libraries
- Data inventory and consent systems
- Clean-room query workflows
- Vendor proposal and IO ingestion
- Tag QA exports
- Performance data pipelines
- Dashboard or reporting connectors

### Stage 4 — Portfolio scale

- Support multiple campaigns with separate `STATE.md` files.
- Maintain shared playbooks and templates.
- Track cross-brand learning.
- Add portfolio-level governance for claims, privacy, model quality, and adoption.

## 6. Enablement and change management

| Audience | What they need | Enablement approach |
|---|---|---|
| Strategists | How to brief, review, and challenge outputs | Live walkthrough and stage-gate checklist |
| Client leads | How approvals and escalation work | Approval map and decision log demo |
| Legal/privacy | Where claims and consent risks appear | Claims matrix, consent matrix, escalation triggers |
| Media planners | How audience, budget, and channel logic connects | Personalization approval pack walkthrough |
| Implementation and ad ops | How dependencies and QA are tracked | Activation tracker and pre-flight rehearsal |
| Analytics | How exports, KPI trees, and test designs work | Measurement dry run with supplied export |
| Leadership | What value and risk look like | CMO narrative and pilot scorecard |

## 7. Scale governance

Before scaling, confirm:

- Human approval remains mandatory.
- No raw PII enters the repository.
- Claims review remains category-specific.
- Measurement never invents performance data.
- Template changes are versioned.
- Teams have a way to report friction and failure modes.
- ROI assumptions are replaced with measured pilot results.

## 8. Scale decision framework

Scale only if the pilot demonstrates:

1. Material time savings or quality improvement
2. Strong gate compliance
3. No Critical privacy or claims failures
4. Better visibility into activation blockers
5. Positive team adoption
6. Measurement outputs that improve decisions
7. A manageable path for data-and-technology integration
