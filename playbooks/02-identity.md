# Playbook 02 — Identity

## Purpose

Turn the approved Data-stage insight foundation into three decision-ready consumer profiles and a practical signal plan. Identity defines who the campaign should prioritize, why they matter, how to find them, how to respect consent, and how each audience should be measured.

The output must be usable by Creative, Media, Data, Activation, and Measurement. It is not a persona decoration exercise.

## Required inputs

- Approved `campaigns/<slug>/00-intake/brief-readiness-summary.md`
- Approved `campaigns/<slug>/01-data/research-brief.md`
- Approved `campaigns/<slug>/01-data/insight-statements.md`
- Approved `campaigns/<slug>/01-data/data-readiness-scorecard.csv`
- Approved `campaigns/<slug>/STATE.md`

If any input is missing or unapproved, ask for it and mark Stage I as blocked.

## Identity principles

- Build exactly three consumer profiles unless the brief explicitly says otherwise.
- Use one **CORE** profile and two **GROWTH** profiles.
- CORE means defend, retain, upsell, or increase purchase frequency.
- GROWTH means recruit new-to-brand buyers.
- Differentiate profiles by motivation, occasion, barrier, or value—not by superficial demographic labels alone.
- Keep audience sizes synthetic unless a validated source or approved data asset supports them.
- Do not use sensitive personal characteristics or inferred health conditions for targeting.
- Use consent-based first-party data, contextual signals, platform-native audiences, lookalikes, or clean-room-matched audiences only where permitted.
- Make every profile actionable for creative, media, activation, and measurement.

## Process

### 1. Confirm audience requirements

From Intake and Data, confirm:

- Number of profiles required
- Market scope
- Business role of current buyers versus new buyers
- Category and brand relationship
- Audience exclusions
- Data-readiness constraints
- Measurement commitments

Record scope changes in `STATE.md`.

### 2. Define the profile architecture

Use this default architecture:

| Profile type | Count | Business role | Planning role |
|---|---:|---|---|
| CORE | 1 | Defend and upsell current category or brand buyers | Efficiency, retention, frequency, retail conversion |
| GROWTH | 2 | Recruit new-to-brand buyers | Reach, education, trial, incremental growth |

Do not create additional profiles without an explicit brief instruction and a recorded decision.

### 3. Build each profile

For each profile, define:

- Name
- Profile type: CORE or GROWTH
- Synthetic size estimate by market
- Demographics
- Psychographics
- Jobs to be done
- Needs and motivations
- Occasions
- Channel and retailer behavior
- Media habits
- Barriers
- Message triggers
- Proof points
- Value to the brand
- Relationship to the category and brand
- How to find them
- Identity and consent approach by market
- Measurement hypothesis

Use `templates/audience-profile.md`.

### 4. Estimate audience size

For each market, provide:

- Synthetic estimate
- Basis for estimate
- Reachable portion
- Confidence level
- Data source or assumption
- Whether the estimate is directional or activation-ready

Do not present synthetic estimates as market facts.

### 5. Prioritize the profiles

Rank each profile using:

- Business value
- Growth potential
- Ability to reach
- Data readiness
- Creative relevance
- Retail or channel fit
- Measurement feasibility
- Compliance risk

Use `templates/audience-prioritization.csv`.

### 6. Map audiences to signals

For each profile, map:

- First-party signals
- Contextual signals
- Retail signals
- Platform-native signals
- Lookalike or modeled signals
- Clean-room signals
- Exclusion signals
- Consent requirements
- Measurement hooks

Use `templates/audience-signal-map.csv`.

### 7. Define consent and identity by market

For Canada and the United States, identify:

- Eligible data source
- Consent basis
- Activation route
- Clean-room requirement
- Suppression requirement
- Retention or deletion requirement
- Market-specific privacy risk
- Approval needed before use

Use `templates/identity-consent-matrix.csv`.

### 8. Define measurement hypotheses

Each profile needs a testable hypothesis, such as:

- If the audience receives the lead message, qualified engagement should exceed the campaign benchmark.
- If the audience is exposed to retail media, new-to-brand purchase should increase versus a matched control.
- If frequency exceeds a defined threshold, marginal response should decline.

Every hypothesis needs:

- Metric
- Expected direction
- Data source
- Decision threshold
- Optimization action if proven or disproven

### 9. Prepare for Personalization

End the stage with clear handoff recommendations for:

- Lead message by profile
- Creative territory implications
- Platform and vendor implications
- Budget priority
- Funnel role
- Testing agenda
- Activation constraints

## Required outputs

Create:

```text
campaigns/<slug>/02-identity/audience-profiles.md
campaigns/<slug>/02-identity/audience-prioritization.csv
campaigns/<slug>/02-identity/audience-signal-map.csv
campaigns/<slug>/02-identity/identity-consent-matrix.csv
```

Use:

- `templates/audience-profile.md`
- `templates/audience-prioritization.csv`
- `templates/audience-signal-map.csv`
- `templates/identity-consent-matrix.csv`

## Quality checks

Before requesting approval, confirm:

- Exactly three profiles exist unless the brief says otherwise.
- One profile is CORE and two are GROWTH.
- Each profile has a distinct motivation, occasion, or barrier.
- Audience sizes are labelled synthetic or supported by an approved source.
- Every profile has a defined value to the brand.
- Every profile has an activation route and measurement hypothesis.
- Consent requirements are identified by market.
- Sensitive targeting is excluded.
- Data gaps that block activation are escalated.
- Handoff implications for Creative and Media are clear.
- All Markdown outputs end with the required sections.

## Escalation triggers

Stop and escalate when:

- Data readiness blocks a required profile
- The brief requests sensitive or prohibited targeting
- Consent status is unclear for first-party activation
- Clean-room access is required but unavailable
- A proposed audience cannot be measured against the approved KPIs
- Audience size appears too small to support efficient media delivery
- Legal or privacy review is required before profile approval

Use the escalation format in `AGENTS.md`.

## Gate

Update `campaigns/<slug>/STATE.md`, then stop and request:

```text
APPROVE IDENTITY
```
