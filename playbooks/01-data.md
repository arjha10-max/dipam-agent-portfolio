# Playbook 01 — Data

## Purpose

Build the research and insight foundation for the campaign. The Data stage turns the approved brief into a clear view of category context, consumer behavior, competitors, price-pack architecture, trends, whitespace, and first-party data readiness.

The output must help a strategist make better Identity and Personalization decisions. It is not a research dump.

## Required inputs

- Approved `campaigns/<slug>/00-intake/brief-readiness-summary.md`
- Approved `campaigns/<slug>/STATE.md`
- Source brief in `briefs/`
- Any user-supplied market, retail, sales, or data-access inputs
- Public sources where browsing is available

If a required input is missing, ask for it and mark Stage D as blocked in `STATE.md`.

## Research principles

- Use only credible public sources for market facts.
- Use sources no older than five years unless explaining a historical baseline.
- Cite the publisher, publication date, and access date for every external fact.
- Keep a source log for every externally sourced claim.
- If a fact cannot be validated, label it: `Illustrative assumption, validate before use.`
- Keep synthetic sample data clearly labelled as synthetic.
- Separate facts, assumptions, and recommendations.
- Make a recommendation and show rejected alternatives.
- Every insight needs a business implication.

## Process

### 1. Confirm scope

From the approved Intake output, confirm:

- Category definition
- Brand and product scope
- Markets
- Launch timing
- Budget envelope
- Priority KPIs
- Compliance constraints
- Known data gaps

Record any scope changes in `STATE.md`.

### 2. Build the source plan

Create a source plan covering:

- Category size and growth
- Consumer drivers, occasions, and barriers
- Channel and retailer behavior
- Competitor products, prices, positioning, claims, promotions, and media presence
- Privacy or consent requirements relevant to data use
- Measurement and retail reporting availability

Use `templates/source-log.csv` to capture sources.

### 3. Size the category and identify growth dynamics

Cover:

- Category definition and boundaries
- Market size or directional scale where available
- Growth drivers and constraints
- Channel and retailer dynamics
- Market differences between Canada and the United States, where relevant
- Implications for launch prioritization

Do not force a precise number when only directional evidence exists.

### 4. Analyze consumer behavior

Cover:

- Category entry points
- Jobs to be done
- Usage occasions
- Purchase triggers
- Barriers and anxieties
- Decision criteria
- Retailer and channel behavior
- Media and content behavior
- Differences between current category buyers and growth audiences

Translate findings into insight statements with a clear `So what`.

### 5. Build the competitor pricing and positioning matrix

For each relevant competitor or competitive substitute, capture:

- Market
- Brand and product
- Pack or size
- Price and currency
- Price per comparable unit where possible
- Pack role
- Positioning
- Claims
- Promotion cadence
- Retail presence
- Media presence
- Source and date
- Confidence

Use `templates/competitor-pricing-positioning.csv`.

### 6. Create the price-pack recommendation

Recommend:

- Lead SKU
- Trial pack
- Repeat or pantry-loading pack
- Market-specific price architecture
- Pack role by channel
- Promotional guardrails
- Test-and-learn plan

Show rejected alternatives and why they were rejected.

Use `templates/price-pack-recommendation.md`.

### 7. Identify trends and whitespace

Cover:

- Consumer trends
- Product or ingredient trends
- Channel and retail trends
- Media and content trends
- Unmet needs
- Positioning whitespace
- Risks or fads to avoid

Rank whitespace opportunities by:

- Consumer relevance
- Brand credibility
- Commercial potential
- Ability to execute
- Compliance risk

### 8. Audit first-party data readiness

Assess each data asset on:

- Consent status
- Access status
- Identity readiness
- Data quality
- Freshness
- Coverage
- Privacy risk
- Activation readiness
- Measurement usefulness

Use `templates/data-readiness-scorecard.csv`.

Escalate if a data gap blocks a required audience or measurement commitment.

### 9. Synthesize the decision

The final research brief should answer:

1. What is happening in the category?
2. Why is it happening?
3. Where can the brand credibly win?
4. Which audience and occasion should lead?
5. What price-pack architecture should support the launch?
6. What data gaps must be resolved before Identity or Activation?
7. What should the strategist do next?

## Required outputs

Create the following files:

```text
campaigns/<slug>/01-data/research-brief.md
campaigns/<slug>/01-data/source-log.csv
campaigns/<slug>/01-data/competitor-pricing-positioning.csv
campaigns/<slug>/01-data/price-pack-recommendation.md
campaigns/<slug>/01-data/insight-statements.md
campaigns/<slug>/01-data/data-readiness-scorecard.csv
```

Use:

- `templates/research-brief.md`
- `templates/source-log.csv`
- `templates/competitor-pricing-positioning.csv`
- `templates/price-pack-recommendation.md`
- `templates/insight-statements.md`
- `templates/data-readiness-scorecard.csv`

## Quality checks

Before requesting approval, confirm:

- Every external fact has a source, publication date, and access date.
- Every synthetic data point is labelled synthetic.
- Every assumption has a confidence level.
- Competitor prices identify market, pack, currency, and date.
- Insights include a business implication.
- The price-pack recommendation is specific enough to guide media and retail planning.
- Data-readiness gaps name the affected audience, activation route, or KPI.
- Risks and rejected alternatives are explicit.
- All outputs end with the required sections.

## Escalation triggers

Stop and escalate when:

- Category size or growth claims cannot be validated and are material to the plan
- Competitor pricing is unavailable for a priority market
- A product claim lacks substantiation
- A data-readiness gap blocks a required audience
- Clean-room or retailer access is required but not contracted
- Budget expectations conflict with observed market costs
- Privacy or consent risk requires legal review
- The brief's KPI targets conflict with the evidence base

Use the escalation format in `AGENTS.md`.

## Gate

Update `campaigns/<slug>/STATE.md`, then stop and request:

```text
APPROVE DATA
```
