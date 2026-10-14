# Playbook 00 — Intake

## Purpose

Turn one client brief into a decision-ready campaign starting point. The goal is not to solve the brief yet. The goal is to establish what is known, what is missing, what is assumed, and whether the campaign is ready for Data.

## Required input

One Markdown or text brief in `briefs/`.

Minimum useful fields:

- Brand and product
- Business problem
- Objectives and KPIs
- Budget and exclusions
- Markets and timing
- Audience hypotheses
- Constraints
- Compliance or claims requirements
- Existing data
- Approvers

If any are missing, continue with explicit assumptions unless the gap blocks a required decision. Ask no more than five clarifying questions.

## Process

### 1. Create the campaign workspace

1. Read the brief.
2. Create a campaign slug from the title or filename.
3. Create `campaigns/<slug>/`.
4. Create `campaigns/<slug>/STATE.md`.
5. Create `campaigns/<slug>/00-intake/`.
6. Record the source brief, current stage, gate status, and date in `STATE.md`.

### 2. Extract the brief

Capture the following in structured form:

| Area | What to extract | Readiness check |
|---|---|---|
| Business context | Category, brand, product, launch problem | Is the problem specific enough to guide research? |
| Objectives | Business, marketing, media, and measurement objectives | Are they mutually consistent? |
| KPIs | Targets, definitions, timeframes, baselines | Can each KPI be measured? |
| Budget | Total, currency, exclusions, phasing | Is media separated from production and fees? |
| Markets | Countries, regions, priority markets | Are regulatory needs clear? |
| Timing | Launch date, planning windows, deadlines | Are dependencies realistic? |
| Product | Formats, sizes, price points, claims, distribution | Are product facts synthetic or sourced? |
| Audience | Current buyers and growth hypotheses | Is there enough to build three profiles? |
| Data | First-party, retail, web, clean-room access | Are consent and access gaps clear? |
| Compliance | Claims, privacy, consent, industry rules | Is legal review required? |
| Approvers | Client, legal, strategy, media, analytics | Are decision rights explicit? |

### 3. Identify gaps and contradictions

Flag:

- Missing KPI definitions or baselines
- Budget that conflicts with market or channel expectations
- Timing that conflicts with production, contracting, or data onboarding
- Audience ambitions that exceed available data
- Claims that may need substantiation
- Approver gaps that could stall gate decisions
- Measurement requirements without an agreed data source

### 4. State assumptions

For every material unknown, record:

- Assumption
- Confidence: High, Medium, or Low
- Business impact
- How to validate it

Do not hide assumptions in narrative. Put them in a table.

### 5. Ask clarifying questions

Ask no more than five questions. Prioritize questions that unblock later stages:

1. Budget and phasing
2. KPI definitions
3. Data access and consent
4. Claims or compliance constraints
5. Approval ownership

### 6. Decide readiness

Use one readiness status:

- **Ready:** proceed to Data with no material blockers
- **Ready with assumptions:** proceed only after the assumptions are explicitly logged
- **Blocked:** do not proceed until the named inputs are supplied

## Required output

Create:

```text
campaigns/<slug>/00-intake/brief-readiness-summary.md
```

Use `templates/brief-readiness-summary.md` when it exists.

## Output template

```markdown
# Brief Readiness Summary

- Campaign: <campaign name>
- Campaign slug: `<slug>`
- Source brief: `briefs/<file>`
- Date: <YYYY-MM-DD>
- Data status: Synthetic portfolio exercise
- Readiness: Ready | Ready with assumptions | Blocked

## 1. Executive read

<Three to five sentences: what the brief is asking, the primary challenge, and the recommended next move.>

## 2. Brief extraction

### Business context

### Objectives

### KPIs

| KPI | Definition | Baseline | Target | Timing | Source | Confidence |
|---|---|---:|---:|---|---|---|

### Budget

| Budget item | Amount | Currency | Included/Excluded | Assumption | Confidence |
|---|---:|---|---|---|---|

### Markets and timing

| Market | Role | Timing | Notes | Confidence |
|---|---|---|---|---|

### Product and distribution

### Audience hypotheses

### Constraints and dependencies

### Compliance and claims requirements

### Existing data and readiness

| Data asset | Market | Consent status | Access status | Use case | Gap |
|---|---|---|---|---|---|

### Approvers

| Role | Approval responsibility | Named in brief? | Risk |
|---|---|---:|---|

## 3. Missing or contradictory items

| Severity | Item | Why it matters | Recommended resolution |
|---|---|---|---|

## 4. Clarifying questions

1. <question>
2. <question>
3. <question>
4. <question>
5. <question>

## 5. Readiness decision

<Ready, Ready with assumptions, or Blocked. Explain the decision in plain language.>

## So what

<What this means for the next stage.>

## Decision needed

Request the exact approval phrase: `APPROVE INTAKE`.

## Assumptions and confidence

| Assumption | Confidence | Impact | Validation needed |
|---|---|---|---|
```

## Guardrails

- Do not conduct category research in Intake.
- Do not create audiences, media plans, or creative recommendations in Intake.
- Do not treat assumptions as facts.
- Do not ask more than five questions.
- Do not advance without `APPROVE INTAKE`.
- Do not include personal data.
- Label all sample-brief content as synthetic.

## Escalation triggers

Escalate immediately if the brief contains:

- Conflicting KPIs or budget instructions
- Unsupported or high-risk product claims
- Missing legal or privacy review for a sensitive category
- A data requirement that would involve raw PII movement
- A launch date that cannot accommodate required approval gates
- No accountable client approver

## Gate

Update `campaigns/<slug>/STATE.md`, then stop and request:

```text
APPROVE INTAKE
```
