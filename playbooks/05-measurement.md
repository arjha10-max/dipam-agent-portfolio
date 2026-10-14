# Playbook 05 — Measurement

## Purpose

Turn supplied campaign performance data into decision-ready reporting, optimization recommendations, and learning that feeds back into Data, Identity, and Personalization.

Measurement must distinguish observed performance, modeled interpretation, and recommendation. It must never invent performance data.

## Required inputs

- Approved `campaigns/<slug>/00-intake/brief-readiness-summary.md`
- Approved `campaigns/<slug>/03-personalization/client-approval-pack.md`
- Approved `campaigns/<slug>/03-personalization/media-plan.md`
- Approved `campaigns/<slug>/04-activation/qa-checklist.md`
- Approved `campaigns/<slug>/STATE.md`
- User-supplied performance export in `campaigns/<slug>/inputs/`

Before analysis, ask the user to place the performance export in:

```text
campaigns/<slug>/inputs/
```

If no export exists, stop and mark Stage M as blocked. Do not create a performance report from invented data.

## Measurement principles

- Never fabricate performance data.
- Separate platform-reported, site-reported, retailer-reported, modeled, and experimental results.
- Label simplified MMM-lite or attribution views as simplified.
- Use confidence levels for every recommendation.
- Connect every optimization action to a KPI, audience, channel, creative variant, market, or funnel stage.
- Define anomaly and escalation thresholds before interpreting results.
- Make incrementality and brand-lift recommendations privacy-safe and feasible.
- Close the loop back into Data, Identity, and Personalization.

## Process

### 1. Confirm measurement inputs

Check `campaigns/<slug>/inputs/` for the performance export.

Record:

- File name
- Date received
- Date range
- Source platform or platforms
- Market coverage
- Metrics included
- Known limitations
- Whether the file is synthetic or supplied by the user

Use `templates/performance-export-dictionary.csv` to document fields.

### 2. Validate the export

Assess:

- Date coverage
- Market coverage
- Campaign and line-item naming consistency
- Spend, impressions, clicks, conversions, and revenue fields
- Missing values
- Duplicate rows
- Currency consistency
- UTM or naming mismatches
- Platform reconciliation issues

Escalate if data quality prevents reliable analysis.

### 3. Build the KPI tree

Create a funnel-stage KPI tree covering:

- Awareness
- Attention or engagement
- Consideration
- Conversion
- Purchase or retail action
- Repeat or replenishment
- Efficiency
- Incrementality

Use `templates/kpi-tree.md`.

### 4. Define reporting cuts

At minimum, analyze or prepare reporting by:

- Platform
- Geography or market
- Audience
- Creative variant
- Funnel stage
- Retailer or channel
- Time period

If the export does not support a required cut, state the limitation.

### 5. Analyze performance

Use `templates/performance-report.md` to summarize:

- Executive read
- KPI performance versus target
- Spend and pacing
- Market performance
- Audience performance
- Channel and platform performance
- Creative variant performance
- Retailer or channel performance
- Anomalies
- Data limitations
- Recommended actions

Do not infer causality from platform attribution alone.

### 6. Create a simplified MMM-lite or attribution view

When data allows, create a simplified directional view that shows:

- Spend by channel
- Observed response
- Efficiency proxy
- Diminishing-return risk
- Reallocation hypothesis
- Confidence and limitations

Label the output: `Simplified directional view; not a production MMM.`

Use `templates/mmm-lite-view.md`.

### 7. Design incrementality and brand-lift tests

Define:

- Test question
- Hypothesis
- Test and control design
- Market or audience split
- Sample or exposure requirement
- Duration
- Primary metric
- Guardrail metric
- Privacy considerations
- Decision threshold
- Action based on result

Use `templates/incrementality-test-design.md`.

### 8. Build anomaly and escalation rules

Define thresholds for:

- Spend pacing
- Delivery variance
- CTR or engagement anomalies
- Conversion-rate anomalies
- CPA or ROAS anomalies
- Frequency fatigue
- Tracking or tag failure
- Retail availability issues

Use `templates/anomaly-escalation-rules.csv`.

### 9. Recommend optimization actions

For each recommendation, define:

- Decision
- Evidence
- Expected impact
- Affected budget
- Market
- Audience
- Channel
- Creative variant
- Timing
- Risk
- Confidence
- Approval needed

Use `templates/optimization-recommendation.md`.

### 10. Close the learning loop

Document what should be fed back into:

- Data: new category, consumer, competitor, or retail learning
- Identity: audience refinement, suppression, or new signal opportunities
- Personalization: message, creative, channel, budget, or test changes
- Activation: trafficking, pacing, vendor, QA, or measurement changes

## Required outputs

Create:

```text
campaigns/<slug>/05-measurement/performance-export-dictionary.csv
campaigns/<slug>/05-measurement/kpi-tree.md
campaigns/<slug>/05-measurement/performance-report.md
campaigns/<slug>/05-measurement/mmm-lite-view.md
campaigns/<slug>/05-measurement/incrementality-test-design.md
campaigns/<slug>/05-measurement/anomaly-escalation-rules.csv
campaigns/<slug>/05-measurement/optimization-recommendation.md
```

Use the matching files in `templates/`.

## Quality checks

Before requesting approval, confirm:

- A user-supplied performance export exists in `campaigns/<slug>/inputs/`.
- The export is documented and validated.
- No performance values were invented.
- KPI targets tie back to the approved brief and plan.
- Reporting cuts are explicit.
- Simplified MMM-lite or attribution views are labelled as simplified.
- Incrementality and brand-lift designs are feasible and privacy-safe.
- Every recommendation has evidence, expected impact, risk, and confidence.
- Anomaly rules have thresholds and escalation owners.
- Learning loops back to Data, Identity, Personalization, and Activation.
- All Markdown outputs end with the required sections.

## Escalation triggers

Stop and escalate when:

- No performance export has been supplied
- Data quality prevents reliable interpretation
- Platform-reported conversions conflict materially with retailer or site data
- Spend pacing exceeds the approved threshold
- Tracking or tag failure affects a KPI
- A recommendation would require unsupported claims or non-compliant audience data
- Performance results contradict a client commitment
- A proposed reallocation exceeds approval authority

Use the escalation format in `AGENTS.md`.

## Gate

Update `campaigns/<slug>/STATE.md`, then stop and request:

```text
APPROVE OPTIMIZATION
```
