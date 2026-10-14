# Playbook 03 — Personalization

## Purpose

Turn approved Data and Identity outputs into one integrated Creative and Media strategy. Personalization defines what the brand should say, to whom, where, when, with what budget, and how performance signals should flow back into creative and media optimization.

Creative and Media must be planned together. Do not create a media plan that ignores message architecture, or a creative system that cannot be activated and measured.

## Required inputs

- Approved `campaigns/<slug>/00-intake/brief-readiness-summary.md`
- Approved `campaigns/<slug>/01-data/research-brief.md`
- Approved `campaigns/<slug>/01-data/price-pack-recommendation.md`
- Approved `campaigns/<slug>/02-identity/audience-profiles.md`
- Approved `campaigns/<slug>/02-identity/audience-prioritization.csv`
- Approved `campaigns/<slug>/02-identity/audience-signal-map.csv`
- Approved `campaigns/<slug>/02-identity/identity-consent-matrix.csv`
- Approved `campaigns/<slug>/STATE.md`

If any input is missing or unapproved, ask for it and mark Stage P as blocked.

## Personalization principles

- Build one integrated recommendation, not separate creative and media silos.
- Lead with a decisive recommendation and show rejected alternatives.
- Connect every profile to a message, proof point, platform role, budget role, and measurement signal.
- Respect claims guardrails and legal review requirements.
- Use privacy-safe audience activation routes from Identity.
- Show three budget scenarios: Conservative, Expected, and Upside.
- Make clear what is included and excluded from working media.
- Separate validated facts, synthetic planning assumptions, and recommendations.
- Define test-and-learn priorities before Activation.
- Do not enter Activation until `MPA SIGNED`.

## Process

### 1. Confirm strategy inputs

Confirm from approved stages:

- Business, marketing, media, and measurement objectives
- Working media budget and exclusions
- Markets and timing
- Lead and secondary audiences
- Claims and compliance guardrails
- Price-pack recommendation
- Data and consent constraints
- KPI targets

Record conflicts or missing inputs in `STATE.md`.

### 2. Define positioning

Create one campaign positioning that connects:

- Audience tension
- Product truth
- Competitive whitespace
- Brand role
- Approved claim territory

Show rejected positioning alternatives.

### 3. Build message architecture

For each profile, define:

- Primary message
- Secondary message
- Proof points
- Product or ingredient support
- Retailer or value support where relevant
- Objection handling
- Approved claims
- Claims to avoid
- Call to action
- Funnel role

Use `templates/message-architecture.csv`.

### 4. Define creative territories and tone

For each recommended creative territory, define:

- Audience tension
- Creative idea
- Tone
- Visual or narrative cues
- Message fit by profile
- Platform fit
- Claims risk
- Test role

Show rejected territories and why.

### 5. Design the modular creative system

Define modules for:

- Hook
- Problem or occasion
- Product truth
- Proof point
- Retailer or offer
- Call to action
- Legal or claims copy

Specify how modules combine by:

- Profile
- Platform
- Funnel stage
- Market
- Language
- Format
- Retailer where applicable

Use `templates/creative-variant-matrix.csv`.

### 6. Define performance signals that flow back to creative

For each message and format, define the signals that will inform iteration:

- Attention or thumb-stop proxy
- Qualified engagement
- Product-page engagement
- Add-to-cart or store-locator action
- Purchase or retailer proxy
- Brand-lift response
- Incremental conversion
- Frequency fatigue indicator

Do not optimize creative against a metric that does not connect to the approved KPI tree.

### 7. Evaluate platforms and vendors

Evaluate:

- Social
- Video/CTV
- Search
- Retail media
- Programmatic
- Audio
- Out-of-home
- Creators

For each option, document:

- Role in the plan
- Audience fit
- Market fit
- Funnel stage
- Strengths
- Weaknesses
- Cost or efficiency assumption
- Data and targeting capability
- Measurement capability
- Brand-safety considerations
- Selected or rejected
- Rationale

Use `templates/channel-evaluation.csv`.

### 8. Build the media decision logic

Document the decision rules for:

- Audience × platform/vendor
- Audience × budget
- Market × channel
- Funnel stage × format
- Creative variant × platform
- Retail media × distribution readiness
- Frequency × fatigue threshold
- Optimization × learning agenda

### 9. Allocate budget in three scenarios

Create three scenarios:

1. **Conservative:** protect reach and proven channels, fewer tests
2. **Expected:** balanced reach, conversion, and learning
3. **Upside:** stronger incremental investment where confidence is highest

For each scenario, allocate budget by:

- Market
- Audience
- Channel
- Vendor where applicable
- Funnel stage
- Phase

Use `templates/media-plan-budget.csv`.

### 10. Build the media plan

For each line, define:

- Market
- Audience
- Platform or vendor
- Channel
- Funnel stage
- Flight dates
- Budget
- Reach assumption
- Frequency assumption
- KPI target
- Measurement source
- Creative variants
- Rationale

Use `templates/media-plan.md` and `templates/media-plan-budget.csv`.

### 11. Create the test-and-learn agenda

Prioritize tests by:

- Decision value
- Cost to run
- Feasibility
- Measurement confidence
- Risk

Use `templates/test-and-learn-agenda.csv`.

### 12. Assemble the client approval pack

The approval pack should let a client approve:

- Strategic recommendation
- Audience-message fit
- Creative system
- Channel and vendor choices
- Budget allocation
- Flighting
- KPI targets
- Test-and-learn agenda
- MPA-ready planning assumptions

Use `templates/client-approval-pack.md`.

## Required outputs

Create:

```text
campaigns/<slug>/03-personalization/client-approval-pack.md
campaigns/<slug>/03-personalization/message-architecture.csv
campaigns/<slug>/03-personalization/creative-variant-matrix.csv
campaigns/<slug>/03-personalization/channel-evaluation.csv
campaigns/<slug>/03-personalization/media-plan.md
campaigns/<slug>/03-personalization/media-plan-budget.csv
campaigns/<slug>/03-personalization/test-and-learn-agenda.csv
```

Use:

- `templates/client-approval-pack.md`
- `templates/message-architecture.csv`
- `templates/creative-variant-matrix.csv`
- `templates/channel-evaluation.csv`
- `templates/media-plan.md`
- `templates/media-plan-budget.csv`
- `templates/test-and-learn-agenda.csv`

## Quality checks

Before requesting approval, confirm:

- Creative and Media are integrated.
- Every profile has a message, proof point, media role, and measurement signal.
- Every selected channel has a rationale.
- Every rejected channel has a reason.
- Budgets add to the approved working media total.
- Market, audience, channel, funnel stage, and phase are explicit.
- Three budget scenarios exist.
- Reach and frequency are labelled as assumptions unless supported by a vendor plan.
- Claims guardrails are included.
- The test-and-learn agenda is tied to decisions.
- The pack clearly requests the next approval.
- All Markdown outputs end with the required sections.

## Escalation triggers

Stop and escalate when:

- Budget cannot support the approved KPIs
- Claims or creative territory requires legal review
- A preferred channel cannot activate the approved audience compliantly
- Retail distribution is not ready for proposed retail media
- Vendor minimums distort the recommended allocation
- Reach or frequency assumptions cannot be validated
- Creative production cannot support the required variant matrix
- Measurement cannot observe a committed KPI

Use the escalation format in `AGENTS.md`.

## Gate sequence

First, update `campaigns/<slug>/STATE.md`, then stop and request:

```text
APPROVE PERSONALIZATION
```

After the user approves Personalization, request the simulated client-signed media plan authorization:

```text
MPA SIGNED
```

Do not create Activation outputs or enter Stage A until the user types `MPA SIGNED`.
